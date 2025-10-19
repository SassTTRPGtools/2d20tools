<template>
  <div class="character-creation-step">
    <!-- 步驟標題 -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">🎭 選擇你的原型</h2>
      <p class="text-gray-600 text-lg">
        這是你的第一個重大決定——你是誰？每個原型都有獨特的能力和背景故事。
      </p>
    </div>

    <!-- 原型選擇區域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div 
        v-for="archetype in archetypes" 
        :key="archetype.key"
        @click="selectArchetype(archetype)"
        class="relative cursor-pointer transform transition-all duration-200 hover:scale-105"
        :class="selectedArchetype?.key === archetype.key ? 
          'ring-4 ring-amber-400 bg-amber-50' : 
          'hover:shadow-lg bg-white'"
      >
        <div class="border-2 border-gray-200 rounded-lg p-4 h-full">
          <!-- 原型圖示和標題 -->
          <div class="text-center mb-3">
            <div class="text-4xl mb-2">{{ archetype.icon }}</div>
            <h3 class="text-lg font-bold text-gray-800">{{ archetype.chineseName }}</h3>
            <p class="text-sm text-gray-500">{{ archetype.englishName }}</p>
          </div>
          
          <!-- 原型描述 -->
          <p class="text-xs text-gray-600 mb-3 line-clamp-3">{{ archetype.description }}</p>
          
          <!-- 關鍵屬性顯示 -->
          <div class="border-t pt-2">
            <p class="text-xs font-semibold text-gray-700 mb-1">關鍵屬性:</p>
            <div class="flex flex-wrap gap-1">
              <span 
                v-for="attr in archetype.keyAttributes" 
                :key="attr"
                class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {{ getAttributeName(attr) }}
              </span>
            </div>
          </div>
          
          <!-- 選中指示器 -->
          <div 
            v-if="selectedArchetype?.key === archetype.key"
            class="absolute top-2 right-2 text-amber-500"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- 詳細資訊區域 -->
    <div v-if="selectedArchetype" class="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-6 mb-8">
      <h3 class="text-2xl font-bold text-amber-800 mb-4">
        {{ selectedArchetype.icon }} {{ selectedArchetype.chineseName }}
      </h3>
      
      <!-- 頁籤切換 -->
      <div class="mb-6">
        <div class="border-b border-amber-200">
          <nav class="-mb-px flex space-x-8">
            <button
              v-for="tab in detailTabs"
              :key="tab.key"
              @click="activeDetailTab = tab.key"
              :class="[
                activeDetailTab === tab.key
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm'
              ]"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>
      </div>

      <!-- 頁籤內容 -->
      <div class="min-h-64">
        <!-- 描述頁籤 -->
        <div v-if="activeDetailTab === 'description'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左側：描述和背景 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-2">背景描述</h4>
              <p class="text-gray-700 mb-4">{{ selectedArchetype.detailDescription }}</p>
              
              <h4 class="text-lg font-semibold text-gray-800 mb-2">扮演提示</h4>
              <p class="text-gray-600 text-sm mb-2">若你想要...</p>
              <ul class="text-gray-700 space-y-1">
                <li v-for="tip in selectedArchetype.roleplayTips" :key="tip" class="flex items-start">
                  <span class="text-amber-600 mr-2">•</span>
                  <span>{{ tip }}</span>
                </li>
              </ul>
            </div>
            
            <!-- 右側：角色特色 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-2">角色特色</h4>
              <ul class="text-gray-700 space-y-1">
                <li v-for="feature in selectedArchetype.features" :key="feature" class="flex items-start">
                  <span class="text-amber-600 mr-2">•</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 機械效果頁籤 -->
        <div v-else-if="activeDetailTab === 'mechanics'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 屬性加成 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-3">屬性加成</h4>
              
              <!-- 神秘學者的屬性選擇 -->
              <div v-if="selectedArchetype.attributeChoices" class="mb-4">
                <p class="text-sm text-orange-600 mb-3 font-medium">請選擇一組屬性組合：</p>
                <div class="space-y-2">
                  <button
                    v-for="(choice, index) in selectedArchetype.attributeChoices"
                    :key="index"
                    @click="selectedAttributeChoice = index"
                    :class="[
                      'w-full text-left p-3 border-2 rounded-lg transition-all duration-200',
                      selectedAttributeChoice === index
                        ? 'bg-orange-100 border-orange-400 text-orange-800'
                        : 'bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    ]"
                  >
                    <div class="font-medium">{{ choice.name }}</div>
                    <div class="text-sm text-gray-600">{{ choice.description }}</div>
                  </button>
                </div>
              </div>
              
              <!-- 顯示屬性加成 -->
              <div class="space-y-2 mb-6">
                <div 
                  v-for="(value, attr) in getEffectiveAttributeBonus" 
                  :key="attr"                  
                  class="bg-green-50 border-l-4 border-green-400 p-3 rounded"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <h5 class="font-medium text-green-800">{{ getAttributeName(attr) }} +{{ value }}</h5>
                      <p class="text-xs text-green-600 mt-1">{{ getAttributeDescription(attr) }}</p>
                    </div>
                    <div class="text-green-500 text-xl font-bold">+{{ value }}</div>
                  </div>
                </div>
              </div>

              <!-- 技能加成 -->
              <h4 class="text-lg font-semibold text-gray-800 mb-3">技能加成</h4>
              
              <!-- 神秘學者的技能選擇 -->
              <div v-if="selectedArchetype.skillChoices" class="mb-4">
                <p class="text-sm text-blue-600 mb-3 font-medium">請選擇一組技能組合：</p>
                <div class="space-y-2">
                  <button
                    v-for="(choice, index) in selectedArchetype.skillChoices"
                    :key="index"
                    @click="selectedSkillChoice = index"
                    :class="[
                      'w-full text-left p-3 border-2 rounded-lg transition-all duration-200',
                      selectedSkillChoice === index
                        ? 'bg-blue-100 border-blue-400 text-blue-800'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    ]"
                  >
                    <div class="font-medium">{{ choice.name }}</div>
                    <div class="text-sm text-gray-600">{{ choice.description }}</div>
                  </button>
                </div>
              </div>
              
              <!-- 顯示技能加成 -->
              <div class="space-y-2">
                <div 
                  v-for="(value, skill) in getEffectiveSkillBonus" 
                  :key="skill"                  
                  class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <h5 class="font-medium text-blue-800">{{ getSkillName(skill) }} +{{ value }}</h5>
                      <p class="text-xs text-blue-600 mt-1">{{ getSkillDescription(skill) }}</p>
                    </div>
                    <div class="text-blue-500 text-xl font-bold">+{{ value }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 專精選擇 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-3">專精選擇 (選擇2項)</h4>
              <div class="text-sm text-gray-600 mb-4">
                {{ selectedArchetype.availableFocuses.join(', ') }}
              </div>
              
              <!-- 具體專精選項 -->
              <div v-if="selectedArchetype.focusOptions" class="space-y-4">
                <div v-for="(focuses, skillCode) in selectedArchetype.focusOptions" :key="skillCode">
                  <h5 class="font-medium text-gray-700 mb-2">{{ getSkillName(skillCode) }}:</h5>
                  <div class="grid grid-cols-2 gap-2">
                    <button
                      v-for="focus in focuses" 
                      :key="focus"
                      @click="toggleFocus(focus, skillCode)"
                      :class="[
                        'text-xs px-3 py-2 rounded border-2 transition-all duration-200 text-left',
                        selectedFocuses.includes(focus)
                          ? 'bg-purple-100 border-purple-400 text-purple-800 font-medium'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50'
                      ]"
                      :disabled="!selectedFocuses.includes(focus) && selectedFocuses.length >= 2"
                    >
                      {{ focus }}
                      <span v-if="selectedFocuses.includes(focus)" class="ml-1">✓</span>
                    </button>
                  </div>
                </div>
                
                <!-- 選擇狀態 -->
                <div class="mt-4 p-3 bg-gray-50 rounded">
                  <p class="text-sm text-gray-600">
                    已選擇專精: {{ selectedFocuses.length }} / 2
                  </p>
                  <div v-if="selectedFocuses.length > 0" class="mt-2">
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="focus in selectedFocuses" 
                        :key="focus"
                        class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                      >
                        {{ focus }}
                        <button 
                          @click="removeFocus(focus)"
                          class="ml-1 text-purple-600 hover:text-purple-800"
                        >
                          ×
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 天賦頁籤 -->
        <div v-else-if="activeDetailTab === 'talents'">
          <h4 class="text-lg font-semibold text-gray-800 mb-4">原型天賦 (選擇一項)</h4>
          <div class="space-y-4">
            <div 
              v-for="talent in getAvailableTalents" 
              :key="talent.englishName"
              class="border border-purple-200 rounded-lg p-4 hover:bg-purple-50 transition-colors cursor-pointer"
              :class="selectedTalent?.englishName === talent.englishName ? 'ring-2 ring-purple-400 bg-purple-50' : ''"
              @click="selectTalent(talent)"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h5 class="font-bold text-purple-800 mb-1">{{ talent.chineseName }}</h5>
                  <p class="text-xs text-purple-600 mb-2 italic">關鍵詞: {{ talent.keywords }}</p>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ talent.content }}</p>
                </div>
                <div 
                  v-if="selectedTalent?.englishName === talent.englishName"
                  class="text-purple-500 ml-2"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 物品頁籤 -->
        <div v-else-if="activeDetailTab === 'belongings'">
          <div v-for="belongingGroup in selectedArchetype.belongings" :key="belongingGroup.category">
            <h4 class="text-lg font-semibold text-gray-800 mb-3">{{ belongingGroup.category }}</h4>
            <p class="text-sm text-gray-600 mb-4">{{ belongingGroup.note }}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="(option, index) in belongingGroup.options" 
                :key="index"
                class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                :class="selectedBelongings.includes(index) ? 'ring-2 ring-blue-400 bg-blue-50' : ''"
                @click="toggleBelonging(index, belongingGroup.selectCount)"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h5 class="font-semibold text-gray-800 mb-2">選項 {{ index + 1 }}</h5>
                    <div class="text-sm text-gray-700 mb-2">
                      <span class="font-medium">{{ option.name }}</span>
                    </div>
                    <div class="text-xs text-gray-500">
                      或者: <span class="italic">{{ option.alternative.name }}</span>
                    </div>
                  </div>
                  <div 
                    v-if="selectedBelongings.includes(index)"
                    class="text-blue-500 ml-2"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <p class="text-xs text-gray-500 mt-2">
              已選擇: {{ selectedBelongings.length }} / {{ belongingGroup.selectCount }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 操作按鈕 -->
    <div class="flex justify-center">
      <button 
        @click="confirmSelection"
        :disabled="!isSelectionComplete"
        class="px-8 py-3 bg-amber-600 text-white font-bold rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-amber-700 hover:shadow-lg"
      >
        {{ getButtonText }}
      </button>
    </div>

    <!-- 規則說明 -->
    <div class="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h4 class="font-semibold text-gray-800 mb-2">📋 原型規則說明</h4>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• 原型決定了角色的核心身份和專業領域</li>
        <li>• 每個原型提供固定的屬性和技能加成</li>
        <li>• 你可以從原型的專精列表中選擇2項專精</li>
        <li>• 每個原型都有一個獨特的原型天賦</li>
        <li>• 某些原型會提供起始裝備或聯絡人</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, inject } from 'vue'
