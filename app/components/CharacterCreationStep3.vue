<template>
  <div class="character-creation-step">
    <!-- 步驟標題 -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">💼 選擇你的背景</h2>
      <p class="text-gray-600 text-lg">
        你的個人故事是什麼？你是如何捲入這場隱密之戰的？
      </p>
    </div>

    <!-- 背景選擇網格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      <div 
        v-for="background in backgrounds" 
        :key="background.key"
        @click="selectBackground(background)"
        class="relative cursor-pointer transform transition-all duration-200 hover:scale-105"
        :class="selectedBackground?.key === background.key ? 
          'ring-4 ring-purple-400 bg-purple-50' : 
          'hover:shadow-lg bg-white'"
      >
        <div class="border-2 border-gray-200 rounded-lg p-4 h-full">
          <!-- 背景圖示和標題 -->
          <div class="text-center mb-3">
            <div class="text-4xl mb-2">{{ background.icon }}</div>
            <h3 class="text-lg font-bold text-gray-800">{{ background.chineseName }}</h3>
            <p class="text-sm text-gray-500">{{ background.englishName }}</p>
          </div>
          
          <!-- 背景描述 -->
          <p class="text-xs text-gray-600 mb-3 line-clamp-3">{{ background.description }}</p>
          
          <!-- 關鍵技能顯示 -->
          <div class="border-t pt-2">
            <p class="text-xs font-semibold text-gray-700 mb-1">主要技能:</p>
            <div class="flex flex-wrap gap-1">
              <span 
                v-for="(value, skill) in background.skillBonus" 
                :key="skill"
                class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {{ getSkillName(skill) }} +{{ value }}
              </span>
            </div>
          </div>
          
          <!-- 選中指示器 -->
          <div 
            v-if="selectedBackground?.key === background.key"
            class="absolute top-2 right-2 text-purple-500"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- 詳細資訊區域 -->
    <div v-if="selectedBackground" class="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-6 mb-8">
      <h3 class="text-2xl font-bold text-purple-800 mb-4">
        {{ selectedBackground.icon }} {{ selectedBackground.chineseName }}
      </h3>
      
      <!-- 頁籤切換 -->
      <div class="mb-6">
        <div class="border-b border-purple-200">
          <nav class="-mb-px flex space-x-8">
            <button
              v-for="tab in detailTabs"
              :key="tab.key"
              @click="activeDetailTab = tab.key"
              :class="[
                activeDetailTab === tab.key
                  ? 'border-purple-500 text-purple-600'
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
              <h4 class="text-lg font-semibold text-gray-800 mb-2">背景描述</h4>
              <p class="text-gray-700 mb-4">{{ selectedBackground.detailDescription }}</p>
              
              <h4 class="text-lg font-semibold text-gray-800 mb-2">起始裝備</h4>
              <ul class="text-gray-700 space-y-1 mb-4">
                <li v-for="equipment in selectedBackground.equipment" :key="equipment" class="flex items-start">
                  <span class="text-purple-600 mr-2">•</span>
                  <span>{{ equipment }}</span>
                </li>
              </ul>
            </div>
            
            <!-- 右側：真理選擇 -->
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-4">選擇真理 (選擇1項)</h4>
              <div class="space-y-2 mb-4">
                <button
                  v-for="truth in selectedBackground.truthOptions"
                  :key="truth"
                  @click="selectTruth(truth)"
                  :class="[
                    'w-full text-left p-3 border-2 rounded-lg transition-all duration-200',
                    selectedTruth === truth
                      ? 'bg-purple-100 border-purple-400 text-purple-800'
                      : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  ]"
                >
                  {{ truth }}
                </button>
              </div>
              <div class="text-sm text-gray-600">
                <p class="mb-2"><strong>或者</strong>，你可以自行創作與背景相關的真理</p>
                <textarea
                  v-model="customTruth"
                  @input="handleCustomTruthInput"
                  placeholder="輸入自訂真理..."
                  class="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  rows="2"
                ></textarea>
              </div>
              
              <!-- 已選擇真理顯示 -->
              <div v-if="finalTruth" class="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <h5 class="font-semibold text-purple-800 mb-1">已選擇真理:</h5>
                <p class="text-sm text-purple-700">{{ finalTruth }}</p>
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
                <div class="space-y-2 mb-6">
                  <div 
                    v-for="(value, attr) in selectedBackground.attributeBonus" 
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
                <div class="space-y-2">
                  <div 
                    v-for="(value, skill) in selectedBackground.skillBonus" 
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

              <!-- 專精和天賦要求 -->
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-3">專精要求</h4>
                <div class="space-y-2 mb-6">
                  <div 
                    v-for="requirement in selectedBackground.focusRequirements" 
                    :key="requirement.skill"
                    class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded"
                  >
                    <p class="text-sm text-purple-800 font-medium">{{ requirement.description }}</p>
                  </div>
                </div>
                
                <h4 class="text-lg font-semibold text-gray-800 mb-3">天賦要求</h4>
                <div class="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
                  <p class="text-sm text-amber-800 font-medium">{{ selectedBackground.talentRequirement.description }}</p>
                </div>
              </div>
            </div>

            <!-- 專精選擇區域 -->
            <div v-if="skillsForFocus.length > 0" class="border-t pt-6">
              <div class="flex justify-between items-center mb-4">
                <h4 class="text-xl font-semibold text-gray-800">選擇專精</h4>
                <span class="text-sm font-medium px-3 py-1 rounded-full"
                      :class="isRequiredFocusesSelected ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'">
                  已選擇: {{ selectedFocuses.length }} / {{ totalRequiredFocuses }}
                </span>
              </div>
              <div class="mb-4 text-sm text-gray-600 space-y-1">
                <p v-for="req in selectedBackground.focusRequirements" :key="req.description">
                  • {{ req.description }}
                </p>
              </div>
              
              <!-- 顯示步驟一已選擇的專精 -->
              <div v-if="archetypeFocuses.length > 0" class="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <h6 class="text-sm font-semibold text-amber-800 mb-2">原型已提供的專精:</h6>
                <div class="text-xs text-amber-700 space-y-1">
                  <div v-for="focus in archetypeFocuses" :key="`archetype-${focus.skillCode}-${focus.name}`">
                    • {{ focus.skillName }} - {{ focus.name }}
                  </div>
                </div>
                <p class="text-xs text-amber-600 mt-2">
                  ℹ️ 這些專精來自你的原型選擇，與背景專精是分開的
                </p>
              </div>
              
              <!-- 按技能分組顯示專精 -->
              <div class="space-y-4 max-h-96 overflow-y-auto border border-gray-200 rounded-lg bg-white">
                <div 
                  v-for="skill in skillsForFocus" 
                  :key="skill.code"
                  class="border-b border-gray-200 last:border-b-0"
                >
                  <!-- 技能標題 -->
                  <div class="bg-slate-700 text-white px-4 py-2">
                    <h5 class="font-semibold text-sm">{{ skill.name }}</h5>
                  </div>
                  
                  <!-- 專精列表 -->
                  <div class="p-3 bg-white">
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="focus in skill.focuses"
                        :key="`${skill.code}-${focus.name}`"
                        @click="selectFocus(skill, focus)"
                        @mouseenter="showFocusPreview($event, focus)"
                        @mouseleave="hideFocusPreview"
                        :class="[
                          'px-3 py-1 text-sm rounded transition-all duration-200 cursor-pointer relative',
                          isFocusSelected(skill.code, focus.name)
                            ? 'bg-blue-600 text-white font-bold'
                            : isArchetypeFocus(skill.code, focus.name)
                              ? 'bg-green-200 text-green-800 border-2 border-green-400 font-medium'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                        ]"
                      >
                        {{ focus.name }}
                        <span v-if="isArchetypeFocus(skill.code, focus.name)" 
                              class="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          ✓
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>              
            </div>

            <!-- 天賦選擇區域 -->
            <div v-if="availableTalents.length > 0" class="border-t pt-6">
              <h4 class="text-xl font-semibold text-gray-800 mb-4">選擇天賦</h4>
              
              <div class="mb-4 text-sm text-gray-600">
                <p>{{ getTalentRequirementDescription() }}</p>
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
                      <span class="text-xs bg-gray-200 px-2 py-1 rounded">{{ talent.keywords }}</span>
                      <!-- 選中指示器 -->
                      <div v-if="selectedTalent === talent" class="text-green-600">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-sm text-gray-600 leading-relaxed">{{ talent.content }}</div>
                </button>
              </div>
              
              <!-- 已選擇天賦顯示 -->
              <div v-if="selectedTalent" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h5 class="font-semibold text-green-800 mb-2">
                  已選擇天賦: {{ selectedTalent.chineseName }}
                </h5>
                <p class="text-sm text-green-700">{{ selectedTalent.content }}</p>
              </div>
            </div>

            <!-- 選擇摘要 -->
            <div class="border-t pt-6">
              <h4 class="text-xl font-semibold text-gray-800 mb-4">選擇摘要</h4>
              <div class="bg-white border border-gray-200 rounded-lg p-4">
                <div class="space-y-3">
                  <div>
                    <span class="font-medium text-gray-700">背景：</span>
                    <span class="text-gray-600">{{ selectedBackground.chineseName }}</span>
                  </div>
                  <div>
                    <span class="font-medium text-gray-700">真理：</span>
                    <span class="text-gray-600">{{ finalTruth || '尚未選擇' }}</span>
                  </div>
                  <div v-if="selectedFocuses.length > 0">
                    <span class="font-medium text-gray-700">已選專精：</span>
                    <div class="text-gray-600 text-sm mt-1">
                      <div v-for="focus in selectedFocuses" :key="`summary-${focus.skillCode}-${focus.name}`">
                        • {{ focus.skillName }} - {{ focus.name }}
                      </div>
                    </div>
                  </div>
                  <div v-if="selectedTalent">
                    <span class="font-medium text-gray-700">已選天賦：</span>
                    <span class="text-gray-600">{{ selectedTalent.chineseName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      
      <button 
        @click="confirmSelection"
        :disabled="!isSelectionComplete"
        class="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-purple-700"
      >
        {{ getButtonText }}
      </button>
    </div>

    <!-- 規則說明 -->
    <div class="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h4 class="font-semibold text-gray-800 mb-2">📋 背景規則說明</h4>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• 背景決定了角色在戰爭前的生活和專業經驗</li>
        <li>• 每個背景提供額外的屬性和技能加成</li>
        <li>• 部分背景需要選擇特定的專精，增強相關技能表現</li>
        <li>• 部分背景需要選擇符合條件的天賦，獲得特殊能力</li>
        <li>• 真理是角色的重要身份標籤，影響遊戲中的社交互動</li>
        <li>• 背景裝備會在角色創建完成後自動獲得</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { backgrounds as backgroundData } from '../data/backgroundsAC.js'
import { useTalentDataAC } from '../composables/useTalentDataAC.js'

// Props
const props = defineProps({
  selectedBackground: {
    type: Object,
    default: null
  },
  archetypeFocuses: {
    type: Array,
    default: () => []
  },
  selectedArchetype: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['next-step', 'prev-step', 'select-background'])

// 天賦資料 - 添加錯誤處理
let talentsDatabase = {}
let getTalentsByCategory = () => []

try {
  const talentData = useTalentDataAC()
  talentsDatabase = talentData.talentsDatabase || {}
  getTalentsByCategory = talentData.getTalentsByCategory || (() => [])
} catch (error) {
  console.error('Error loading talent data:', error)
}

// 響應式變數
const selectedBackground = ref(props.selectedBackground)
const activeDetailTab = ref('description')
const selectedTruth = ref(null)
const customTruth = ref('')
const selectedFocuses = ref([]) // 改為陣列以支援多個專精
const selectedTalent = ref(null)

// 監聽 props 變化，確保同步
watch(() => props.selectedBackground, (newVal) => {
  if (newVal !== selectedBackground.value) {
    selectedBackground.value = newVal
    // 重置相關選擇
    if (newVal) {
      activeDetailTab.value = 'description'
      selectedTruth.value = null
      customTruth.value = ''
      selectedFocuses.value = []
      selectedTalent.value = null
    }
  }
}, { immediate: true })

// 技能專精資料
const skillsData = ref([
  {
    code: 'ACADEMIA',
    name: '學識',
    focuses: [
      { name: '藝術', description: '涵蓋對藝術品、藝術流派與技巧的理解，以及其在不同文化中的影響。' },
      { name: '密碼學', description: '涵蓋對各種加密與解密技術的理解與應用。' },
      { name: '財務學', description: '涵蓋對貿易、銀行制度的知識，及金錢對政治與文化的影響。' },
      { name: '歷史學', description: '涵蓋對歷史事件、人物及其背後驅動力量的了解。' },
      { name: '語言學', description: '涵蓋對現代、古代與死語的研究，以及語言的演化。' },
      { name: '神秘學', description: '涵蓋對超自然現象、儀式、存在與傳統的研究。' },
      { name: '科學', description: '涵蓋科學方法與其主要分支（數學、物理、化學、生物學），以及其細部領域。' }
    ]
  },
  {
    code: 'ATHLETICS',
    name: '運動',
    focuses: [
      { name: '攀爬', description: '涵蓋攀登牆壁、懸崖與登山技巧。' },
      { name: '游泳', description: '涵蓋徒手游泳與使用呼吸裝置的潜水能力。' },
      { name: '奔跑', description: '涵蓋短跑爆發力與長距離耐力。' },
      { name: '運動訓練', description: '涵蓋自我與他人訓練的方法。' },
      { name: '投擲', description: '涵蓋擲物技巧，從奧運式項目到手榴彈與飛刀。' },
      { name: '舉重', description: '涵蓋搬運重物與對肌肉負荷的訓練應用。' }
    ]
  },
  {
    code: 'ENGINEERING',
    name: '工程',
    focuses: [
      { name: '建築學', description: '涵蓋建築設計與結構支撐原理。' },
      { name: '戰鬥工兵', description: '涵蓋支援或阻礙軍隊行動的工程任務。' },
      { name: '電子學', description: '涵蓋電子設備的構造、修理與應用。' },
      { name: '爆裂物學', description: '涵蓋對炸藥性質、用途與操作的知識。' },
      { name: '機械工程', description: '涵蓋機械運作、維修與設計的理解。' }
    ]
  },
  {
    code: 'FIGHTING',
    name: '戰鬥',
    focuses: [
      { name: '徒手戰鬥', description: '包含以拳腳或擒拿進行的無裝備格鬥。' },
      { name: '近戰武器', description: '使用短兵器作戰，如匕首或刺刀。' },
      { name: '手槍', description: '使用左輪、半自動與衝鋒手槍等短槍。' },
      { name: '近距作戰', description: '使用霰彈槍、衝鋒槍等近距離武器。' },
      { name: '步槍', description: '使用中長距離火器，如步槍與卡賓槍。' },
      { name: '重型武器', description: '使用機槍、火焰噴射器等重型武裝。' },
      { name: '威脅感知', description: '對危險的警覺與反應能力。' },
      { name: '異域', description: '操作稀有、實驗性或異常武器的知識。' }
    ]
  },
  {
    code: 'MEDICINE',
    name: '醫學',
    focuses: [
      { name: '急救', description: '為患者進行緊急處置以穩定傷勢。' },
      { name: '傳染病學', description: '理解疾病的成因、傳播與治療。' },
      { name: '藥理學', description: '研究藥物的用途、副作用與療效。' },
      { name: '精神醫學', description: '研究並治療心理疾病。' },
      { name: '外科手術', description: '涉及開放性操作的醫療技術。' },
      { name: '毒理學', description: '研究毒素對身體的影響與治療方法。' }
    ]
  },
  {
    code: 'OBSERVATION',
    name: '觀察',
    focuses: [
      { name: '聽覺', description: '涵蓋聽覺辨識與聲音分析。' },
      { name: '直覺', description: '基於觀察的第六感或直覺反應。' },
      { name: '視覺', description: '涵蓋在低能見度下觀察細節的能力。' },
      { name: '嗅覺與味覺', description: '以氣味或味覺辨識資訊。' }
    ]
  },
  {
    code: 'PERSUASION',
    name: '說服',
    focuses: [
      { name: '魅力', description: '以天生的吸引力與氣場影響他人。' },
      { name: '暗示', description: '以間接方式傳達訊息或意圖。' },
      { name: '恐嚇', description: '透過威脅使對方恐懼或屈服。' },
      { name: '談判', description: '透過對話達成協議。' },
      { name: '修辭', description: '運用演說或辯論技巧。' },
      { name: '欺瞞', description: '以手段或言語讓他人相信虛假事實。' }
    ]
  },
  {
    code: 'RESILIENCE',
    name: '韌性',
    focuses: [
      { name: '堅毅', description: '身體的耐力與持久性。' },
      { name: '紀律', description: '心智的穩定與自制力。' },
      { name: '免疫力', description: '自然抵抗疾病與毒素的能力。' }
    ]
  },
  {
    code: 'STEALTH',
    name: '潛匿',
    focuses: [
      { name: '偽裝', description: '透過化妝、服裝扮演他人。' },
      { name: '迷彩', description: '利用材料遮掩人物或物件。' },
      { name: '都市潛行', description: '在城市環境中安靜移動。' },
      { name: '野外潛行', description: '在自然環境中保持隱匿。' }
    ]
  },
  {
    code: 'SURVIVAL',
    name: '求生',
    focuses: [
      { name: '動物操控', description: '理解動物行為與馴養。' },
      { name: '採集', description: '搜尋並辨識可食植物。' },
      { name: '狩獵', description: '追蹤、捕殺獵物的技術。' },
      { name: '定向', description: '導航、測向與長途跋涉。' },
      { name: '追蹤', description: '辨識與追隨生物或人類的行蹤。' }
    ]
  },
  {
    code: 'TACTICS',
    name: '戰術',
    focuses: [
      { name: '空軍', description: '戰鬥機與轟炸機戰術。' },
      { name: '陸軍', description: '步兵與機械化地面作戰。' },
      { name: '祕密行動', description: '組織小隊在敵後行動。' },
      { name: '領導', description: '指揮與鼓舞他人。' },
      { name: '海軍', description: '淺海與深海作戰戰略。' },
      { name: '技術專案', description: '管理大型科研或工程計畫。' }
    ]
  },
  {
    code: 'VEHICLES',
    name: '載具',
    focuses: [
      { name: '汽車', description: '操作民用或軍用四輪車輛。' },
      { name: '摩托車', description: '操作雙輪或三輪摩托車。' },
      { name: '重型載具', description: '操作重卡、半履帶車等。' },
      { name: '坦克', description: '操作坦克與裝甲戰鬥車輛。' },
      { name: '飛機', description: '操作民用與軍用飛行器。' },
      { name: '船艇', description: '操作船隻、潛艇與軍用艦艇。' }
    ]
  }
])

// 詳細資訊頁籤
const detailTabs = ref([
  { key: 'description', name: '描述' },
  { key: 'mechanics', name: '益處選項' }
])

// 背景資料（從外部檔案導入） - 添加錯誤處理
let backgrounds = ref([])
try {
  backgrounds.value = backgroundData || []
} catch (error) {
  console.error('Error loading background data:', error)
  backgrounds.value = []
}

// 計算屬性
const finalTruth = computed(() => {
  if (customTruth.value.trim()) {
    return customTruth.value.trim()
  }
  return selectedTruth.value
})

const isSelectionComplete = computed(() => {
  if (!selectedBackground.value || !finalTruth.value) return false
  
  // 檢查專精要求 - 分別檢查每個需求
  if (selectedBackground.value.focusRequirements.length > 0) {
    for (const requirement of selectedBackground.value.focusRequirements) {
      if (requirement.skill === 'ANY') {
        // ANY 技能需求：檢查所有非特定技能專精的數量
        const specificSkills = selectedBackground.value.focusRequirements
          .filter(req => req.skill !== 'ANY')
          .map(req => req.skill)
        
        const anySkillFocuses = selectedFocuses.value.filter(focus => 
          !specificSkills.includes(focus.skillCode)
        )
        
        if (anySkillFocuses.length < requirement.count) return false
      } else {
        // 特定技能需求
        const focusesFromSkill = selectedFocuses.value.filter(focus => 
          focus.skillCode === requirement.skill
        )
        if (focusesFromSkill.length < requirement.count) return false
      }
    }
  }
  
  // 檢查天賦要求
  const talentReq = selectedBackground.value.talentRequirement
  if (talentReq && talentReq !== '無') {
    // 如果有天賦要求但沒有選擇天賦
    if (!selectedTalent.value) return false
  }
  
  return true
})

const getButtonText = computed(() => {
  if (!selectedBackground.value) {
    return '請選擇一個背景'
  }
  
  if (selectedBackground.value.focusRequirements.length > 0) {
    const totalRequired = selectedBackground.value.focusRequirements.reduce((sum, req) => sum + req.count, 0)
    if (selectedFocuses.value.length < totalRequired) {
      return `請選擇專精 (${selectedFocuses.value.length}/${totalRequired})`
    }
  }
  
  const talentReq = selectedBackground.value.talentRequirement
  if (talentReq && talentReq !== '無') {
    if (!selectedTalent.value) {
      return '請選擇天賦'
    }
  }
  
  if (!finalTruth.value) {
    return '請選擇或輸入真理'
  }
  
  return `確認背景：${selectedBackground.value.chineseName}`
})

// 獲取需要選擇專精的技能
const skillsForFocus = computed(() => {
  if (!selectedBackground.value || !selectedBackground.value.focusRequirements.length) return []
  
  const skills = []
  const addedSkillCodes = new Set()
  
  selectedBackground.value.focusRequirements.forEach(requirement => {
    if (requirement.skill === 'ANY') {
      // 如果是 ANY，加入所有技能
      skillsData.value.forEach(skill => {
        if (!addedSkillCodes.has(skill.code)) {
          skills.push({
            ...skill,
            requirement: requirement.description
          })
          addedSkillCodes.add(skill.code)
        }
      })
    } else {
      // 特定技能
      const skill = skillsData.value.find(s => s.code === requirement.skill)
      if (skill && !addedSkillCodes.has(skill.code)) {
        skills.push({
          ...skill,
          requirement: requirement.description
        })
        addedSkillCodes.add(skill.code)
      }
    }
  })
  
  return skills
})

// 計算總共需要的專精數量
const totalRequiredFocuses = computed(() => {
  if (!selectedBackground.value || !selectedBackground.value.focusRequirements.length) return 0
  return selectedBackground.value.focusRequirements.reduce((sum, req) => sum + req.count, 0)
})

// 檢查是否已選擇足夠的專精
const isRequiredFocusesSelected = computed(() => {
  return selectedFocuses.value.length >= totalRequiredFocuses.value
})

// 獲取可選擇的天賦
const availableTalents = computed(() => {
  if (!selectedBackground.value) return []
  
  const requirement = selectedBackground.value.talentRequirement
  
  // 檢查是否為 '無' 或 null
  if (!requirement || requirement === '無') return []
  
  // 如果天賦要求是字串格式（舊格式）
  if (typeof requirement === 'string') {
    const keywordMatch = requirement.match(/〈(.+?)〉/)
    if (keywordMatch) {
      const keyword = keywordMatch[1]
      return findTalentsByKeyword(keyword)
    }
    return []
  }
  
  // 如果天賦要求是物件格式（新格式）
  if (typeof requirement === 'object' && requirement.keyword) {
    return findTalentsByKeyword(requirement.keyword)
  }
  
  return []
})

// 輔助函數：根據關鍵字尋找天賦
const findTalentsByKeyword = (keyword) => {
  const allTalents = []
  
  Object.keys(talentsDatabase).forEach(category => {
    talentsDatabase[category].forEach(talent => {
      // 檢查關鍵字是否包含在 keywords 中（支援多種格式）
      if (talent.keywords.includes(`〈${keyword}〉`) || 
          talent.keywords.includes(keyword) ||
          talent.keywords.includes(`${keyword}，`) ||
          talent.keywords.includes(`，${keyword}`) ||
          talent.keywords.split('，').includes(keyword)) {
        
        // 檢查天賦是否有原型限制（檢查是否包含任何原型關鍵字）
        const archetypeKeywords = ['技術專家', '指揮官', '騙徒', '機械工', '滲透者', '調查員', '神秘學者', '士兵']
        const hasArchetypeKeyword = archetypeKeywords.some(archetype => 
          talent.keywords.includes(`〈${archetype}〉`)
        )
        
        if (hasArchetypeKeyword) {
          // 如果天賦有原型限制，只顯示與當前選擇原型匹配的天賦
          if (props.selectedArchetype) {
            const currentArchetypeName = props.selectedArchetype.chineseName
            
            // 檢查天賦是否與當前選擇的原型匹配
            if (talent.keywords.includes(`〈${currentArchetypeName}〉`)) {
              allTalents.push({
                ...talent,
                category: category
              })
            }
          }
          // 如果沒有選擇原型，則不顯示有原型限制的天賦
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

// 取得天賦要求描述
const getTalentRequirementDescription = () => {
  if (!selectedBackground.value) return ''
  
  const requirement = selectedBackground.value.talentRequirement
  if (typeof requirement === 'string') {
    return requirement
  } else if (typeof requirement === 'object' && requirement.description) {
    return requirement.description
  }
  
  return '選擇一項符合條件的天賦'
}

// 方法
const selectBackground = (background) => {
  selectedBackground.value = background
  // 重置所有選擇
  activeDetailTab.value = 'description'
  selectedTruth.value = null
  customTruth.value = ''
  selectedFocuses.value = []
  selectedTalent.value = null
  emit('select-background', background)
}

const selectFocus = (skill, focus) => {
  const focusData = {
    ...focus,
    skillName: skill.name,
    skillCode: skill.code
  }
  
  const existingIndex = selectedFocuses.value.findIndex(f => 
    f.skillCode === focusData.skillCode && f.name === focusData.name
  )
  
  if (existingIndex >= 0) {
    // 如果已選擇，則取消選擇
    selectedFocuses.value.splice(existingIndex, 1)
  } else {
    // 檢查是否可以選擇此專精
    let canSelect = false
    
    // 找到適用的需求
    for (const requirement of selectedBackground.value.focusRequirements) {
      if (requirement.skill === skill.code) {
        // 特定技能需求
        const focusesFromSkill = selectedFocuses.value.filter(f => f.skillCode === skill.code)
        if (focusesFromSkill.length < requirement.count) {
          canSelect = true
          break
        }
      } else if (requirement.skill === 'ANY') {
        // ANY 技能需求 - 檢查除了特定技能需求外的專精數量
        const specificSkills = selectedBackground.value.focusRequirements
          .filter(req => req.skill !== 'ANY')
          .map(req => req.skill)
        
        const anySkillFocuses = selectedFocuses.value.filter(f => 
          !specificSkills.includes(f.skillCode)
        )
        
        // 如果當前技能不在特定需求中，且 ANY 需求未滿
        if (!specificSkills.includes(skill.code) && anySkillFocuses.length < requirement.count) {
          canSelect = true
          break
        }
      }
    }
    
    if (canSelect) {
      selectedFocuses.value.push(focusData)
    }
  }
}

const isFocusSelected = (skillCode, focusName) => {
  return selectedFocuses.value.some(focus => 
    focus.skillCode === skillCode && focus.name === focusName
  )
}

// 檢查是否為步驟一選擇的原型專精
const isArchetypeFocus = (skillCode, focusName) => {
  return props.archetypeFocuses.some(focus => 
    focus.skillCode === skillCode && focus.name === focusName
  )
}

// 可選：專精預覽功能
const focusPreview = ref({
  show: false,
  focus: null
})

const showFocusPreview = (event, focus) => {
  focusPreview.value.show = true
  focusPreview.value.focus = focus
}

const hideFocusPreview = () => {
  focusPreview.value.show = false
  focusPreview.value.focus = null
}

const removeFocus = (focusToRemove) => {
  const index = selectedFocuses.value.findIndex(f => 
    f.skillCode === focusToRemove.skillCode && f.name === focusToRemove.name
  )
  if (index >= 0) {
    selectedFocuses.value.splice(index, 1)
  }
}

const selectTruth = (truth) => {
  selectedTruth.value = truth
  customTruth.value = '' // 清空自訂真理
}

const handleCustomTruthInput = () => {
  if (customTruth.value.trim()) {
    selectedTruth.value = null // 清空預設選擇
  }
}

const confirmSelection = () => {
  if (isSelectionComplete.value) {
    const backgroundData = {
      background: selectedBackground.value,
      selectedTruth: finalTruth.value,
      isCustomTruth: !!customTruth.value.trim(),
      selectedFocuses: selectedFocuses.value,
      selectedTalent: selectedTalent.value
    }
    
    emit('select-background', backgroundData)
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