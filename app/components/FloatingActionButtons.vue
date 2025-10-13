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
          匯出
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

    <!-- 通知訊息 -->
    <div 
      v-if="notification.show" 
      class="fixed top-4 left-4 max-w-sm p-4 rounded-lg shadow-lg transition-all duration-300 z-60"
      :class="notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'"
    >
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useCharacterData } from '~/composables/useCharacterData'

// Props 定義，支援不同角色卡類型
const props = defineProps({
  characterType: {
    type: String,
    default: 'cohors-cthulhu',
    validator: (value) => ['cohors-cthulhu', 'future-expansion'].includes(value)
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
    save: 'bg-blue-500 hover:bg-blue-600',
    load: 'bg-green-500 hover:bg-green-600',
    export: 'bg-yellow-500 hover:bg-yellow-600',
    import: 'bg-purple-500 hover:bg-purple-600',
    clear: 'bg-red-500 hover:bg-red-600'
  },
  'future-expansion': {
    main: 'bg-slate-600 hover:bg-slate-700',
    save: 'bg-cyan-500 hover:bg-cyan-600',
    load: 'bg-emerald-500 hover:bg-emerald-600',
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
const notification = reactive({
  show: false,
  message: '',
  type: 'success'
})

// 計算儲存鍵
const computedStorageKey = computed(() => {
  return props.storageKey || `${props.characterType}-character-data`
})

// 使用角色數據管理
const { 
  getAllCharacterData, 
  saveToLocalStorage, 
  loadFromLocalStorage, 
  exportToJSON, 
  importFromJSON, 
  clearAllData,
  applyDataToForm,
  autoSaveData 
} = useCharacterData(computedStorageKey.value)

// 切換菜單
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// 自動載入數據
const autoLoadData = () => {
  try {
    const result = loadFromLocalStorage()
    if (result.success) {
      applyDataToForm(result.data)
      console.log('自動載入角色數據成功', { 
        storageKey: computedStorageKey.value, 
        dataKeys: Object.keys(result.data) 
      })
    } else {
      console.log('沒有找到已儲存的資料或載入失敗:', result.message)
    }
  } catch (error) {
    console.warn('自動載入異常:', error.message)
  }
}

// 監聽數據變更並自動儲存
const setupAutoSave = () => {
  // 監聽任何數據變更事件
  window.addEventListener('characterDataChanged', () => {
    autoSaveData()
  })
}

// 顯示通知
const showNotification = (message, type = 'success') => {
  notification.message = message
  notification.type = type
  notification.show = true
  
  setTimeout(() => {
    notification.show = false
  }, 3000)
}



// 匯出 JSON
const handleExport = async () => {
  try {
    const data = getAllCharacterData()
    const result = exportToJSON(data)
    showNotification(result.message, result.success ? 'success' : 'error')
  } catch (error) {
    showNotification(`匯出失敗: ${error.message}`, 'error')
  }
  showMenu.value = false
}

// 載入 JSON
const handleImport = async () => {
  try {
    const result = await importFromJSON()
    if (result.success) {
      // 使用新的數據應用函數
      const applyResult = applyDataToForm(result.data)
      showNotification(result.message, applyResult.success ? 'success' : 'error')
    } else {
      showNotification(result.message, 'error')
    }
  } catch (error) {
    showNotification(`載入失敗: ${error.message}`, 'error')
  }
  showMenu.value = false
}

// 清除全部
const handleClear = async () => {
  if (confirm('確定要清除所有資料嗎？此操作無法復原。')) {
    try {
      const result = clearAllData()
      // 觸發自定義事件讓各個組件清除數據
      window.dispatchEvent(new CustomEvent('clearCharacterData'))
      showNotification(result.message, result.success ? 'success' : 'error')
    } catch (error) {
      showNotification(`清除失敗: ${error.message}`, 'error')
    }
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
  
  // 設置自動儲存監聽器
  setupAutoSave()
  
  // 頁面載入時自動載入數據
  setTimeout(autoLoadData, 500) // 延遲載入確保組件都已初始化
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