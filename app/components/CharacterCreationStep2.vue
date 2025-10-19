<template>
  <div class="character-creation-step">
    <!-- 步驟標題 -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">🌍 選擇你的國籍</h2>
      <p class="text-gray-600 text-lg">
        你來自哪個國家？這將成為你的重要背景和身份認同。
      </p>
    </div>

    <!-- 選擇方式 -->
    <div class="mb-8">
      <div class="flex justify-center gap-4 mb-6">
        <button
          @click="selectionMode = 'random'"
          :class="[
            'px-6 py-3 rounded-lg font-medium transition-all duration-200',
            selectionMode === 'random'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          🎲 隨機擲骰
        </button>
        <button
          @click="selectionMode = 'manual'"
          :class="[
            'px-6 py-3 rounded-lg font-medium transition-all duration-200',
            selectionMode === 'manual'
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          🗺️ 手動選擇
        </button>
      </div>
    </div>

    <!-- 隨機擲骰模式 -->
    <div v-if="selectionMode === 'random'" class="mb-8">
      <div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
        <h3 class="text-xl font-bold text-blue-800 mb-4">🎲 隨機國籍</h3>
        <p class="text-blue-600 mb-6">點擊下方按鈕進行D20擲骰來決定你的國籍！</p>
        
        <!-- 擲骰動畫和結果 -->
        <div class="mb-6">
          <div v-if="isRolling" class="text-6xl animate-bounce mb-4">🎲</div>
          <div v-else-if="diceResult" class="mb-4">
            <div class="text-4xl mb-2">🎲</div>
            <div class="text-2xl font-bold text-blue-800">擲出了 {{ diceResult }}！</div>
          </div>
          
          <button
            @click="rollDice"
            :disabled="isRolling"
            class="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
          >
            {{ isRolling ? '擲骰中...' : '擲骰決定國籍' }}
          </button>
        </div>

        <!-- 隨機結果顯示 -->
        <div v-if="randomNationality" class="bg-white border-2 border-blue-300 rounded-lg p-4">
          <div class="flex items-center justify-center mb-3">
            <span class="text-3xl mr-3">{{ randomNationality.flag }}</span>
            <h4 class="text-xl font-bold text-gray-800">{{ randomNationality.name }}</h4>
          </div>
          <div class="text-sm text-gray-600 mb-2">
            <strong>主要語言：</strong>{{ randomNationality.languages?.join('、') || '未知' }}
          </div>
          <div class="text-xs text-gray-500">
            擲骰範圍：{{ randomNationality.diceRange }}
          </div>
        </div>
      </div>
    </div>

    <!-- 手動選擇模式 -->
    <div v-if="selectionMode === 'manual'" class="mb-8">
      <div class="bg-green-50 border-2 border-green-200 rounded-lg p-6">
        <h3 class="text-xl font-bold text-green-800 mb-4 text-center">🗺️ 選擇國籍</h3>
        <p class="text-green-600 mb-6 text-center">從下方列表中選擇你的角色國籍</p>
        
        <!-- 國籍網格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="nationality in nationalities"
            :key="nationality.id"
            @click="selectNationality(nationality)"
            class="relative cursor-pointer border-2 rounded-lg p-4 transition-all duration-200 hover:shadow-lg"
            :class="selectedNationality?.id === nationality.id 
              ? 'border-green-400 bg-green-100' 
              : 'border-gray-200 bg-white hover:border-green-300'"
          >
            <div class="flex items-center mb-3">
              <span class="text-3xl mr-3">{{ nationality.flag }}</span>
              <h4 class="text-lg font-bold text-gray-800">{{ nationality.name }}</h4>
            </div>
            <div class="text-sm text-gray-600 mb-2">
              <strong>主要語言：</strong>{{ nationality.languages?.join('、') || '未知' }}
            </div>
            <div class="text-xs text-gray-500">
              擲骰範圍：{{ nationality.diceRange }}
            </div>
            
            <!-- 選中指示器 -->
            <div 
              v-if="selectedNationality?.id === nationality.id"
              class="absolute top-2 right-2 text-green-500"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 選擇摘要 -->
    <div v-if="finalNationality" class="mb-8 bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
      <h3 class="text-xl font-bold text-amber-800 mb-4 text-center">✅ 已選擇國籍</h3>
      <div class="flex items-center justify-center mb-4">
        <span class="text-4xl mr-4">{{ finalNationality.flag }}</span>
        <div>
          <h4 class="text-2xl font-bold text-gray-800">{{ finalNationality.name }}</h4>
          <p class="text-gray-600">主要語言：{{ finalNationality.languages?.join('、') || '未知' }}</p>
        </div>
      </div>
      
      <!-- 語言選擇區域 -->
      <div v-if="needsLanguageSelection" class="mt-6 border-t border-amber-300 pt-6">
        <h4 class="text-lg font-semibold text-amber-800 mb-4 text-center">🗣️ 選擇語言真理</h4>
        <p class="text-sm text-amber-700 mb-4 text-center">
          你的國籍擁有多種語言，請選擇其中一種作為你的語言真理：
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          <button
            v-for="language in finalNationality.languages"
            :key="language"
            @click="selectLanguage(language)"
            :class="[
              'p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200',
              selectedLanguage === language
                ? 'bg-amber-100 border-amber-400 text-amber-800'
                : 'bg-white border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-50'
            ]"
          >
            🗣️ {{ language }}
          </button>
        </div>
        
        <!-- 已選擇語言顯示 -->
        <div v-if="selectedLanguage" class="bg-white border border-amber-300 rounded-lg p-3">
          <div class="flex items-center justify-center">
            <span class="text-amber-600 mr-2">🎯</span>
            <span class="font-semibold text-amber-800">已選擇語言真理：{{ selectedLanguage }}</span>
          </div>
        </div>
      </div>
      
      <!-- 單一語言國籍的自動顯示 -->
      <div v-else-if="finalNationality.languages?.length === 1" class="mt-6 border-t border-amber-300 pt-6">
        <div class="bg-white border border-amber-300 rounded-lg p-3">
          <div class="flex items-center justify-center">
            <span class="text-amber-600 mr-2">🎯</span>
            <span class="font-semibold text-amber-800">語言真理：{{ finalNationality.languages[0] }}</span>
          </div>
        </div>
      </div>
      
      <div class="text-center text-sm text-amber-700 mt-4">
        選擇方式：{{ selectionMode === 'random' ? `隨機擲骰 (${diceResult})` : '手動選擇' }}
      </div>
    </div>

    <!-- 操作按鈕 -->
    <div class="flex justify-between">
      <button 
        @click="$emit('prev-step')"
        class="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        上一步
      </button>
      
      <div class="flex gap-3">
        <button 
          v-if="finalNationality"
          @click="clearSelection"
          class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          重新選擇
        </button>
        <button 
          @click="confirmSelection"
          :disabled="!canConfirm"
          class="px-8 py-3 bg-amber-600 text-white font-bold rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-amber-700"
        >
          {{ getConfirmButtonText() }}
        </button>
      </div>
    </div>

    <!-- 規則說明 -->
    <div class="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h4 class="font-semibold text-gray-800 mb-2">📋 國籍規則說明</h4>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• <strong>國籍本身就是一項真理</strong>，代表你的文化身份認同</li>
        <li>• 可以選擇隨機擲骰或手動選擇國籍</li>
        <li>• <strong>語言真理</strong>：有些國籍有多種語言，需選擇其中一種作為額外真理</li>
        <li>• 單一語言的國籍會自動獲得該語言作為真理</li>
        <li>• 國籍和語言共同影響角色的溝通能力和文化背景</li>
        <li>• 可以隨時重新選擇直到確認為止</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Props and Emits
