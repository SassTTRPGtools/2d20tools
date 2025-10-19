<template>
  <div class="character-creation-step">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">✨ 選擇你的特徵</h2>
      <p class="text-gray-600 text-lg">
        什麼使你與眾不同？你有什麼特殊的經歷或能力？
      </p>
    </div>

    <!-- 選擇的特徵顯示 -->
    <div v-if="selectedTrait" class="mb-8 p-4 bg-green-50 border-l-4 border-l-green-500 rounded-lg shadow-md">
      <h3 class="text-lg font-bold text-green-800 mb-2">
        ✅ 已選擇特徵：{{ selectedTrait.icon }} {{ selectedTrait.chineseName }}
      </h3>
      <p class="text-green-700 mb-3">{{ selectedTrait.description }}</p>
      
      <!-- 特徵詳情摘要 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 class="font-bold text-green-800 mb-1">屬性加成：</h4>
          <p class="text-green-600">
            {{ formatAttributeBonus(selectedTrait) }}
            <span v-if="selectedTrait.flexibleAttributePoints">
              + {{ selectedTrait.flexibleAttributePoints }} 任選屬性
            </span>
          </p>
        </div>
        <div>
          <h4 class="font-bold text-green-800 mb-1">技能加成：</h4>
          <p class="text-green-600">{{ formatSkillBonus(selectedTrait) }}</p>
        </div>
        <div>
          <h4 class="font-bold text-green-800 mb-1">天賦要求：</h4>
          <p class="text-green-600">{{ selectedTrait.talentRequirement.description }}</p>
        </div>
        <div>
          <h4 class="font-bold text-green-800 mb-1">真理：</h4>
          <p class="text-green-600">{{ selectedTrait.truthOptions.join('，或') }}</p>
        </div>
      </div>
    </div>

    <!-- 特徵列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      <div 
        v-for="trait in traits" 
        :key="trait.key"
        @click="selectTrait(trait)"
        :class="[
          'trait-card border-2 rounded-lg p-4 cursor-pointer transition-all duration-200',
          selectedTrait?.key === trait.key
            ? 'border-green-500 bg-green-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-amber-400 hover:shadow-md'
        ]"
      >
        <div class="flex items-center mb-3">
          <span class="text-3xl mr-3">{{ trait.icon }}</span>
          <div>
            <h3 class="font-bold text-lg text-gray-800">{{ trait.chineseName }}</h3>
            <p class="text-sm text-gray-500">{{ trait.englishName }}</p>
          </div>
          <div v-if="selectedTrait?.key === trait.key" class="ml-auto">
            <span class="text-green-500 text-xl">✓</span>
          </div>
        </div>

        <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{ trait.description }}</p>

        <!-- 快速資訊預覽 -->
        <div class="text-xs space-y-1">
          <div class="flex items-center">
            <span class="font-semibold w-12 text-gray-500">屬性：</span>
            <span class="text-gray-700">{{ formatAttributeBonus(trait, true) }}</span>
          </div>
          <div class="flex items-center">
            <span class="font-semibold w-12 text-gray-500">技能：</span>
            <span class="text-gray-700">{{ formatSkillBonus(trait, true) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 詳細資訊區域 -->
    <div v-if="selectedTrait" class="mb-8 bg-gray-50 rounded-lg p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">{{ selectedTrait.chineseName }} 詳細資訊</h3>
      
      <!-- 頁籤切換 -->
      <div class="mb-6">
        <div class="border-b border-gray-200">
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
            <!-- 左側：描述 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-2">特徵描述</h4>
              <p class="text-gray-700 mb-4">{{ selectedTrait.description }}</p>
              
              <h4 class="text-lg font-semibold text-gray-800 mb-2">隨身物品</h4>
              <div v-if="Array.isArray(selectedTrait.equipment)">
                <ul class="text-gray-700 space-y-1 mb-4">
                  <li v-for="item in selectedTrait.equipment" :key="item" class="flex items-start">
                    <span class="text-amber-600 mr-2">•</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div v-else>
                <p class="text-gray-700 mb-4">{{ selectedTrait.equipment }}</p>
              </div>
            </div>
            
            <!-- 右側：真理選擇 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-4">選擇真理 (選擇1項)</h4>
              <div class="space-y-2 mb-4">
                <button
                  v-for="truth in selectedTrait.truthOptions"
                  :key="truth"
                  @click="selectTruth(truth)"
                  :class="[
                    'w-full text-left p-3 border-2 rounded-lg transition-all duration-200',
                    selectedTruth === truth
                      ? 'bg-amber-100 border-amber-400 text-amber-800'
                      : 'bg-white border-gray-200 hover:border-amber-300 hover:bg-amber-50'
                  ]"
                >
                  {{ truth }}
                </button>
              </div>
              <div class="text-sm text-gray-600">
                <p class="mb-2"><strong>或者</strong>，你可以自行創作與特徵相關的真理</p>
                <textarea
                  v-model="customTruth"
                  @input="handleCustomTruthInput"
                  placeholder="輸入自訂真理..."
                  class="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  rows="2"
                ></textarea>
              </div>
              
              <!-- 已選擇真理顯示 -->
              <div v-if="finalTruth" class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <h5 class="font-semibold text-amber-800 mb-1">已選擇真理:</h5>
                <p class="text-sm text-amber-700">{{ finalTruth }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 機械效果頁籤 -->
        <div v-else-if="activeDetailTab === 'mechanics'">
          <div class="space-y-8">
            <!-- 屬性和技能加成區域 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- 屬性加成 -->
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-3">屬性加成</h4>
                
                <!-- 固定屬性加成 -->
                <div class="space-y-2 mb-6">
                  <div 
                    v-for="(value, attr) in selectedTrait.attributeBonus" 
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

                <!-- 彈性屬性選擇 -->
                <div v-if="selectedTrait.flexibleAttributePoints" class="mb-6">
                  <h5 class="text-md font-semibold text-gray-800 mb-3">
                    選擇額外屬性 (+{{ selectedTrait.flexibleAttributePoints }})
                  </h5>
                  <div class="grid grid-cols-2 gap-2">
                    <button
                      v-for="attr in availableAttributes"
                      :key="attr.code"
                      @click="selectFlexibleAttribute(attr.code)"
                      :class="[
                        'p-2 text-sm rounded border-2 transition-all duration-200',
                        selectedFlexibleAttribute === attr.code
                          ? 'bg-blue-100 border-blue-400 text-blue-800'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      ]"
                    >
                      {{ attr.name }}
                    </button>
                  </div>
                </div>

                <!-- 技能加成 -->
                <h4 class="text-lg font-semibold text-gray-800 mb-3">技能加成</h4>
                <div class="space-y-2 mb-4">
                  <div 
                    v-for="(value, skill) in selectedTrait.skillBonus" 
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

                <!-- 特殊技能規則顯示 -->
                <div v-if="hasSpecialSkillRules" class="space-y-2 mb-4">
                  <div v-if="selectedTrait.specialSkillRule === 'all-zero-skills'" 
                       class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
                    <h5 class="font-medium text-purple-800">特殊規則</h5>
                    <p class="text-xs text-purple-600 mt-1">所有目前等級為 0 的技能 +1</p>
                  </div>
                  
                  <div v-if="selectedTrait.specialSkillRule === 'choose-four'" 
                       class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
                    <h5 class="font-medium text-purple-800">任選四項技能 +1</h5>
                    <p class="text-xs text-purple-600 mt-1">從所有技能中任選四項，各 +1</p>
                  </div>
                  
                  <div v-if="selectedTrait.specialSkillRule === 'choose-low-level'" 
                       class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
                    <h5 class="font-medium text-purple-800">低級技能加成</h5>
                    <p class="text-xs text-purple-600 mt-1">任一目前等級為 0 或 1 的技能 +{{ selectedTrait.specialSkillPoints }}</p>
                  </div>
                </div>

                <!-- 特殊技能選擇（觀察、說服或潛匿任一） -->
                <div v-if="selectedTrait.specialSkillChoice" class="mb-4">
                  <h5 class="text-md font-semibold text-gray-800 mb-3">選擇技能 (+1)</h5>
                  <div class="space-y-2">
                    <button
                      v-for="skillCode in selectedTrait.specialSkillChoice"
                      :key="skillCode"
                      @click="selectSpecialSkill(skillCode)"
                      :class="[
                        'w-full text-left p-2 border-2 rounded-lg transition-all duration-200',
                        selectedSpecialSkill === skillCode
                          ? 'bg-blue-100 border-blue-400 text-blue-800'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      ]"
                    >
                      {{ getSkillName(skillCode) }} +1
                    </button>
                  </div>
                </div>
              </div>

              <!-- 彈性技能選擇和天賦要求 -->
              <div>
                <!-- 彈性技能選擇 -->
                <div v-if="selectedTrait.flexibleSkillPoints" class="mb-6">
                  <div class="flex justify-between items-center mb-3">
                    <h4 class="text-lg font-semibold text-gray-800">選擇額外技能</h4>
                    <span class="text-sm font-medium px-3 py-1 rounded-full"
                          :class="isRequiredSkillsSelected ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'">
                      已選擇: {{ selectedFlexibleSkills.length }} / {{ selectedTrait.flexibleSkillCount }}
                    </span>
                  </div>
                  
                  <div class="mb-3 text-sm text-gray-600">
                    <p>選擇 {{ selectedTrait.flexibleSkillCount }} 項技能，各 +{{ selectedTrait.flexibleSkillPoints }}</p>
                    <p v-if="selectedTrait.skillRestrictions" class="text-red-600 mt-1">
                      限制：不可選擇 {{ selectedTrait.skillRestrictions.map(skill => getSkillName(skill)).join('、') }}
                    </p>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded p-2">
                    <button
                      v-for="skill in availableFlexibleSkills"
                      :key="skill.code"
                      @click="toggleFlexibleSkill(skill.code)"
                      :disabled="!canSelectMoreSkills && !isSkillSelected(skill.code)"
                      :class="[
                        'p-2 text-xs rounded border-2 transition-all duration-200',
                        isSkillSelected(skill.code)
                          ? 'bg-blue-100 border-blue-400 text-blue-800'
                          : canSelectMoreSkills
                            ? 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                            : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                      ]"
                    >
                      {{ skill.name }}
                    </button>
                  </div>
                </div>
                
                <h4 class="text-lg font-semibold text-gray-800 mb-3">天賦要求</h4>
                <div class="bg-amber-50 border-l-4 border-amber-400 p-3 rounded mb-4">
                  <p class="text-sm text-amber-800 font-medium">{{ selectedTrait.talentRequirement.description }}</p>
                </div>
              </div>
            </div>

            <!-- 天賦選擇區域 -->
            <div v-if="availableTalents.length > 0" class="border-t pt-6">
              <h4 class="text-xl font-semibold text-gray-800 mb-4">選擇天賦</h4>
              
              <div class="mb-4 text-sm text-gray-600">
                <p>{{ selectedTrait.talentRequirement.description }}</p>
              </div>
              
              <!-- 天賦列表 -->
              <div class="space-y-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg bg-white">
                <button
                  v-for="talent in availableTalents"
                  :key="`${talent.category}-${talent.englishName}`"
                  @click="selectedTalent = talent"
                  :class="[
                    'w-full text-left p-4 border-b border-gray-200 last:border-b-0 transition-all duration-200 relative',
                    selectedTalent === talent
                      ? 'bg-green-100 text-green-800 border-l-4 border-l-green-500 shadow-md'
                      : 'bg-white text-gray-700 hover:bg-green-50 hover:border-l-4 hover:border-l-green-300'
                  ]"
                >
                  <div class="flex justify-between items-start mb-2">
                    <div class="font-semibold">{{ talent.chineseName }}</div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {{ talent.keywords }}
                      </span>
                      <div v-if="selectedTalent === talent" class="text-green-500 text-lg">✓</div>
                    </div>
                  </div>
                  <div class="text-sm text-gray-600 mb-2">{{ talent.englishName }}</div>
                  <div class="text-xs text-gray-500">{{ talent.content }}</div>
                </button>
              </div>
              
              <!-- 已選擇天賦顯示 -->
              <div v-if="selectedTalent" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h5 class="font-semibold text-green-800 mb-2">已選擇天賦:</h5>
                <div class="text-sm">
                  <div class="font-medium text-green-700">{{ selectedTalent.chineseName }}</div>
                  <div class="text-green-600 mb-1">{{ selectedTalent.englishName }}</div>
                  <div class="text-green-600 text-xs">{{ selectedTalent.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部導航 -->
    <div class="flex justify-between">
      <button 
        @click="$emit('prev-step')"
        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        上一步
      </button>
      <button 
        @click="$emit('next-step')"
        :disabled="!selectedTrait"
        :class="[
          'px-6 py-2 rounded-lg transition-colors',
          selectedTrait
            ? 'bg-amber-600 text-white hover:bg-amber-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        ]"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { traitsAC } from '../data/traitsAC.js'
import { useTalentDataAC } from '../composables/useTalentDataAC.js'

// Props 和 Emits
const props = defineProps({
  selectedTrait: {
    type: Object,
    default: null
  },
  selectedArchetype: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['next-step', 'prev-step', 'select-trait'])

// 使用天賦數據
const { talentsDatabase } = useTalentDataAC()

// 響應式資料
const traits = ref(traitsAC)
const selectedTrait = ref(props.selectedTrait)

// 詳細資訊頁籤
const activeDetailTab = ref('description')
const detailTabs = [
  { key: 'description', name: '描述' },
  { key: 'mechanics', name: '益處選項' }
]

// 選擇狀態
const selectedTruth = ref('')
const customTruth = ref('')
const finalTruth = computed(() => selectedTruth.value || customTruth.value)

const selectedFlexibleAttribute = ref('')
const selectedFlexibleSkills = ref([])
const selectedSpecialSkill = ref('')
const selectedTalent = ref(null)

// 監聽 props 變化
watch(() => props.selectedTrait, (newValue) => {
  selectedTrait.value = newValue
  // 重置選擇狀態
  resetSelections()
})

// 重置選擇狀態
const resetSelections = () => {
  selectedTruth.value = ''
  customTruth.value = ''
  selectedFlexibleAttribute.value = ''
  selectedFlexibleSkills.value = []
  selectedSpecialSkill.value = ''
  selectedTalent.value = null
  activeDetailTab.value = 'description'
}

// 方法
const selectTrait = (trait) => {
  selectedTrait.value = trait
  resetSelections()
  emit('select-trait', {
    trait: trait,
    selections: {
      truth: '',
      flexibleAttribute: '',
      flexibleSkills: [],
      specialSkill: '',
      talent: null
    }
  })
}

// 真理選擇
const selectTruth = (truth) => {
  selectedTruth.value = truth
  customTruth.value = ''
  updateSelections()
}

const handleCustomTruthInput = () => {
  selectedTruth.value = ''
  updateSelections()
}

// 屬性選擇
const selectFlexibleAttribute = (attrCode) => {
  selectedFlexibleAttribute.value = attrCode
  updateSelections()
}

// 技能選擇
const selectSpecialSkill = (skillCode) => {
  selectedSpecialSkill.value = skillCode
  updateSelections()
}

const toggleFlexibleSkill = (skillCode) => {
  const index = selectedFlexibleSkills.value.indexOf(skillCode)
  if (index > -1) {
    selectedFlexibleSkills.value.splice(index, 1)
  } else if (canSelectMoreSkills.value) {
    selectedFlexibleSkills.value.push(skillCode)
  }
  updateSelections()
}

const isSkillSelected = (skillCode) => {
  return selectedFlexibleSkills.value.includes(skillCode)
}

// 更新選擇資料
const updateSelections = () => {
  if (selectedTrait.value) {
    emit('select-trait', {
      trait: selectedTrait.value,
      selections: {
        truth: finalTruth.value,
        flexibleAttribute: selectedFlexibleAttribute.value,
        flexibleSkills: [...selectedFlexibleSkills.value],
        specialSkill: selectedSpecialSkill.value,
        talent: selectedTalent.value
      }
    })
  }
}

// 監聽天賦選擇變化
watch(() => selectedTalent.value, () => {
  updateSelections()
})

// 計算屬性
const availableAttributes = computed(() => [
  { code: 'AGI', name: '敏捷' },
  { code: 'BRA', name: '體魄' },
  { code: 'COO', name: '協調' },
  { code: 'INS', name: '洞察' },
  { code: 'REA', name: '智識' },
  { code: 'WIL', name: '意志' }
])

const availableFlexibleSkills = computed(() => {
  const skills = [
    { code: 'ACADEMIA', name: '學識' },
    { code: 'ATHLETICS', name: '運動' },
    { code: 'COMMAND', name: '指揮' },
    { code: 'ENGINEERING', name: '工程' },
    { code: 'FIGHTING', name: '戰鬥' },
    { code: 'MEDICINE', name: '醫學' },
    { code: 'OBSERVATION', name: '觀察' },
    { code: 'PERSUASION', name: '說服' },
    { code: 'RESILIENCE', name: '韌性' },
    { code: 'STEALTH', name: '潛匿' },
    { code: 'SURVIVAL', name: '求生' },
    { code: 'TACTICS', name: '戰術' },
    { code: 'VEHICLES', name: '載具' }
  ]
  
  // 過濾掉受限制的技能
  if (selectedTrait.value?.skillRestrictions) {
    return skills.filter(skill => !selectedTrait.value.skillRestrictions.includes(skill.code))
  }
  
  return skills
})

const isRequiredSkillsSelected = computed(() => {
  if (!selectedTrait.value?.flexibleSkillCount) return true
  return selectedFlexibleSkills.value.length >= selectedTrait.value.flexibleSkillCount
})

const canSelectMoreSkills = computed(() => {
  if (!selectedTrait.value?.flexibleSkillCount) return false
  return selectedFlexibleSkills.value.length < selectedTrait.value.flexibleSkillCount
})

const hasSpecialSkillRules = computed(() => {
  return selectedTrait.value && (
    selectedTrait.value.specialSkillRule === 'all-zero-skills' ||
    selectedTrait.value.specialSkillRule === 'choose-four' ||
    selectedTrait.value.specialSkillRule === 'choose-low-level'
  )
})

// 獲取可選擇的天賦
const availableTalents = computed(() => {
  if (!selectedTrait.value) return []
  
  const requirement = selectedTrait.value.talentRequirement
  
  // 檢查是否為 '無' 或 null
  if (!requirement || requirement === '無') return []
  
  // 處理任意關鍵詞的情況
  if (requirement.keyword === '任意') {
    return getAllTalents()
  }
  
  // 處理具體關鍵詞
  if (requirement.keyword) {
    return findTalentsByKeyword(requirement.keyword)
  }
  
  return []
})

// 輔助函數：獲取所有天賦
const getAllTalents = () => {
  const allTalents = []
  
  Object.keys(talentsDatabase).forEach(category => {
    talentsDatabase[category].forEach(talent => {
      allTalents.push({
        ...talent,
        category: category
      })
    })
  })
  
  return allTalents
}

// 輔助函數：根據關鍵字尋找天賦
const findTalentsByKeyword = (keywordString) => {
  const allTalents = []
  
  // 處理多個關鍵詞（用 | 分隔）
  const keywords = keywordString.split('|')
  
  Object.keys(talentsDatabase).forEach(category => {
    talentsDatabase[category].forEach(talent => {
      // 檢查是否包含任一關鍵詞
      const hasMatchingKeyword = keywords.some(keyword => {
        return talent.keywords.includes(`〈${keyword}〉`) || 
               talent.keywords.includes(keyword) ||
               talent.keywords.includes(`${keyword}，`) ||
               talent.keywords.includes(`，${keyword}`) ||
               talent.keywords.split('，').includes(keyword)
      })
      
      if (hasMatchingKeyword) {
        // 檢查天賦是否有原型限制
        const archetypeKeywords = ['技術專家', '指揮官', '騙徒', '機械工', '滲透者', '調查員', '神秘學者', '士兵']
        const hasArchetypeKeyword = archetypeKeywords.some(archetype => 
          talent.keywords.includes(`〈${archetype}〉`)
        )
        
        if (hasArchetypeKeyword) {
          // 如果天賦有原型限制，檢查是否與當前選擇的原型匹配
          if (props.selectedArchetype) {
            const currentArchetypeName = props.selectedArchetype.chineseName
            
            if (talent.keywords.includes(`〈${currentArchetypeName}〉`)) {
              allTalents.push({
                ...talent,
                category: category
              })
            }
          }
        } else {
          // 沒有原型限制的天賦正常顯示
          allTalents.push({
            ...talent,
            category: category
          })
        }
      }
    })
  })
  
  return allTalents
}

// 格式化屬性加成顯示
const formatAttributeBonus = (trait, isPreview = false) => {
  const bonuses = []
  for (const [attr, value] of Object.entries(trait.attributeBonus || {})) {
    bonuses.push(`${getAttributeName(attr)} +${value}`)
  }
  
  if (trait.flexibleAttributePoints && !isPreview) {
    bonuses.push(`另 +${trait.flexibleAttributePoints} 任一屬性`)
  }
  
  return bonuses.join('、') || '無'
}

// 格式化技能加成顯示
const formatSkillBonus = (trait, isPreview = false) => {
  const bonuses = []
  
  // 固定技能加成
  for (const [skill, value] of Object.entries(trait.skillBonus || {})) {
    bonuses.push(`${getSkillName(skill)} +${value}`)
  }
  
  // 特殊規則
  if (trait.specialSkillRule === 'all-zero-skills') {
    bonuses.push('所有 0 級技能 +1')
  } else if (trait.specialSkillRule === 'choose-four') {
    bonuses.push('任選四項技能 +1')
  } else if (trait.specialSkillChoice) {
    const skills = trait.specialSkillChoice.map(skill => getSkillName(skill)).join('/')
    bonuses.push(`${skills} 任一 +1`)
  } else if (trait.specialSkillRule === 'choose-low-level') {
    bonuses.push(`低級技能 +${trait.specialSkillPoints}`)
  }
  
  // 彈性技能點數
  if (trait.flexibleSkillPoints && !isPreview) {
    bonuses.push(`另 +${trait.flexibleSkillPoints} (${trait.flexibleSkillCount}項)`)
  }
  
  return bonuses.join('、') || '無'
}

// 獲取屬性名稱
const getAttributeName = (attrCode) => {
  const attributeNames = {
    AGI: '敏捷',
    BRA: '體魄', 
    COO: '協調',
    INS: '洞察',
    REA: '智識',
    WIL: '意志'
  }
  return attributeNames[attrCode] || attrCode
}

// 獲取屬性描述
const getAttributeDescription = (attrCode) => {
  const descriptions = {
    AGI: '快速移動、迴避危險、靈活行動',
    BRA: '體力、肌力、耐久力',
    COO: '精確動作、手眼協調、平衡感',
    INS: '察覺環境、直覺判斷、洞察力',
    REA: '思考推理、記憶學習、知識應用',
    WIL: '精神堅韌、抗壓能力、意志力'
  }
  return descriptions[attrCode] || ''
}

// 獲取技能名稱
const getSkillName = (skillCode) => {
  const skillNames = {
    ACADEMIA: '學識',
    ATHLETICS: '運動',
    COMMAND: '指揮',
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
  return skillNames[skillCode] || skillCode
}

// 獲取技能描述
const getSkillDescription = (skillCode) => {
  const descriptions = {
    ACADEMIA: '學術知識、研究能力、理論理解',
    ATHLETICS: '體能活動、運動技巧、身體協調',
    COMMAND: '領導能力、戰術指揮、團隊協調',
    ENGINEERING: '工程技術、機械維修、技術應用',
    FIGHTING: '近戰搏鬥、武器使用、戰鬥技巧',
    MEDICINE: '醫療技能、急救處理、健康護理',
    OBSERVATION: '觀察力、注意力、細節發現',
    PERSUASION: '說服技巧、社交能力、影響他人',
    RESILIENCE: '抗壓能力、精神韌性、持久力',
    STEALTH: '隱匿行動、潛行技巧、秘密活動',
    SURVIVAL: '野外求生、環境適應、生存技能',
    TACTICS: '戰術規劃、策略思考、軍事知識',
    VEHICLES: '載具操作、駕駛技能、機械控制'
  }
  return descriptions[skillCode] || ''
}
</script>

<style scoped>
.character-creation-step {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.trait-card {
  transition: all 0.3s ease;
}

.trait-card:hover {
  transform: translateY(-2px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .character-creation-step {
    padding: 15px;
  }
  
  .trait-card {
    min-height: auto;
  }
}
</style>