<template>
  <div class="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
    <!-- 主按鈕 -->
    <button 
      @click="toggleMenu"
      class="text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 mb-2"
      :class="[currentTheme.main, { 'rotate-45': showMenu }]"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>

    <!-- 子按鈕菜單 -->
    <div 
      v-if="showMenu" 
      class="flex flex-col space-y-2 animate-fade-in"
    >
      <!-- 匯出 JSON -->
      <button 
        @click="handleExport"
        class="text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors group relative"
        :class="currentTheme.export"
        title="匯出 JSON"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <span class="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          匯出 JSON
        </span>
      </button>

      <!-- 匯出 FVTT -->
      <button 
        v-if="props.characterType === 'achtung-cthulhu'"
        @click="handleFVTTExport"
        class="text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors group relative bg-green-600 hover:bg-green-700"
        title="匯出 FVTT"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
        <span class="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          匯出 FVTT
        </span>
      </button>

      <!-- 載入 JSON -->
      <button 
        @click="handleImport"
        class="text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors group relative"
        :class="currentTheme.import"
        title="載入 JSON"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
        </svg>
        <span class="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          載入JSON
        </span>
      </button>

      <!-- 清除全部 -->
      <button 
        @click="handleClear"
        class="text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors group relative"
        :class="currentTheme.clear"
        title="清除全部資料"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
        <span class="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          清除
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useCohorsCthvlhvStore } from '~/stores/cohorsCthvlhvStore'
import { useAchtungCthulhuStore } from '~/stores/achtungCthulhuStore'
import { useFVTTExport } from '~/composables/useFVTTExport'

// Props 定義，支援不同角色卡類型
const props = defineProps({
  characterType: {
    type: String,
    default: 'cohors-cthulhu',
    validator: (value) => ['cohors-cthulhu', 'achtung-cthulhu', 'future-expansion'].includes(value)
  },
  storageKey: {
    type: String,
    default: null // 如果沒有提供，將使用 characterType 生成
  }
})

// 根據角色卡類型定義主題
const themes = {
  'cohors-cthulhu': {
    main: 'bg-red-600 hover:bg-red-700',
    export: 'bg-yellow-500 hover:bg-yellow-600',
    import: 'bg-purple-500 hover:bg-purple-600',
    clear: 'bg-red-500 hover:bg-red-600'
  },
  'achtung-cthulhu': {
    main: 'bg-slate-700 hover:bg-slate-800',
    export: 'bg-amber-600 hover:bg-amber-700',
    import: 'bg-blue-600 hover:bg-blue-700',
    clear: 'bg-red-600 hover:bg-red-700'
  },
  'future-expansion': {
    main: 'bg-slate-600 hover:bg-slate-700',
    export: 'bg-amber-500 hover:bg-amber-600',
    import: 'bg-indigo-500 hover:bg-indigo-600',
    clear: 'bg-rose-500 hover:bg-rose-600'
  }
}

// 計算當前主題
const currentTheme = computed(() => {
  return themes[props.characterType] || themes['cohors-cthulhu']
})

// 響應式數據
const showMenu = ref(false)

// 根據角色卡類型選擇對應的 Store
const store = computed(() => {
  switch (props.characterType) {
    case 'achtung-cthulhu':
      return useAchtungCthulhuStore()
    case 'cohors-cthulhu':
    default:
      return useCohorsCthvlhvStore()
  }
})

// 使用 FVTT 匯出功能
const { isExporting, downloadFVTTFile } = useFVTTExport()

// 切換菜單
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// Pinia Store 已自動處理持久化，無需手動載入

// 匯出 JSON
const handleExport = async () => {
  try {
    // 獲取完整角色資料
    const data = store.value.getFullCharacterData
    
    // 檢查是否有角色名稱作為檔案名
    const characterName = data.basicInfo?.characterName || '未命名角色'
    const timestamp = new Date().toISOString().split('T')[0]
    const fileName = `${characterName}-${timestamp}.json`
    
    // 創建 JSON 字串並添加格式化
    const jsonStr = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    
    // 創建下載連結
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    console.log(`角色資料已匯出：${fileName}`)
  } catch (error) {
    console.error('匯出錯誤:', error)
  }
  showMenu.value = false
}

