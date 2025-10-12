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
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          文化
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          階級
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          財富          
        </label>
        <input 
          type="text" 
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
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          背景
        </label>
        <textarea 
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          特質
        </label>
        <textarea 
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
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            壓力
          </label>
          <div class="border-2 border-red-900 p-3 bg-white">
            <div class="flex flex-col gap-1">
              <div class="flex gap-1" v-for="row in 2" :key="row">
                <div 
                  v-for="col in 15" 
                  :key="col"
                  class="w-6 h-6 border-2 border-red-900 bg-white cursor-pointer hover:bg-red-100 transition-colors"
                  :class="{ 'bg-red-900': stressBoxes[row-1] && stressBoxes[row-1][col-1] }"
                  @click="toggleStress(row, col)"
                ></div>
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
            <div class="border-2 border-red-900 bg-white h-20">
              <textarea 
                class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none"
              ></textarea>
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              命運點
            </label>
            <div class="border-2 border-red-900 bg-white h-20">
              <textarea 
                class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none"
              ></textarea>
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
            <div class="border-2 border-red-900 bg-white h-20">
              <textarea 
                class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none text-center"
              ></textarea>
            </div>
          </div>
          
          <div class="flex flex-col">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              總護甲
            </label>
            <div class="border-2 border-red-900 bg-white h-20">
              <textarea 
                class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none text-center"
              ></textarea>
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
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        屬性
      </label>
      <table class="w-full border-collapse mt-2 table-fixed">
        <thead>
          <tr>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-20"></th>
            <th 
              v-for="attribute in attributes" 
              :key="attribute.code"
              class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 relative cursor-help"
              @mouseenter="showTooltip($event, attribute)"
              @mouseleave="hideTooltip"
            >
              <div class="text-xs font-normal">{{ attribute.name }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bg-red-900 text-white font-bold text-xs p-1 border border-red-900">
              數值
            </td>
            <td 
              v-for="attribute in attributes" 
              :key="`rating-${attribute.code}`"
              class="p-0 border border-red-900 text-center bg-white"
            >
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
          </tr>
          <tr>
            <td class="bg-red-900 text-white font-bold text-xs p-1 border border-red-900">
              傷害加值
            </td>
            <td 
              v-for="attribute in attributes" 
              :key="`bonus-${attribute.code}`"
              class="p-0 border border-red-900 text-center bg-white"
            >
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
          </tr>
        </tbody>
      </table>
      
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
    <div class="flex flex-col xl:flex-row gap-6">
      <!-- 技能列表 -->
      <div class="flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          技能
        </label>
        <div class="overflow-x-auto">
          <table class="w-full mt-2 min-w-max">
            <tbody>
              <tr v-for="skill in skills" :key="skill.name">
                <td class="bg-red-900 text-white font-bold text-xs px-2 py-1 w-32 min-w-max">
                  {{ skill.name }}
                </td>
                <td class="pl-2 border-b border-red-900">
                  <input 
                    type="text" 
                    :placeholder="skill.focuses"
                    class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0"
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 語言與經驗 -->
      <div class="flex-1 xl:max-w-sm">
        <div class="mb-4">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            LANGUAGES
          </label>
          <textarea 
            class="border-2 border-red-900 p-2 w-full mt-2 bg-white font-serif resize-none h-32"
          ></textarea>
        </div>
        
        <div>
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            EXPERIENCE
          </label>
          <textarea 
            class="border-2 border-red-900 p-2 w-full mt-2 bg-white font-serif resize-none h-20"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const skills = ref([
  { name: 'ACADEMIA', focuses: 'FINANCE, HISTORY, LINGUISTICS, PHILOSOPHY, RELIGION' },
  { name: 'ATHLETICS', focuses: 'CLIMBING, LIFTING, PHYSICAL TRAINING, RUNNING, SWIMMING' },
  { name: 'CRAFTING', focuses: 'ARMORSMITHING, COOKING, TAILORING, WEAPONSMITHING' },
  { name: 'ENGINEERING', focuses: 'ARCHITECTURE, DEFENSE, DEMOLITION, INFRASTRUCTURE, SIEGE ENGINES' },
  { name: 'FIGHTING', focuses: 'ARCHERY, MELEE WEAPONS, THROWN WEAPONS, UNARMED, WAR MAGIC' },
  { name: 'MEDICINE', focuses: 'CONTAGION, FAITH HEALING, FIELD TREATMENT, PHARMACAIA, SURGERY' },
  { name: 'OBSERVATION', focuses: 'HEARING, INSTINCTS, SIGHT, SMELL AND TASTE' },
  { name: 'PERSUASION', focuses: 'CHARM, DECEPTION, INNUENDO, INTIMIDATION, INVOCATION, NEGOTIATION, RHETORIC' },
  { name: 'RESILIENCE', focuses: 'DISCIPLINE, FORTITUDE, IMMUNITY' },
  { name: 'STEALTH', focuses: 'CONCEALMENT, DISGUISE, SLEIGHT OF HAND, LOCK PICKING, SLEIGHT OF HAND, SNEAK' },
  { name: 'SURVIVAL', focuses: 'ANIMAL HANDLING, BOATING, FORAGING, HUNTING, LOGISTICAL NAVIGATION, TRACKING, WOODCRAFT' },
  { name: 'TACTICS', focuses: 'CAVALRY, INFANTRY, LEADERSHIP, NAVY, GIVEN READING, SCOUTING' }
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

const stressBoxes = ref(Array(3).fill().map(() => Array(8).fill(false)))

const tooltip = ref({
  show: false,
  attribute: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

const tooltipStyle = computed(() => ({
  left: `${tooltip.value.x}px`,
  top: `${tooltip.value.y}px`
}))

const toggleStress = (row, col) => {
  stressBoxes.value[row - 1][col - 1] = !stressBoxes.value[row - 1][col - 1]
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
</script>