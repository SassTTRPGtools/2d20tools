<template>
  <div class="bg-magnus-bg min-h-screen">
    <!-- 主要容器 -->
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <div class="bg-white shadow-2xl rounded-lg p-6 md:p-8">
        <!-- 直接渲染組件 -->
        <CohorsCthvlhvSheet v-if="activeTab === 'basic'" />
        <CohorsCthvlhvEquipment v-else-if="activeTab === 'equipment'" />
        <CohorsCthvlhvSpells v-else-if="activeTab === 'spells'" />
        <CohorsCthvlhvNotes v-else-if="activeTab === 'notes'" />
      </div>
    </div>

    <!-- Cohors Cthulhu 角色卡專用的懸浮按鈕 -->
    <FloatingActionButtons 
      character-type="cohors-cthulhu"
      storage-key="cohors-cthulhu-character-data" 
    />

    <!-- 浮動右側頁籤導航 -->
    <div class="print:hidden fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div class="floating-tabs bg-gradient-to-b from-slate-800/95 to-slate-900/95 rounded-2xl border border-red-900/30 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
        <!-- 標題區域 -->
        <div class="px-3 py-2 border-b border-red-900/30">
          <div class="text-red-400 text-xs font-bold text-center">
            SHEETS
          </div>
        </div>
        
        <!-- 頁籤按鈕 -->
        <div class="py-3">
          <div class="space-y-2 px-2">
            <button 
              v-for="(tab, index) in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="tab-button w-16 h-16 rounded-lg font-bold text-xs transition-all duration-300 border-2 flex flex-col items-center justify-center relative group"
              :class="activeTab === tab.id 
                ? 'bg-gradient-to-b from-red-500 to-red-700 text-white border-red-400 shadow-lg shadow-red-900/50 transform scale-105' 
                : 'bg-gradient-to-b from-slate-600 to-slate-800 text-slate-300 border-slate-500 hover:from-slate-500 hover:to-slate-700 hover:text-white hover:border-slate-400 hover:shadow-lg'"
            >
              <!-- 頁籤圖示 -->
              <div class="text-base mb-1 transform transition-transform group-hover:scale-110">
                {{ tab.icon }}
              </div>
              <!-- 頁籤文字 -->
              <div class="leading-tight text-center whitespace-pre-line text-xs transform transition-transform group-hover:scale-105">
                {{ tab.shortName }}
              </div>
              
              <!-- 活動指示器 -->
              <div 
                v-if="activeTab === tab.id"
                class="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-red-300 to-red-500 rounded-r shadow-lg"
              ></div>
              
              <!-- 光暈效果 -->
              <div 
                v-if="activeTab === tab.id"
                class="absolute inset-0 bg-gradient-to-b from-red-400/20 to-red-600/20 rounded-lg pointer-events-none"
              ></div>
            </button>
          </div>
        </div>

        <!-- 底部裝飾 -->
        <div class="px-3 py-2 border-t border-red-900/30">
          <div class="text-red-400/60 text-xs text-center leading-tight">
            COHORS<br>CTHVLHV
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('basic')

const tabs = [
  { 
    id: 'basic', 
    name: '基本資料', 
    shortName: '基本\n資料',
    icon: '👤'
  },
  { 
    id: 'equipment', 
    name: '裝備天賦', 
    shortName: '裝備\n天賦',
    icon: '⚔️'
  },
  { 
    id: 'spells', 
    name: '法術', 
    shortName: '法術\n魔法',
    icon: '🔮'
  },
  { 
    id: 'notes', 
    name: '筆記背景', 
    shortName: '筆記\n背景',
    icon: '📝'
  }
]
</script>

<style scoped>
/* 自定義樣式 */
.tab-button {
  position: relative;
  overflow: hidden;
}

.tab-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.tab-button:hover::before {
  left: 100%;
}

/* 列印樣式 */
@media print {
  .print\:hidden {
    display: none !important;
  }
  
  .bg-magnus-bg {
    background: white !important;
  }
  
  .flex {
    display: block !important;
  }
  
  .flex-1 {
    width: 100% !important;
  }
  
  .px-4,
  .py-8,
  .p-6,
  .md\:p-8 {
    padding: 0 !important;
  }
  
  .shadow-2xl {
    box-shadow: none !important;
  }
  
  .rounded-lg {
    border-radius: 0 !important;
  }
  
  .max-w-6xl {
    max-width: none !important;
  }
  
  .mx-auto {
    margin: 0 !important;
  }
}

/* 浮動頁籤樣式 */
.floating-tabs {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* 響應式調整 */
@media (max-width: 768px) {
  .fixed.right-4 {
    right: 8px;
  }
  
  .w-16 {
    width: 48px;
  }
  
  .h-16 {
    height: 48px;
  }
  
  .text-xs {
    font-size: 0.6rem;
  }
  
  .px-3 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .py-2 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}

@media (max-width: 480px) {
  .fixed.right-4 {
    right: 4px;
  }
  
  .w-16 {
    width: 40px;
  }
  
  .h-16 {
    height: 40px;
  }
  
  .text-xs {
    font-size: 0.5rem;
  }
}
</style>