// 匯出 FVTT JSON
const handleFVTTExport = async () => {
  try {
    // FVTT 匯出只支援 Achtung Cthulhu 系統
    if (props.characterType !== 'achtung-cthulhu') {
      console.warn('FVTT 匯出功能僅支援 Achtung Cthulhu 角色表')
      alert('FVTT 匯出功能僅支援 Achtung Cthulhu 角色表')
      return
    }
    
    // 強制使用 Achtung Cthulhu Store
    const achtungStore = useAchtungCthulhuStore()
    const data = achtungStore.getFullCharacterData
    
    // 使用 FVTT 匯出功能
    downloadFVTTFile(data)
    
    console.log('FVTT 角色資料已匯出')
  } catch (error) {
    console.error('FVTT 匯出錯誤:', error)
  }
  showMenu.value = false
}

// 載入 JSON
const handleImport = async () => {
  try {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    
    input.onchange = (event) => {
      const file = event.target.files[0]
      if (file) {
        // 檢查檔案大小（限制 10MB）
        if (file.size > 10 * 1024 * 1024) {
          console.error('檔案過大，請選擇小於 10MB 的檔案')
          return
        }
        
        const reader = new FileReader()
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target.result)
            
            // 基本資料驗證
            if (!data || typeof data !== 'object') {
              throw new Error('無效的 JSON 格式')
            }
            
            // 檢查是否是角色資料格式
            const hasValidStructure = 
              data.hasOwnProperty('basicInfo') || 
              data.hasOwnProperty('weapons') || 
              data.hasOwnProperty('spells') ||
              data.hasOwnProperty('metadata')
            
            if (!hasValidStructure) {
              throw new Error('不是有效的角色資料格式')
            }
            
            // 載入資料到 Store
            store.value.loadCharacterData(data)
            
            // 顯示成功訊息
            const characterName = data.basicInfo?.characterName || '角色資料'
            console.log(`${characterName} 載入成功`)
            
          } catch (error) {
            console.error('載入錯誤:', error)
            console.error(`檔案載入失敗: ${error.message}`)
          }
        }
        
        reader.onerror = () => {
          console.error('檔案讀取失敗')
        }
        
        reader.readAsText(file, 'UTF-8')
      }
    }
    
    input.click()
  } catch (error) {
    console.error('匯入錯誤:', error)
  }
  showMenu.value = false
}

// 清除全部
const handleClear = async () => {
  try {
    // 雙重確認避免意外清除
    const currentCharacterName = store.value.basicInfo?.characterName || '當前角色'
    
    console.log('清除功能 - Store 物件:', store.value)
    console.log('清除功能 - 可用的方法:', Object.getOwnPropertyNames(Object.getPrototypeOf(store.value)))
    console.log('清除功能 - clearAllData 方法存在:', typeof store.value.clearAllData)
    
    if (confirm(`確定要清除「${currentCharacterName}」的所有資料嗎？\n\n此操作無法復原！`)) {
      if (confirm('最後確認：真的要刪除所有資料嗎？')) {
        // 檢查方法是否存在
        if (typeof store.value.clearAllData !== 'function') {
          throw new Error(`clearAllData 不是一個函數，類型為: ${typeof store.value.clearAllData}`)
        }
        
        console.log('開始執行 clearAllData...')
        await store.value.clearAllData()
        console.log('所有角色資料已清除')
      }
    }
  } catch (error) {
    console.error('清除錯誤詳細資訊:', {
      message: error.message,
      stack: error.stack,
      store: store.value,
      storeType: typeof store.value,
      clearAllDataExists: 'clearAllData' in store.value,
      clearAllDataType: typeof store.value.clearAllData
    })
  }
  showMenu.value = false
}

// 初始化自動功能和事件監聽
onMounted(() => {
  // 點擊外部關閉菜單
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.fixed.top-1\\/2.left-4')) {
      showMenu.value = false
    }
  })
  
  // Pinia Store 自動處理持久化
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>