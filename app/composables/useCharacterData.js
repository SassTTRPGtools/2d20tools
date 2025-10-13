// 角色數據管理系統

export const useCharacterData = (customStorageKey = null) => {
  // 儲存鍵名
  const STORAGE_KEY = customStorageKey || 'cohors-cthulhu-character-data'

  // 獲取所有角色數據
  const getAllCharacterData = () => {
    const data = {
      // 基本角色表數據
      characterSheet: extractFormData('CohorsCthvlhvSheet'),
      
      // 法術數據
      spells: extractFormData('CohorsCthvlhvSpells'),
      
      // 裝備數據
      equipment: extractFormData('CohorsCthvlhvEquipment'),
      
      // 筆記數據
      notes: extractFormData('CohorsCthvlhvNotes'),
      
      // 儲存時間戳
      timestamp: new Date().toISOString()
    }
    
    return data
  }

  // 提取表單數據的通用函數
  const extractFormData = (componentName) => {
    const data = {}
    
    // 根據組件名稱提取不同的數據
    switch (componentName) {
      case 'CohorsCthvlhvSheet':
        // 觸發事件獲取角色表單數據
        const sheetDataEvent = new CustomEvent('getSheetData')
        window.dispatchEvent(sheetDataEvent)
        return window.characterSheetData || {}
        
      case 'CohorsCthvlhvSpells':
        // 觸發事件獲取法術數據
        const spellDataEvent = new CustomEvent('getSpellData')
        window.dispatchEvent(spellDataEvent)
        return window.characterSpellData || {}
        
      case 'CohorsCthvlhvEquipment':
        // 觸發事件獲取裝備數據
        const equipDataEvent = new CustomEvent('getEquipmentData')
        window.dispatchEvent(equipDataEvent)
        return window.characterEquipmentData || {}
        
      case 'CohorsCthvlhvNotes':
        // 觸發事件獲取筆記數據
        const notesDataEvent = new CustomEvent('getNotesData')
        window.dispatchEvent(notesDataEvent)
        return window.characterNotesData || {}
    }
    
    return data
  }

  // 儲存到瀏覽器
  const saveToLocalStorage = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      return { success: true, message: '資料已儲存到瀏覽器' }
    } catch (error) {
      return { success: false, message: `儲存失敗: ${error.message}` }
    }
  }

  // 從瀏覽器載入
  const loadFromLocalStorage = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) {
        return { success: true, data: JSON.parse(data), message: '資料載入成功' }
      } else {
        return { success: false, message: '未找到儲存的資料' }
      }
    } catch (error) {
      return { success: false, message: `載入失敗: ${error.message}` }
    }
  }

  // 匯出為 JSON 檔案
  const exportToJSON = (data) => {
    try {
      const jsonStr = JSON.stringify(data, null, 2)
      const blob = new Blob([jsonStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      
      const a = document.createElement('a')
      a.href = url
      const characterType = STORAGE_KEY.replace('-character-data', '')
      a.download = `${characterType}-character-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      
      return { success: true, message: 'JSON 檔案已下載' }
    } catch (error) {
      return { success: false, message: `匯出失敗: ${error.message}` }
    }
  }

  // 從 JSON 檔案載入
  const importFromJSON = () => {
    return new Promise((resolve) => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.json'
      
      input.onchange = (event) => {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            try {
              const data = JSON.parse(e.target.result)
              resolve({ success: true, data, message: '檔案載入成功' })
            } catch (error) {
              resolve({ success: false, message: `檔案格式錯誤: ${error.message}` })
            }
          }
          reader.readAsText(file)
        } else {
          resolve({ success: false, message: '未選擇檔案' })
        }
      }
      
      input.click()
    })
  }

  // 清除所有資料
  const clearAllData = () => {
    try {
      // 清除瀏覽器儲存
      localStorage.removeItem(STORAGE_KEY)
      
      // 清除表單內容
      document.querySelectorAll('.character-form input, .character-form select, .character-form textarea').forEach(element => {
        if (element.type === 'checkbox' || element.type === 'radio') {
          element.checked = false
        } else {
          element.value = ''
        }
      })
      
      return { success: true, message: '所有資料已清除' }
    } catch (error) {
      return { success: false, message: `清除失敗: ${error.message}` }
    }
  }

  // 應用資料到表單
  const applyDataToForm = (data) => {
    try {
      if (data.characterSheet) {
        applySheetData(data.characterSheet)
      }
      if (data.spells) {
        applySpellData(data.spells)
      }
      if (data.equipment) {
        applyEquipmentData(data.equipment)
      }
      if (data.notes) {
        applyNotesData(data.notes)
      }
      return { success: true, message: '資料已應用' }
    } catch (error) {
      return { success: false, message: `應用失敗: ${error.message}` }
    }
  }

  // 應用角色表單數據
  const applySheetData = (sheetData) => {
    // 使用事件驅動方式載入角色表單數據
    window.dispatchEvent(new CustomEvent('loadCharacterData', { 
      detail: { characterSheet: sheetData }
    }))
  }

  // 應用法術數據
  const applySpellData = (spellData) => {
    window.dispatchEvent(new CustomEvent('loadSpellData', { 
      detail: spellData 
    }))
  }

  // 應用裝備數據
  const applyEquipmentData = (equipmentData) => {
    window.dispatchEvent(new CustomEvent('loadEquipmentData', { 
      detail: equipmentData 
    }))
  }

  // 應用筆記數據
  const applyNotesData = (notesData) => {
    // 使用事件驅動方式載入筆記數據
    window.dispatchEvent(new CustomEvent('loadCharacterData', { 
      detail: { notes: notesData }
    }))
  }

  // 自動儲存函數（防抖處理）
  let saveTimeout = null
  const autoSaveData = () => {
    // 清除之前的計時器
    if (saveTimeout) {
      clearTimeout(saveTimeout)
    }
    
    // 設置新的計時器（防抖 500ms）
    saveTimeout = setTimeout(() => {
      try {
        const data = getAllCharacterData()
        const result = saveToLocalStorage(data)
        if (result.success) {
          console.log('自動儲存完成', { 
            storageKey: STORAGE_KEY, 
            dataSize: JSON.stringify(data).length 
          })
        } else {
          console.warn('自動儲存失敗:', result.message)
        }
      } catch (error) {
        console.warn('自動儲存異常:', error.message)
      }
    }, 500)
  }

  return {
    getAllCharacterData,
    saveToLocalStorage,
    loadFromLocalStorage,
    exportToJSON,
    importFromJSON,
    clearAllData,
    applyDataToForm,
    autoSaveData
  }
}