<template>
  <div class="character-form cthulhu-sheet bg-amber-50 text-black font-serif">
    <!-- 標題 -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold mb-2 text-red-900 tracking-widest">
        COHORS CTHVLHV
      </h1>
      <div class="text-sm font-bold text-red-900 tracking-wider">
        CHARACTER RECORD SHEET
      </div>
    </div>

    <!-- 第一行：基本資訊 -->
    <div class="flex flex-col md:flex-row gap-4 mb-4">
      <div class="flex flex-col flex-grow">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          姓名
        </label>
        <input 
          type="text" 
          v-model="characterName"
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          文化
        </label>
        <input 
          type="text" 
          v-model="culture"
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          階級
        </label>
        <input 
          type="text" 
          v-model="rank"
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          財富          
        </label>
        <input 
          type="text" 
          v-model="wealth"
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
    </div>

    <!-- 第二行：職業背景 -->
    <div class="flex flex-col lg:flex-row gap-4 mb-4">
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          原型
        </label>
        <textarea 
          v-model="archetype"
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          背景
        </label>
        <textarea 
          v-model="background"
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          特質
        </label>
        <textarea 
          v-model="talent"
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
    </div>

    <!-- 個人真相與疤痕 -->
    <div class="mb-6">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        個人真理&傷疤
      </label>
      <div class="grid grid-cols-5 gap-2 mt-2">
        <!-- 第一行 -->
        <div 
          v-for="n in 5" 
          :key="n"
          class="flex flex-col"
        >
          <textarea 
            class="w-full border-2 border-red-900 p-2 h-20 bg-white font-serif resize-none text-sm"
          ></textarea>
        </div>
        <!-- 第二行 -->
        <div 
          v-for="n in 5" 
          :key="n + 5"
          class="flex flex-col"
        >
          <textarea 
            class="w-full border-2 border-red-900 p-2 h-20 bg-white font-serif resize-none text-sm"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 壓力與護甲區域 -->
    <div class="flex flex-col lg:flex-row gap-6 mb-6">
      <!-- 左側：壓力與勇氣財富 -->
      <div class="flex flex-col lg:w-1/2">
        <!-- 壓力區域 -->
        <div class="mb-4">
          <div class="flex items-center gap-4 mb-2">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold rounded-sm">
              壓力
            </label>
            <div class="flex items-center gap-2">
              <label class="text-xs font-bold text-red-900">上限:</label>
              <input 
                type="number" 
                v-model.number="maxStressBoxes"
                min="1" 
                max="20"
                class="border border-red-900 px-2 py-1 text-xs w-12 text-center bg-white font-serif"
              >
              <span class="text-xs text-red-900">/ 20</span>
            </div>
            <button 
              @click="clearStress"
              class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
            >
              清空
            </button>
          </div>
          <div class="border-2 border-red-900 p-3 bg-white">
            <div class="flex flex-col gap-1">
              <div class="flex gap-1" v-for="row in 2" :key="row">
                <div 
                  v-for="col in 10" 
                  :key="col"
                  class="w-6 h-6 border-2 transition-colors relative group"
                  :class="getStressBoxClasses(row, col)"
                  @click="toggleStress(row, col)"
                  @mouseenter="previewStress(row, col)"
                  @mouseleave="clearPreview"
                >
                  <!-- 懸停提示 -->
                  <div 
                    v-if="isHovering && (row - 1) * 10 + (col - 1) < maxStressBoxes"
                    class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                  >
                    {{ (row - 1) * 10 + col }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 勇氣與財富 -->
        <div class="flex gap-4">
          <div class="flex flex-col flex-1">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              勇氣
            </label>
            <div class="border-2 border-red-900 bg-white h-20 flex items-center justify-center">
              <input 
                type="number"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-red-900"
                min="0" 
                max="99"
              >
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              命運點
            </label>
            <div class="border-2 border-red-900 bg-white h-20 flex items-center justify-center">
              <input 
                type="number"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-red-900"
                min="0" 
                max="99"
              >
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右側：護甲區域 -->
      <div class="flex gap-4 lg:w-1/2">
        <!-- 左側：BASE ARMOR 和 TOTAL ARMOR -->
        <div class="flex flex-col w-32 gap-4">
          <div class="flex flex-col">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              基礎護甲
            </label>
            <div class="border-2 border-red-900 bg-white h-20 flex items-center justify-center">
              <input 
                type="number"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-red-900"
                min="0" 
                max="99"
              >
            </div>
          </div>
          
          <div class="flex flex-col">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              總護甲
            </label>
            <div class="border-2 border-red-900 bg-white h-20 flex items-center justify-center">
              <input 
                type="number"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-red-900"
                min="0" 
                max="99"
              >
            </div>
          </div>
        </div>
        
        <!-- 右側：INJURIES -->
        <div class="flex flex-col flex-1">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            創傷
          </label>
          <div class="border-2 border-red-900 bg-white flex-1" style="min-height: 168px;">
            <textarea 
              class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none"
              style="min-height: 164px;"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- 屬性表格 -->
    <div class="mb-6 relative">
      <div class="border-2 border-red-900">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="bg-red-900 text-white p-2 text-xs font-bold text-left">屬性</th>
              <th 
                v-for="attribute in attributes" 
                :key="attribute.code"
                class="bg-red-900 text-white p-2 text-xs font-bold border-l border-red-900 text-center cursor-help"
                @mouseenter="showTooltip($event, attribute)"
                @mouseleave="hideTooltip"
              >
                {{ attribute.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bg-red-900 text-white font-bold text-xs p-2 text-left">
                數值
              </td>
              <td 
                v-for="attribute in attributes" 
                :key="`rating-${attribute.code}`"
                class="p-0 border-l border-red-900 text-center bg-white"
              >
                <input 
                  type="number" 
                  class="w-full p-2 text-center border-0 bg-transparent font-serif text-sm"
                  min="0" max="99"
                >
              </td>
            </tr>
            <tr>
              <td class="bg-red-900 text-white font-bold text-xs p-2 border-t border-red-900 text-left">
                額外傷害
              </td>
              <td 
                v-for="attribute in attributes" 
                :key="`bonus-${attribute.code}`"
                class="p-0 border-l border-t border-red-900 text-center bg-white"
              >
                <input 
                  type="number" 
                  class="w-full p-2 text-center border-0 bg-transparent font-serif text-sm"
                  min="0" max="99"
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 浮動提示框 -->
      <div 
        v-if="tooltip.show"
        ref="tooltipRef"
        class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-80 pointer-events-none"
        :style="tooltipStyle"
      >
        <div class="font-bold text-red-400 mb-2 text-base">{{ tooltip.attribute?.name }}</div>
        <div class="text-sm leading-relaxed whitespace-pre-line mb-3">{{ tooltip.attribute?.description }}</div>
        <div class="pt-2 border-t border-slate-600">
          <div class="text-xs text-slate-300 whitespace-pre-line font-medium">{{ tooltip.attribute?.usage }}</div>
        </div>
        
        <!-- 小三角箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
          :class="tooltip.arrowClass"
          :style="tooltip.arrowStyle"
        ></div>
      </div>
    </div>

    <!-- 技能區域 -->
    <div class="flex flex-col xl:flex-row gap-6 relative">
      <!-- 技能列表 -->
      <div class="flex-1">
        <div class="border-2 border-red-900">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="bg-red-900 text-white p-2 text-xs font-bold text-left w-32">技能</th>
                <th class="bg-red-900 text-white p-2 text-xs font-bold text-center border-l border-red-900 w-20">等級</th>
                <th class="bg-red-900 text-white p-2 text-xs font-bold text-left border-l border-red-900">專精</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="skill in skillsData" :key="skill.code" class="border-t border-red-900">
                <td 
                  class="bg-amber-100 text-red-900 font-bold text-xs px-2 py-2 cursor-help"
                  @mouseenter="showSkillTooltip($event, skill)"
                  @mouseleave="hideSkillTooltip"
                >
                  {{ skill.name }}
                </td>
                <td class="border-l border-red-900 bg-white text-center">
                  <input 
                    type="number" 
                    class="w-full p-2 text-center border-0 bg-transparent font-serif text-sm"
                    min="0" max="99"
                  >
                </td>
                <td class="border-l border-red-900 bg-white px-2 py-1">
                  <!-- 專精切換按鈕 -->
                  <div class="text-xs text-red-900">
                    <span
                      v-for="(focus, index) in skill.focuses"
                      :key="focus.name"
                      @click="toggleFocus(skill.code, focus.name)"
                      @mouseenter="showFocusTooltip($event, focus)"
                      @mouseleave="hideFocusTooltip"
                      class="cursor-pointer transition-all duration-200 hover:bg-red-100 px-1 rounded"
                      :class="isFocusActive(skill.code, focus.name) 
                        ? 'bg-green-600 text-white font-bold' 
                        : 'text-red-900'"
                    >{{ focus.name }}<span v-if="index < skill.focuses.length - 1"></span></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 技能浮動提示框 -->
      <div 
        v-if="skillTooltip.show"
        class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-80 pointer-events-none"
        :style="skillTooltipStyle"
      >
        <div class="font-bold text-red-400 mb-2 text-base">{{ skillTooltip.skill?.name }}</div>
        <div class="text-sm leading-relaxed">{{ skillTooltip.skill?.description }}</div>
        
        <!-- 箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
          :class="skillTooltip.arrowClass"
          :style="skillTooltip.arrowStyle"
        ></div>
      </div>
      
      <!-- 專精浮動提示框 -->
      <div 
        v-if="focusTooltip.show"
        class="fixed z-50 bg-slate-800 text-white p-3 rounded-lg shadow-2xl border border-red-900/30 w-72 pointer-events-none"
        :style="focusTooltipStyle"
      >
        <div class="font-bold text-red-400 mb-2">{{ focusTooltip.focus?.name }}</div>
        <div class="text-sm leading-relaxed">{{ focusTooltip.focus?.description }}</div>
        
        <!-- 箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
          :class="focusTooltip.arrowClass"
          :style="focusTooltip.arrowStyle"
        ></div>
      </div>
      
      <!-- 語言與經驗 -->
      <div class="flex-1 xl:max-w-sm">
        <div class="mb-4 border-2 border-red-900">
          <div class="bg-red-900 text-white p-2 text-xs font-bold">
            語言
          </div>
          <textarea 
            class="w-full p-2 bg-white font-serif resize-none h-32 border-0"
          ></textarea>
        </div>
        
        <div class="border-2 border-red-900">
          <div class="bg-red-900 text-white p-2 text-xs font-bold flex justify-between items-center">
            <span>經驗</span>
            <button
              @click="openExperienceModal"
              class="bg-red-700 hover:bg-red-600 text-white px-2 py-1 text-xs rounded transition-colors"
            >
              記錄
            </button>
          </div>
          <div class="bg-white h-20 flex items-center justify-center">
            <input 
              type="number"
              v-model.number="currentExperience"
              class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-red-900"
              min="0" 
              max="9999"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 經驗點記錄Modal -->
    <div v-if="showExperienceModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <!-- Modal Header -->
        <div class="bg-red-900 text-white p-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">經驗點記錄</h3>
            <button 
              @click="closeExperienceModal"
              class="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="p-4">
          <!-- 添加新記錄表單 -->
          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-md font-bold text-red-900 mb-3">添加經驗點記錄</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div>
                <label class="block text-xs font-bold text-red-900 mb-1">增減數量</label>
                <input 
                  type="number" 
                  v-model.number="newExperienceRecord.amount"
                  class="w-full p-2 border border-red-900 rounded text-sm"
                  placeholder="如: +50 或 -20"
                >
              </div>
              <div>
                <label class="block text-xs font-bold text-red-900 mb-1">日期</label>
                <input 
                  type="date" 
                  v-model="newExperienceRecord.date"
                  class="w-full p-2 border border-red-900 rounded text-sm"
                >
              </div>
              <div class="md:col-span-1">
                <label class="block text-xs font-bold text-red-900 mb-1">說明</label>
                <input 
                  type="text" 
                  v-model="newExperienceRecord.description"
                  class="w-full p-2 border border-red-900 rounded text-sm"
                  placeholder="經驗點變動原因"
                >
              </div>
            </div>
            <button
              @click="addExperienceRecord"
              class="bg-red-900 hover:bg-red-800 text-white px-4 py-2 text-sm font-bold rounded transition-colors"
            >
              添加記錄
            </button>
          </div>

          <!-- 歷史記錄列表 -->
          <div class="overflow-y-auto max-h-96">
            <h4 class="text-md font-bold text-red-900 mb-3">歷史記錄</h4>
            
            <div v-if="experienceRecords.length === 0" class="text-center text-gray-500 py-8">
              暫無經驗點記錄
            </div>
            
            <div v-else class="space-y-2">
              <div 
                v-for="(record, index) in sortedExperienceRecords" 
                :key="index"
                class="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div class="flex-1">
                  <div class="flex items-center gap-4">
                    <span 
                      class="font-bold text-lg px-2 py-1 rounded"
                      :class="record.amount >= 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'"
                    >
                      {{ record.amount >= 0 ? '+' : '' }}{{ record.amount }}
                    </span>
                    <span class="text-sm text-gray-600">{{ record.date }}</span>
                    <span class="text-sm">{{ record.description }}</span>
                  </div>
                </div>
                <button
                  @click="removeExperienceRecord(index)"
                  class="text-red-600 hover:text-red-800 text-sm font-bold px-2 py-1 rounded hover:bg-red-100 transition-colors"
                >
                  刪除
                </button>
              </div>
            </div>
          </div>

          <!-- 統計資訊 -->
          <div class="mt-6 pt-4 border-t border-gray-200">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div class="bg-green-100 p-3 rounded-lg">
                <div class="text-lg font-bold text-green-600">{{ totalGained }}</div>
                <div class="text-xs text-green-800">總獲得</div>
              </div>
              <div class="bg-red-100 p-3 rounded-lg">
                <div class="text-lg font-bold text-red-600">{{ totalSpent }}</div>
                <div class="text-xs text-red-800">總花費</div>
              </div>
              <div class="bg-blue-100 p-3 rounded-lg">
                <div class="text-lg font-bold text-blue-600">{{ netExperience }}</div>
                <div class="text-xs text-blue-800">淨經驗值</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// 基本資訊變數
const characterName = ref('')
const culture = ref('')
const rank = ref('')
const wealth = ref('')
const archetype = ref('')
const background = ref('')
const talent = ref('')

// 屬性變數
const might = ref(0)
const agility = ref(0)
const reason = ref(0)
const personality = ref(0)

// 技能變數
const skills = ref({
  ACADEMIA: 0,
  ATHLETICS: 0,
  CRAFTING: 0,
  ENGINEERING: 0,
  FIGHTING: 0,
  MEDICINE: 0,
  OBSERVATION: 0,
  PERSUASION: 0,
  RESILIENCE: 0,
  STEALTH: 0,
  SURVIVAL: 0,
  TACTICS: 0
})

// 其他變數
const notes = ref('')
const sanity = ref(10)
const totalExperience = ref(0)

const skillsData = ref([
  {
    code: 'ACADEMIA',
    name: '學識',
    description: '此技能涵蓋角色的教育背景與知識積累，以及研究不熟悉課題的能力。最常用於研究新資訊或回憶相關事實。',
    focuses: [
      { name: '金融', description: '貿易與銀行的知識，以及金錢對政治與文化的影響。' },
      { name: '歷史', description: '對歷史事件、推動事件的人物與力量的知識，並理解不同歷史觀點。' },
      { name: '語言學', description: '研究語言的現用與古老形式、死語，以及語言隨時間演變的方式。除角色特質給予的語言外，還可額外掌握最多三種語言。若要以此專精施法，角色必須擁有帶有「施法者」關鍵字的天賦。' },
      { name: '哲學', description: '研究現實與真理背後的概念、觀點，以及哲學家的歷史。' },
      { name: '宗教', description: '研究眾神、其顯現，以及相關的傳統、實踐與生物。若要以此專精施法，角色必須擁有帶有「施法者」關鍵字的天賦。' }
    ]
  },
  {
    code: 'ATHLETICS',
    name: '運動',
    description: '此技能衡量角色的體能與運動能力，亦包括角色快速移動的嘗試。',
    focuses: [
      { name: '攀爬', description: '攀登峭壁、城牆與登山。' },
      { name: '舉重', description: '搬運與提升重物，並包含相關訓練方式。' },
      { name: '體能訓練', description: '訓練自己與他人的方法與技巧。' },
      { name: '跑步', description: '短距離衝刺與長距離耐力奔跑。' },
      { name: '游泳', description: '無裝備的游泳與潛水。' }
    ]
  },
  {
    code: 'CRAFTING',
    name: '製作',
    description: '此技能涵蓋角色對製造技術的熟悉度，以及研究與開發新設計的能力。',
    focuses: [
      { name: '甲冑工藝', description: '製造與修理護甲，包含鍛造與零件打造。' },
      { name: '烹飪', description: '料理製作、食材運用與保存技術。' },
      { name: '縫紉', description: '設計、製作與修改衣物，從簡單長袍到厚重防護衣，亦含皮革工藝。' },
      { name: '武器工藝', description: '製造與修理武器，包括槍矛與弓箭的木工技術，以及鍛造與打磨刀劍的金工技術。' }
    ]
  },
  {
    code: 'ENGINEERING',
    name: '工程',
    description: '此技能涵蓋角色的技術與機械專業，著重於實際應用：設計、建造與修理裝置與建築；操作設備；以及判斷如何破壞或摧毀它們。',
    focuses: [
      { name: '建築學', description: '理解建築物的設計、內外結構與重量支撐分配。' },
      { name: '防禦工事', description: '規劃與建造如瞭望塔、木柵、壕溝與路障等設施。' },
      { name: '爆破', description: '有效摧毀建築、攻城器械與防禦設施的技術。' },
      { name: '基礎建設', description: '規劃與建造道路、水道橋與橋梁等基礎工程。' },
      { name: '攻城器械', description: '規劃與建造攻城戰所需的武器與工具，如攻城塔、雲梯、投石器與弩砲。' }
    ]
  },
  {
    code: 'FIGHTING',
    name: '戰鬥',
    description: '此技能衡量角色的戰鬥能力與自我防衛，融合了訓練技巧、體能與本能。用於攻擊、判斷威脅情況，並包含對武器與戰鬥風格的實用知識。',
    focuses: [
      { name: '弓術', description: '使用與維護弓箭，以及較先進的武器如強弩。' },
      { name: '近戰武器', description: '使用短劍、斧頭、長劍或長槍等近戰武器，並維護其良好狀態。' },
      { name: '投擲武器', description: '使用標槍、投斧、鉛錘與投石索等武器。' },
      { name: '徒手', description: '徒手打擊與擒抱的各種技巧，包括泛克拉辛、拳鬥與街頭搏鬥。' },
      { name: '戰爭魔法', description: '於戰鬥中施展直接造成傷害的法術。若要使用此專精施法，角色必須擁有帶有「施法者」關鍵字的天賦。' }
    ]
  },
  {
    code: 'MEDICINE',
    name: '醫學',
    description: '此技能代表角色診斷與治療傷病的能力，用於處理傷口、疾病症狀，並延緩死亡。',
    focuses: [
      { name: '傳染病', description: '理解疾病的起因、傳播方式、症狀與治療方法。' },
      { name: '信仰治療', description: '透過儀式、祭品或祈求神祇（或超自然存在）的介入來治癒。若要使用此專精施法，角色必須擁有帶有「施法者」關鍵字的天賦。' },
      { name: '野戰處置', description: '快速止血與包紮傷口，爭取時間接受更完整治療。' },
      { name: '藥理', description: '關於天然藥物、藥劑與毒素的知識，能製造、辨識症狀並施用解方。' },
      { name: '外科手術', description: '涉及切開、取出組織或異物、截肢與縫合的醫療技術。' }
    ]
  },
  {
    code: 'OBSERVATION',
    name: '觀察',
    description: '此技能衡量角色的覺察力與從環境中獲取資訊的能力。描述角色多敏銳、多快能察覺細節，並有效運用或忽略干擾。觀察與學識常有重疊，但方法不同。',
    focuses: [
      { name: '聽覺', description: '分辨不同聲音，並從中辨識訊息，例如捕捉微弱口音。獵人與守衛尤其受益。' },
      { name: '直覺', description: '來自觀察的「第六感」或預感，通常提供模糊的感覺，而非具體訊息，經常源自經驗累積。若要使用此專精施法，角色必須擁有帶有「施法者」關鍵字的天賦。' },
      { name: '視覺', description: '提升在惡劣環境下的視力敏感度，幫助偵測遠處細節與細微變化。適合斥候與獵人。' },
      { name: '嗅覺與味覺', description: '偵測氣味與味道的能力。雖然人類不敏銳，但對毒師、醫者、試毒者與廚師十分寶貴。' }
    ]
  },
  {
    code: 'PERSUASION',
    name: '說服',
    description: '此技能代表角色透過言語與肢體語言影響他人的能力，也能察覺他人是否在施展相同手段。',
    focuses: [
      { name: '魅力', description: '以天生的吸引力與氣場影響他人。' },
      { name: '欺瞞', description: '誘導他人相信虛假的訊息。' },
      { name: '影射', description: '間接傳遞隱含意義的技巧。' },
      { name: '恐嚇', description: '以威脅或施壓來引發恐懼與猶豫。' },
      { name: '祈招', description: '以非常規或神祕方式與非自然存在溝通。通常僅限施法者可用，並需擁有帶有「施法者」關鍵字的天賦。' },
      { name: '談判', description: '透過交涉達成協議，可能涉及交易或報酬。' },
      { name: '修辭', description: '在公開演說或辯論中運用語言來說服、激勵或影響他人。' }
    ]
  },
  {
    code: 'RESILIENCE',
    name: '韌性',
    description: '此技能代表角色抵抗與復原於身體與心智損傷的能力，包括傷害、疼痛、疲勞與精神壓力。它還涵蓋對抗毒素與疾病的效果，以及抵禦魔法影響。角色可用韌性來避免負面效果，或在已受影響時嘗試復原。雖然醫學與韌性部分重疊，但韌性更專注於角色的內在堅韌。韌性與體魄或意志（取其高者）共同決定角色的最大壓力。',
    focuses: [
      { name: '紀律', description: '角色的心理韌性與自制力，抵抗並復原於混亂、恐懼與精神效果。若要以此專精施法，必須具備「施法者」關鍵字的天賦。' },
      { name: '堅毅', description: '身體的耐力與持久力，抵抗並克服疲勞、疼痛與傷害。' },
      { name: '免疫', description: '對疾病與毒素的天生抵抗力，並能更快復原。' }
    ]
  },
  {
    code: 'STEALTH',
    name: '潛匿',
    description: '此技能代表角色隱藏自身、潛行不被發現、融入人群與藏匿物品的能力。',
    focuses: [
      { name: '隱蔽', description: '隱藏自己、他人或物品以避免被發現。' },
      { name: '偽裝', description: '利用服裝、道具、演技與肢體語言假扮成他人。' },
      { name: '脫逃技巧', description: '從束縛中掙脫的能力。' },
      { name: '開鎖', description: '使用工具克服機械鎖具。' },
      { name: '手上功夫', description: '竊取他人物品或使物品消失的技巧。' },
      { name: '潛行', description: '隱密移動以避免偵測。' }
    ]
  },
  {
    code: 'SURVIVAL',
    name: '求生',
    description: '此技能涵蓋角色在野外生存與行動的能力，測量其在無文明庇護下獲取必需品、適應環境、導航、覓食與築庇護所的技巧。',
    focuses: [
      { name: '馴獸', description: '了解並訓練各類動物，掌握行為模式與控制方法。' },
      { name: '船運', description: '駕駛或操作河船與其他淡水船隻的基本技巧。' },
      { name: '覓食', description: '收集食物、辨識可食用植物與避免天然毒素。' },
      { name: '狩獵', description: '追蹤、捕殺動物，並處理獵物。' },
      { name: '神祕學', description: '於野外祈求自然之力或靈體庇護，主要用於儀式或施法。若要以此專精施法，必須具備「施法者」關鍵字的天賦。' },
      { name: '導航', description: '跨越距離時保持方向、規劃路線，並承受長途旅行的消耗。' },
      { name: '追蹤', description: '辨識並追隨動物或人類的痕跡，推斷數量、狀態、速度與方向。' },
      { name: '野外工藝', description: '利用自然材料搭建庇護與營地設施。' }
    ]
  },
  {
    code: 'TACTICS',
    name: '戰術',
    description: '此技能涉及角色感知與評估戰場局勢，並擬定合適的計畫。範圍涵蓋軍事戰略、部隊運作、領導與組織。',
    focuses: [
      { name: '騎兵戰術', description: '熟悉騎兵部隊的戰略與戰術。' },
      { name: '步兵戰術', description: '熟悉步兵部隊的戰略與戰術。' },
      { name: '領導', description: '指揮與帶領他人，發布明確命令並維持士氣。' },
      { name: '海軍戰術', description: '熟悉海上作戰的戰略與戰術，從小規模交戰至艦隊作戰。' },
      { name: '徵兆解讀', description: '從自然界徵兆占卜未來，許多行動前皆伴隨此習俗。若要以此專精施法，必須具備「施法者」關鍵字的天賦。' },
      { name: '偵察', description: '組織小隊以隱密高效地進行伏擊、偵查敵情或潛行作戰。' }
    ]
  }
])

const attributes = ref([
  {
    code: 'AGI',
    name: '敏捷',
    description: '敏捷是速度、平衡與肌肉記憶的綜合，掌管角色的移動與靈巧。敏捷的角色行動迅速，舉止精確自信。',
    usage: '用於通過困難地形、快速或安靜移動。\n用於進行近戰攻擊。'
  },
  {
    code: 'BRA',
    name: '體魄',
    description: '體魄代表角色的運動與耐力。體魄強健的角色既強壯又堅韌。有些人精瘦結實，有些則高大厚實。',
    usage: '近戰攻擊時增加額外挑戰骰。\n幫助決定角色的最大壓力。\n提供角色的護甲抗性。'
  },
  {
    code: 'COO',
    name: '協調',
    description: '協調是細緻動作、準確度與時機感的衡量。協調良好的角色射擊精準，善於騎乘，並能掌握需要巧手的任務。',
    usage: '用於進行遠程攻擊。'
  },
  {
    code: 'GRA',
    name: '威儀',
    description: '威儀反映角色的氣度、莊重與威嚴。高威儀的角色是出色的演說家與領袖，能贏得尊敬與服從。有些人以幽默親近他人，有些則展現謙遜或同理心。不論形式如何，威儀使角色更容易說服目標、激發信心或展現誠懇。',
    usage: '用於提出具說服力的論點，展現莊重與信念。'
  },
  {
    code: 'INS',
    name: '洞察',
    description: '洞察代表角色的感知、本能與理解世界的能力。具洞察的角色觀察入微、精明幹練，往往憑直覺做出判斷，即使難以解釋原因。',
    usage: '遠程攻擊時增加額外挑戰骰。\n傳統施法者在施法時使用洞察。'
  },
  {
    code: 'REA',
    name: '智識',
    description: '智識包含角色運用邏輯、知識與學習成果的能力。智識高的角色理性清晰、善於思辨，並渴望理解與學習。他們未必總是正確，但往往能從錯誤中汲取教訓。',
    usage: '研究型施法者在施法時使用智識。'
  },
  {
    code: 'WIL',
    name: '意志',
    description: '意志反映角色的自我認知、精神力量與自律。意志堅定的角色固執專注，意志高者難以被動搖，能在困境中憑藉決心前進。',
    usage: '幫助決定角色的最大壓力。\n提供角色的勇氣抗性。\n初學型施法者在施法時使用意志。'
  }
])

const stressBoxes = ref(Array(2).fill().map(() => Array(10).fill(false)))
const maxStressBoxes = ref(20) // 最大可用壓力格數量
const isHovering = ref(false)
const hoverIndex = ref(-1)

const tooltip = ref({
  show: false,
  attribute: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 壓力格樣式函數
const getStressBoxClasses = (row, col) => {
  const boxIndex = (row - 1) * 10 + (col - 1)
  const isAvailable = boxIndex < maxStressBoxes.value
  const isChecked = stressBoxes.value[row - 1] && stressBoxes.value[row - 1][col - 1]
  
  if (!isAvailable) {
    return 'border-gray-400 bg-gray-200 cursor-not-allowed'
  }
  
  if (isChecked) {
    return 'border-red-900 bg-red-900 cursor-pointer hover:bg-red-700'
  }
  
  return 'border-red-900 bg-white cursor-pointer hover:bg-red-100'
}

const skillTooltip = ref({
  show: false,
  skill: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

const focusTooltip = ref({
  show: false,
  focus: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

const selectedFocuses = ref({})

// 經驗點相關狀態
const currentExperience = ref(0)
const showExperienceModal = ref(false)
const experienceRecords = ref([])
const newExperienceRecord = ref({
  amount: null,
  date: new Date().toISOString().split('T')[0],
  description: ''
})

const tooltipStyle = computed(() => ({
  left: `${tooltip.value.x}px`,
  top: `${tooltip.value.y}px`
}))

const skillTooltipStyle = computed(() => ({
  left: `${skillTooltip.value.x}px`,
  top: `${skillTooltip.value.y}px`
}))

const focusTooltipStyle = computed(() => ({
  left: `${focusTooltip.value.x}px`,
  top: `${focusTooltip.value.y}px`
}))

// 經驗點計算屬性
const sortedExperienceRecords = computed(() => {
  return [...experienceRecords.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

const totalGained = computed(() => {
  return experienceRecords.value
    .filter(record => record.amount > 0)
    .reduce((sum, record) => sum + record.amount, 0)
})

const totalSpent = computed(() => {
  return Math.abs(experienceRecords.value
    .filter(record => record.amount < 0)
    .reduce((sum, record) => sum + record.amount, 0))
})

const netExperience = computed(() => {
  return experienceRecords.value.reduce((sum, record) => sum + record.amount, 0)
})

const toggleStress = (row, col) => {
  const clickedIndex = (row - 1) * 10 + (col - 1)
  
  // 檢查點擊的格子是否在可用範圍內
  if (clickedIndex >= maxStressBoxes.value) {
    return
  }
  
  // 計算當前已填滿的格子數
  let currentFilledCount = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const index = i * 10 + j
      if (index >= maxStressBoxes.value) break
      if (stressBoxes.value[i][j]) {
        currentFilledCount = index + 1
      } else {
        break
      }
    }
  }
  
  // 清空所有格子
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      stressBoxes.value[i][j] = false
    }
  }
  
  // 如果點擊的位置等於當前填滿的位置，則清空（取消選擇）
  if (clickedIndex + 1 === currentFilledCount) {
    return
  }
  
  // 填滿從第一格到點擊位置的所有格子
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const index = i * 10 + j
      if (index <= clickedIndex && index < maxStressBoxes.value) {
        stressBoxes.value[i][j] = true
      }
    }
  }
}

const showTooltip = (event, attribute) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 200
  
  // 計算提示框的位置，優先顯示在右側
  let x = rect.right + 15
  let y = rect.top + (rect.height / 2) - (tooltipHeight / 2)
  let isOnRight = true
  
  // 如果右側空間不夠，顯示在左側
  if (x + tooltipWidth > window.innerWidth - 20) {
    x = rect.left - tooltipWidth - 15
    isOnRight = false
  }
  
  // 確保提示框不會超出視窗上下邊界
  if (y + tooltipHeight > window.innerHeight - 20) {
    y = window.innerHeight - tooltipHeight - 20
  }
  
  if (y < 20) {
    y = 20
  }
  
  // 計算箭頭位置
  const arrowY = rect.top + (rect.height / 2) - y - 6
  
  tooltip.value = {
    show: true,
    attribute: attribute,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideTooltip = () => {
  tooltip.value.show = false
}

const showSkillTooltip = (event, skill) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 150
  
  let x = rect.right + 15
  let y = rect.top + (rect.height / 2) - (tooltipHeight / 2)
  let isOnRight = true
  
  if (x + tooltipWidth > window.innerWidth - 20) {
    x = rect.left - tooltipWidth - 15
    isOnRight = false
  }
  
  if (y + tooltipHeight > window.innerHeight - 20) {
    y = window.innerHeight - tooltipHeight - 20
  }
  
  if (y < 20) {
    y = 20
  }
  
  const arrowY = rect.top + (rect.height / 2) - y - 6
  
  skillTooltip.value = {
    show: true,
    skill: skill,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideSkillTooltip = () => {
  skillTooltip.value.show = false
}

const showFocusTooltip = (event, focus) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 288
  const tooltipHeight = 100
  
  let x = rect.left + (rect.width / 2) - (tooltipWidth / 2)
  let y = rect.bottom + 10
  
  // 確保提示框不會超出視窗邊界
  if (x + tooltipWidth > window.innerWidth - 20) {
    x = window.innerWidth - tooltipWidth - 20
  }
  if (x < 20) {
    x = 20
  }
  
  if (y + tooltipHeight > window.innerHeight - 20) {
    y = rect.top - tooltipHeight - 10
  }
  
  focusTooltip.value = {
    show: true,
    focus: focus,
    x: x,
    y: y,
    arrowClass: y < rect.top ? '-bottom-1.5' : '-top-1.5',
    arrowStyle: {
      left: `${rect.left + (rect.width / 2) - x - 6}px`,
      transform: y < rect.top ? 'rotate(135deg)' : 'rotate(-45deg)'
    }
  }
}

const hideFocusTooltip = () => {
  focusTooltip.value.show = false
}

const toggleFocus = (skillCode, focusName) => {
  if (!selectedFocuses.value[skillCode]) {
    selectedFocuses.value[skillCode] = []
  }
  
  const index = selectedFocuses.value[skillCode].indexOf(focusName)
  if (index > -1) {
    selectedFocuses.value[skillCode].splice(index, 1)
  } else {
    selectedFocuses.value[skillCode].push(focusName)
  }
}

const isFocusActive = (skillCode, focusName) => {
  return selectedFocuses.value[skillCode]?.includes(focusName) || false
}

const clearStress = () => {
  stressBoxes.value = Array(2).fill().map(() => Array(10).fill(false))
}

const previewStress = (row, col) => {
  const boxIndex = (row - 1) * 10 + (col - 1)
  if (boxIndex < maxStressBoxes.value) {
    isHovering.value = true
    hoverIndex.value = boxIndex
  }
}

const clearPreview = () => {
  isHovering.value = false
  hoverIndex.value = -1
}

// 經驗點相關函數
const openExperienceModal = () => {
  showExperienceModal.value = true
}

const closeExperienceModal = () => {
  showExperienceModal.value = false
  // 重置表單
  newExperienceRecord.value = {
    amount: null,
    date: new Date().toISOString().split('T')[0],
    description: ''
  }
}

const addExperienceRecord = () => {
  if (!newExperienceRecord.value.amount || !newExperienceRecord.value.description) {
    alert('請填寫完整的記錄資訊')
    return
  }
  
  experienceRecords.value.push({
    amount: newExperienceRecord.value.amount,
    date: newExperienceRecord.value.date,
    description: newExperienceRecord.value.description
  })
  
  // 自動更新當前經驗值
  currentExperience.value = netExperience.value
  
  // 重置表單
  newExperienceRecord.value = {
    amount: null,
    date: new Date().toISOString().split('T')[0],
    description: ''
  }
}

const removeExperienceRecord = (index) => {
  const sortedIndex = experienceRecords.value.findIndex(record => 
    record === sortedExperienceRecords.value[index]
  )
  
  if (sortedIndex !== -1) {
    experienceRecords.value.splice(sortedIndex, 1)
    // 自動更新當前經驗值
    currentExperience.value = netExperience.value
  }
}

// 監聽數據載入和清除事件
onMounted(() => {
  // 監聽載入數據事件
  window.addEventListener('loadCharacterData', (event) => {
    if (event.detail && event.detail.characterSheet) {
      loadCharacterSheetData(event.detail.characterSheet)
    }
  })
  
  // 監聽清除數據事件
  window.addEventListener('clearCharacterData', () => {
    clearCharacterSheetData()
  })

  // 監聽獲取數據事件
  window.addEventListener('getSheetData', () => {
    window.characterSheetData = getCharacterSheetData()
  })
})

// 獲取角色表單數據
const getCharacterSheetData = () => {
  return {
    // 基本信息
    name: characterName.value,
    culture: culture.value,
    rank: rank.value,
    wealth: wealth.value,
    archetype: archetype.value,
    background: background.value,
    talent: talent.value,
    
    // 屬性
    might: might.value,
    agility: agility.value,
    reason: reason.value,
    personality: personality.value,
    
    // 技能
    ...skills.value,
    
    // 經驗值
    currentExperience: currentExperience.value,
    totalExperience: totalExperience.value,
    experienceRecords: experienceRecords.value,
    
    // 其他
    notes: notes.value,
    sanity: sanity.value,
    // ... 添加其他需要保存的數據
  }
}

// 載入角色表單數據
const loadCharacterSheetData = (data) => {
  if (!data) return
  
  // 基本信息
  if (data.name !== undefined) characterName.value = data.name
  if (data.culture !== undefined) culture.value = data.culture
  if (data.rank !== undefined) rank.value = data.rank
  if (data.wealth !== undefined) wealth.value = data.wealth
  if (data.archetype !== undefined) archetype.value = data.archetype
  if (data.background !== undefined) background.value = data.background
  if (data.talent !== undefined) talent.value = data.talent
  
  // 屬性
  if (data.might !== undefined) might.value = data.might
  if (data.agility !== undefined) agility.value = data.agility
  if (data.reason !== undefined) reason.value = data.reason
  if (data.personality !== undefined) personality.value = data.personality
  
  // 技能
  Object.keys(skills.value).forEach(skill => {
    if (data[skill] !== undefined) {
      skills.value[skill] = data[skill]
    }
  })
  
  // 經驗值
  if (data.currentExperience !== undefined) currentExperience.value = data.currentExperience
  if (data.totalExperience !== undefined) totalExperience.value = data.totalExperience
  if (data.experienceRecords) experienceRecords.value = data.experienceRecords
  
  // 其他
  if (data.notes !== undefined) notes.value = data.notes
  if (data.sanity !== undefined) sanity.value = data.sanity
}

// 清除角色表單數據
const clearCharacterSheetData = () => {
  characterName.value = ''
  culture.value = ''
  rank.value = ''
  wealth.value = ''
  archetype.value = ''
  background.value = ''
  talent.value = ''
  
  might.value = 0
  agility.value = 0
  reason.value = 0
  personality.value = 0
  
  // 重置技能
  Object.keys(skills.value).forEach(skill => {
    skills.value[skill] = 0
  })
  
  currentExperience.value = 0
  totalExperience.value = 0
  experienceRecords.value = []
  
  notes.value = ''
  sanity.value = 10
}

// 觸發數據變更事件
const triggerDataChange = () => {
  window.dispatchEvent(new CustomEvent('characterDataChanged'))
}

// 監聽數據變更
watch([
  characterName, culture, rank, wealth, archetype, background, talent,
  might, agility, reason, personality, skills, currentExperience, 
  totalExperience, experienceRecords, notes, sanity
], () => {
  triggerDataChange()
}, { deep: true })
</script>