<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-2xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        🧪 Pinia 最簡單測試
      </h1>
      
      <!-- 測試說明 -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h2 class="text-lg font-semibold text-blue-900 mb-2">測試目標</h2>
        <p class="text-blue-800 text-sm">
          測試最基礎的 Pinia store：只有一個 message 狀態，驗證狀態管理和響應式更新。
        </p>
      </div>

      <!-- 當前狀態顯示 -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">📊 當前狀態</h2>
        <div class="p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-lg font-medium text-gray-700 mb-2">Message 內容</h3>
          <p class="text-2xl font-bold text-blue-600">{{ basicTestStore.message }}</p>
        </div>
      </div>

      <!-- 基本操作測試 -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">🔧 Message 操作測試</h2>
        
        <!-- 預設訊息按鈕 -->
        <div class="grid grid-cols-2 gap-3 mb-4">
          <button @click="basicTestStore.message = 'Hello Pinia!'" 
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            設定: Hello Pinia!
          </button>
          <button @click="basicTestStore.message = '測試訊息'" 
                  class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            設定: 測試訊息
          </button>
          <button @click="basicTestStore.message = 'Pinia 運作正常'" 
                  class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            設定: Pinia 運作正常
          </button>
          <button @click="basicTestStore.message = ''" 
                  class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            清空訊息
          </button>
        </div>

        <!-- 自定義訊息 -->
        <div class="space-y-3">
          <input v-model="newMessage" 
                 placeholder="輸入自定義訊息" 
                 class="w-full px-3 py-2 border rounded-md">
          <button @click="updateMessage" 
                  class="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            設定自定義訊息
          </button>
        </div>
      </div>

      <!-- 簡單測試 -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">� 響應式測試</h2>
        <div class="text-center">
          <button @click="testReactivity" 
                  class="px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-4">
            測試響應式更新
          </button>
          <p class="text-sm text-gray-600">
            點擊按鈕會快速改變 message 內容，驗證響應式更新是否正常
          </p>
        </div>
      </div>

    <!-- Store Debug 信息 -->
    <div class="bg-gray-100 rounded-lg p-4">
      <h3 class="font-medium mb-2">🔍 Store Debug 信息</h3>
      <pre class="text-sm">{{ JSON.stringify({
        message: basicTestStore.message,
        messageLength: basicTestStore.message?.length || 0,
        timestamp: new Date().toLocaleString()
      }, null, 2) }}</pre>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBasicTestStore } from '@/stores/basicTest.js'

// 使用 store
const basicTestStore = useBasicTestStore()

// 頁面狀態
const newMessage = ref('')

// 操作函數
const updateMessage = () => {
  if (!newMessage.value.trim()) {
    alert('訊息內容不能為空')
    return
  }
  
  basicTestStore.message = newMessage.value
  newMessage.value = ''
}

const testReactivity = () => {
  const messages = ['測試中...', '響應式更新', 'Pinia 正常工作!', 'Hello Pinia']
  let index = 0
  
  const interval = setInterval(() => {
    basicTestStore.message = messages[index]
    index++
    if (index >= messages.length) {
      clearInterval(interval)
    }
  }, 500)
}

// 設定頁面標題
useHead({
  title: 'Pinia 基礎功能測試 - 2D20 Tools'
})
</script>

<style scoped>
/* 滾動條樣式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>