const props = defineProps({
  selectedNationality: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['next-step', 'prev-step', 'select-nationality'])

// 響應式變數
const selectionMode = ref('random') // 'random' 或 'manual'
const selectedNationality = ref(props.selectedNationality)
const randomNationality = ref(null)
const isRolling = ref(false)
const diceResult = ref(null)
const selectedLanguage = ref('')

// 監聽 props 變化，確保同步
watch(() => props.selectedNationality, (newVal) => {
  if (newVal !== selectedNationality.value) {
    selectedNationality.value = newVal
    // 重置語言選擇
    selectedLanguage.value = ''
  }
}, { immediate: true })

// 國籍資料
const nationalities = ref([
  {
    id: 'australia',
    name: '澳洲',
    flag: '🇦🇺',
    languages: ['英語', '澳洲原住民語'],
    diceRange: '1-2',
    diceMin: 1,
    diceMax: 2
  },
  {
    id: 'canada',
    name: '加拿大',
    flag: '🇨🇦',
    languages: ['英語', '法語', '第一民族語'],
    diceRange: '3-4',
    diceMin: 3,
    diceMax: 4
  },
  {
    id: 'czechoslovakia',
    name: '捷克斯洛伐克',
    flag: '🇨🇿',
    languages: ['捷克語', '斯洛伐克語', '德語', '匈牙利語', '意第緒語'],
    diceRange: '5-6',
    diceMin: 5,
    diceMax: 6
  },
  {
    id: 'france',
    name: '法國',
    flag: '🇫🇷',
    languages: ['法語'],
    diceRange: '7-8',
    diceMin: 7,
    diceMax: 8
  },
  {
    id: 'india',
    name: '印度',
    flag: '🇮🇳',
    languages: ['英語', '烏爾都語', '印地語', '孟加拉語'],
    diceRange: '9-10',
    diceMin: 9,
    diceMax: 10
  },
  {
    id: 'norway',
    name: '挪威',
    flag: '🇳🇴',
    languages: ['挪威語'],
    diceRange: '11-12',
    diceMin: 11,
    diceMax: 12
  },
  {
    id: 'poland',
    name: '波蘭',
    flag: '🇵🇱',
    languages: ['波蘭語'],
    diceRange: '13-14',
    diceMin: 13,
    diceMax: 14
  },
  {
    id: 'uk',
    name: '英國',
    flag: '🇬🇧',
    languages: ['英語', '威爾斯語'],
    diceRange: '15-16',
    diceMin: 15,
    diceMax: 16
  },
  {
    id: 'usa',
    name: '美國',
    flag: '🇺🇸',
    languages: ['英語', '北美原住民語'],
    diceRange: '17-18',
    diceMin: 17,
    diceMax: 18
  },
  {
    id: 'ussr',
    name: '蘇聯',
    flag: '🚩',
    languages: ['俄語'],
    diceRange: '19-20',
    diceMin: 19,
    diceMax: 20
  }
])

// 計算屬性
const finalNationality = computed(() => {
  const nationality = selectedNationality.value || randomNationality.value
  // 確保返回的國籍對象有完整的屬性
  if (nationality && !nationality.languages) {
    nationality.languages = ['未知']
  }
  return nationality
})

// 是否需要語言選擇
const needsLanguageSelection = computed(() => {
  return finalNationality.value && finalNationality.value.languages && finalNationality.value.languages.length > 1
})

// 是否可以確認選擇
const canConfirm = computed(() => {
  if (!finalNationality.value) return false
  
  // 如果是多語言國籍，必須選擇語言
  if (needsLanguageSelection.value) {
    return selectedLanguage.value !== ''
  }
  
  // 單語言國籍可以直接確認
  return true
})

// 獲取確認按鈕文字
const getConfirmButtonText = () => {
  if (!finalNationality.value) {
    return '請先選擇國籍'
  }
  
  if (needsLanguageSelection.value && !selectedLanguage.value) {
    return '請選擇語言真理'
  }
  
  return `確認國籍：${finalNationality.value.name}`
}

// 方法
const rollDice = () => {
  isRolling.value = true
  diceResult.value = null
  randomNationality.value = null
  selectedNationality.value = null
  selectedLanguage.value = '' // 重置語言選擇
  
  // 模擬擲骰動畫
  setTimeout(() => {
    const result = Math.floor(Math.random() * 20) + 1
    diceResult.value = result
    
    // 根據擲骰結果找到對應國籍
    const nationality = nationalities.value.find(n => 
      result >= n.diceMin && result <= n.diceMax
    )
    
    if (nationality) {
      randomNationality.value = nationality
      
      // 如果是單語言國籍，自動選擇該語言
      if (nationality.languages && nationality.languages.length === 1) {
        selectedLanguage.value = nationality.languages[0]
      }
    }
    
    isRolling.value = false
  }, 1500) // 1.5秒動畫時間
}

const selectNationality = (nationality) => {
  selectedNationality.value = nationality
  randomNationality.value = null
  diceResult.value = null
  selectedLanguage.value = '' // 重置語言選擇
  
  // 如果是單語言國籍，自動選擇該語言
  if (nationality.languages && nationality.languages.length === 1) {
    selectedLanguage.value = nationality.languages[0]
  }
}

const selectLanguage = (language) => {
  selectedLanguage.value = language
}

const clearSelection = () => {
  selectedNationality.value = null
  randomNationality.value = null
  diceResult.value = null
  selectedLanguage.value = ''
  selectionMode.value = 'random'
}

const confirmSelection = () => {
  if (!canConfirm.value) return
  
  // 確定使用的語言真理
  const languageTruth = selectedLanguage.value || 
    (finalNationality.value.languages?.length === 1 ? finalNationality.value.languages[0] : '')
  
  const nationalityData = {
    nationality: finalNationality.value,
    selectionMethod: selectionMode.value,
    diceResult: diceResult.value,
    selectedLanguage: languageTruth,
    truths: {
      nationality: finalNationality.value.name, // 國籍真理
      language: languageTruth // 語言真理
    }
  }
  
  emit('select-nationality', nationalityData)
  emit('next-step')
}
</script>