import { archetypesAC as archetypeData } from '../data/archetypesAC.js'
import { useTalentDataAC } from '../composables/useTalentDataAC.js'

// 天賦資料
const { talentsDatabase, getTalentsByCategory } = useTalentDataAC()

// Props and Emits
const props = defineProps({
  selectedArchetype: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['next-step', 'select-archetype'])

// 響應式變數
const selectedArchetype = ref(props.selectedArchetype)
const activeDetailTab = ref('description')
const selectedTalent = ref(null)
const selectedBelongings = ref([])
const selectedFocuses = ref([])
const selectedAttributeChoice = ref(null)  // 神秘學者屬性選擇
const selectedSkillChoice = ref(null)      // 神秘學者技能選擇

// 監聽 props 變化，確保同步
watch(() => props.selectedArchetype, (newVal) => {
  if (newVal !== selectedArchetype.value) {
    selectedArchetype.value = newVal
    // 重新加載與此原型相關的選擇
    if (newVal) {
      activeDetailTab.value = 'description'
      
      // 恢復之前的選擇狀態（如果有）
      if (characterCreationState.value.archetypeSelections) {
        selectedTalent.value = characterCreationState.value.archetypeSelections.selectedTalent || null
        selectedBelongings.value = characterCreationState.value.archetypeSelections.selectedBelongings || []
        selectedFocuses.value = characterCreationState.value.archetypeSelections.selectedFocuses || []
        selectedAttributeChoice.value = characterCreationState.value.archetypeSelections.selectedAttributeChoice || null
        selectedSkillChoice.value = characterCreationState.value.archetypeSelections.selectedSkillChoice || null
      } else {
        // 如果沒有之前的選擇，則重置為初始狀態
        selectedTalent.value = null
        selectedBelongings.value = []
        selectedFocuses.value = []
        selectedAttributeChoice.value = null
        selectedSkillChoice.value = null
      }
    }
  }
}, { immediate: true })

// 詳細資訊頁籤
const detailTabs = ref([
  { key: 'description', name: '描述' },
  { key: 'mechanics', name: '屬性與技能' },
  { key: 'talents', name: '天賦' },
  { key: 'belongings', name: '物品' }
])

// 獲取全局角色創建狀態
const characterCreationState = inject('characterCreationState')

// 原型資料（從外部檔案導入）
const archetypes = ref(archetypeData)

// 計算屬性
const getEffectiveAttributeBonus = computed(() => {
  if (!selectedArchetype.value) return {}
  
  let result = { ...selectedArchetype.value.attributeBonus }
  
  // 如果是神秘學者且有選擇，添加選擇的屬性加成
  if (selectedArchetype.value.attributeChoices && selectedAttributeChoice.value !== null) {
    const choice = selectedArchetype.value.attributeChoices[selectedAttributeChoice.value]
    Object.assign(result, choice.bonuses)
  }
  
  return result
})

const getEffectiveSkillBonus = computed(() => {
  if (!selectedArchetype.value) return {}
  
  let result = { ...selectedArchetype.value.skillBonus }
  
  // 如果是神秘學者且有選擇，添加選擇的技能加成
  if (selectedArchetype.value.skillChoices && selectedSkillChoice.value !== null) {
    const choice = selectedArchetype.value.skillChoices[selectedSkillChoice.value]
    Object.assign(result, choice.bonuses)
  }
  
  return result
})

const isSelectionComplete = computed(() => {
  if (!selectedArchetype.value) return false
  
  const hasSelectedTalent = selectedTalent.value !== null
  const hasSelectedFocuses = selectedFocuses.value.length === 2
  const hasSelectedBelongings = selectedArchetype.value.belongings 
    ? selectedBelongings.value.length === selectedArchetype.value.belongings[0].selectCount
    : true
  
  // 檢查神秘學者的特殊選擇
  const hasSelectedAttributeChoice = selectedArchetype.value.attributeChoices 
    ? selectedAttributeChoice.value !== null 
    : true
  const hasSelectedSkillChoice = selectedArchetype.value.skillChoices 
    ? selectedSkillChoice.value !== null 
    : true
  
  return hasSelectedTalent && hasSelectedFocuses && hasSelectedBelongings && hasSelectedAttributeChoice && hasSelectedSkillChoice
})

const getButtonText = computed(() => {
  if (!selectedArchetype.value) {
    return '請選擇一個原型'
  }
  
  if (selectedArchetype.value.attributeChoices && selectedAttributeChoice.value === null) {
    return '請選擇屬性組合'
  }
  
  if (selectedArchetype.value.skillChoices && selectedSkillChoice.value === null) {
    return '請選擇技能組合'
  }

  if (selectedFocuses.value.length !== 2) {
    return `請選擇專精 (${selectedFocuses.value.length}/2)`
  }  
  
  if (!selectedTalent.value) {
    return '請選擇原型天賦'
  }
  
  if (selectedArchetype.value.belongings && selectedBelongings.value.length !== selectedArchetype.value.belongings[0].selectCount) {
    return `請完成物品選擇 (${selectedBelongings.value.length}/${selectedArchetype.value.belongings[0].selectCount})`
  }
  
  return `確認選擇 ${selectedArchetype.value.chineseName}`
})

// 獲取該原型可選的天賦
const getAvailableTalents = computed(() => {
  if (!selectedArchetype.value) return []
  
  // 根據原型的英文名稱映射到對應的天賦分類
  const archetypeToTalentMapping = {
    'Boffin': '技術專家',
    'Commander': '指揮官', 
    'Con Artist': '騙徒',
    'Mechanic': '機械工',
    'Infiltrator': '滲透者',
    'Investigator': '調查員',
    'Occult Scholar': '神秘學者',
    'Soldier': '士兵'
  }
  
  const talentCategory = archetypeToTalentMapping[selectedArchetype.value.englishName]
  if (talentCategory) {
    return getTalentsByCategory(talentCategory) || []
  }
  
  return []
})

// 方法
const selectArchetype = (archetype) => {
  selectedArchetype.value = archetype
  // 重置選擇
  activeDetailTab.value = 'description'
  selectedTalent.value = null
  selectedBelongings.value = []
  selectedFocuses.value = []
  selectedAttributeChoice.value = null
  selectedSkillChoice.value = null
  emit('select-archetype', archetype)
}

const selectTalent = (talent) => {
  selectedTalent.value = talent
}

const toggleBelonging = (index, maxSelections) => {
  const currentIndex = selectedBelongings.value.indexOf(index)
  
  if (currentIndex > -1) {
    // 取消選擇
    selectedBelongings.value.splice(currentIndex, 1)
  } else {
    // 新增選擇
    if (selectedBelongings.value.length < maxSelections) {
      selectedBelongings.value.push(index)
    }
  }
}

const confirmSelection = () => {
  if (selectedArchetype.value) {
    // 檢查是否已完成所有必要選擇
    const hasSelectedAttributeChoice = selectedArchetype.value.attributeChoices 
      ? selectedAttributeChoice.value !== null 
      : true
    const hasSelectedSkillChoice = selectedArchetype.value.skillChoices 
      ? selectedSkillChoice.value !== null 
      : true
    const hasSelectedTalent = selectedTalent.value !== null
    const hasSelectedBelongings = selectedArchetype.value.belongings 
      ? selectedBelongings.value.length === selectedArchetype.value.belongings[0].selectCount
      : true
    const hasSelectedFocuses = selectedFocuses.value.length === 2
    
    if (!hasSelectedAttributeChoice) {
      alert('請選擇屬性組合')
      activeDetailTab.value = 'mechanics'
      return
    }
    
    if (!hasSelectedSkillChoice) {
      alert('請選擇技能組合')
      activeDetailTab.value = 'mechanics'
      return
    }
    
    if (!hasSelectedFocuses) {
      alert('請選擇2項專精')
      activeDetailTab.value = 'mechanics'
      return
    }
    
    if (!hasSelectedTalent) {
      alert('請選擇一項原型天賦')
      activeDetailTab.value = 'talents'
      return
    }
    
    if (!hasSelectedBelongings) {
      alert('請完成物品選擇')
      activeDetailTab.value = 'belongings'
      return
    }
    
    // 將選擇資料一起傳遞
    const selectionData = {
      archetype: selectedArchetype.value,
      selectedTalent: selectedTalent.value,
      selectedBelongings: selectedBelongings.value,
      selectedFocuses: selectedFocuses.value,
      selectedAttributeChoice: selectedAttributeChoice.value,
      selectedSkillChoice: selectedSkillChoice.value
    }
    
    emit('select-archetype', selectionData)
    emit('next-step')
  }
}

// 輔助方法
const getAttributeName = (attrCode) => {
  const names = {
    AGI: '敏捷',
    BRA: '體魄',
    COO: '協調',
    INS: '洞察',
    REA: '智識',
    WIL: '意志'
  }
  return names[attrCode] || attrCode
}

const getSkillName = (skillCode) => {
  const names = {
    ACADEMIA: '學識',
    ATHLETICS: '運動',
    ENGINEERING: '工程',
    FIGHTING: '戰鬥',
    MEDICINE: '醫學',
    OBSERVATION: '觀察',
    PERSUASION: '說服',
    RESILIENCE: '韌性',
    STEALTH: '潛匿',
    SURVIVAL: '求生',
    TACTICS: '戰術',
    VEHICLES: '載具'
  }
  return names[skillCode] || skillCode
}

// 獲取屬性描述
const getAttributeDescription = (attrCode) => {
  const descriptions = {
    'AGI': '影響反應速度、敏捷動作和迴避能力',
    'BRA': '影響物理力量、近戰傷害和負重能力',
    'COO': '影響精細操作、射擊準度和手眼協調',
    'INS': '影響直覺判斷、感知觀察和洞察力',
    'REA': '影響學習能力、推理思考和技術理解',
    'WIL': '影響意志力、抗壓能力和持久專注'
  }
  return descriptions[attrCode] || '提升角色基礎能力'
}

// 獲取技能描述  
const getSkillDescription = (skillCode) => {
  const descriptions = {
    'ACADEMIA': '學術知識、研究能力、理論應用',
    'ATHLETICS': '體能活動、運動、攀爬、游泳等身體能力',
    'ENGINEERING': '工程技術、機械維修、建築和爆破',
    'FIGHTING': '近戰格鬥、武器使用、戰鬥技巧',
    'MEDICINE': '醫療救護、傷患治療、生理知識',
    'OBSERVATION': '觀察力、警覺性、發現隱藏事物',
    'PERSUASION': '說服力、談判技巧、社交影響',
    'RESILIENCE': '抗壓能力、心理韌性、意志堅定',
    'STEALTH': '潛行、隱匿、秘密行動',
    'SURVIVAL': '野外生存、環境適應、資源利用',
    'TACTICS': '戰術規劃、軍事指揮、戰略思維',
    'VEHICLES': '載具駕駛、操控技術、機動作戰'
  }
  return descriptions[skillCode] || '專業技能應用'
}

// 專精選擇相關方法
const toggleFocus = (focus, skillCode) => {
  if (selectedFocuses.value.includes(focus)) {
    removeFocus(focus)
  } else if (selectedFocuses.value.length < 2) {
    selectedFocuses.value.push(focus)
  }
}

const removeFocus = (focus) => {
  const index = selectedFocuses.value.indexOf(focus)
  if (index > -1) {
    selectedFocuses.value.splice(index, 1)
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>