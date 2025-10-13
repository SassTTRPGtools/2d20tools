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

    <!-- 上方法術屬性欄位 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
      <div class="flex flex-col relative">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          施法類型
          <span 
            class="ml-1 cursor-help text-yellow-300"
            @mouseenter="showTooltip = true"
            @mouseleave="showTooltip = false"
          >
            ❓
          </span>
        </label>
        <select 
          v-model="selectedCasterType"
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
          <option value="">選擇施法類型</option>
          <option value="traditional">傳統型</option>
          <option value="research">研究型</option>
          <option value="dabbling">涉獵型</option>
        </select>
        
        <!-- 浮動提示視窗 -->
        <div 
          v-if="showTooltip" 
          class="absolute top-16 left-0 z-50 w-96 bg-white border-2 border-red-900 rounded-lg shadow-lg p-4"
        >
          <div v-if="!selectedCasterType" class="text-sm text-gray-600">
            請選擇一種施法類型以查看詳細說明
          </div>
          <div v-else-if="selectedCasterType === 'traditional'" class="text-sm">
            <h3 class="font-bold text-red-900 mb-2">傳統型</h3>
            <p class="mb-2">傳統施法者將一生大部分時間投入於特定的魔法傳統，如符文、神諭或凱爾特等體系。這些傳統由世代相傳的教義構成，需要多年研習方能精通。</p>
            <div class="bg-yellow-50 p-2 rounded">
              <strong>✦ 傳統施法者以洞察進行施法。</strong>
            </div>
            <p class="mt-2 text-xs">傳統施法者僅能使用自己所屬傳統的法術，並可進行儀式性魔法。</p>
          </div>
          <div v-else-if="selectedCasterType === 'research'" class="text-sm">
            <h3 class="font-bold text-red-900 mb-2">研究型</h3>
            <p class="mb-2">研究施法者透過研讀禁書、祕典與零散的古老知識片段，拼湊出對超常現象的理解。這種方法極為危險，因為這類施法者多為自學。</p>
            <div class="bg-yellow-50 p-2 rounded">
              <strong>✦ 研究施法者以智識進行施法。</strong>
            </div>
            <p class="mt-2 text-xs">研究施法者可從任何魔法傳統的法術書中學習法術，並可施展儀式性魔法。</p>
          </div>
          <div v-else-if="selectedCasterType === 'dabbling'" class="text-sm">
            <h3 class="font-bold text-red-900 mb-2">涉獵型</h3>
            <p class="mb-2">涉獵施法者對祕學或奧祕懷有強烈興趣，甚至痴迷不已；他們可能以可疑的方式取得施法能力。由於知識來源不正統，他們常操縱著不完全或錯誤的法術版本。</p>
            <div class="bg-yellow-50 p-2 rounded">
              <strong>✦ 涉獵施法者以意志進行施法。</strong>
            </div>
            <p class="mt-2 text-xs">涉獵施法者可從任意魔法傳統的法術書中學習法術，並能進行儀式性魔法。</p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col relative">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          魔法傳統
          <span 
            class="ml-1 cursor-help text-yellow-300"
            @mouseenter="showTraditionTooltip = true"
            @mouseleave="showTraditionTooltip = false"
          >
            ❓
          </span>
        </label>
        <div class="border-2 border-red-900 p-2 bg-white min-h-12 flex flex-wrap gap-2 items-center">
          <label 
            v-for="tradition in magicalTraditions" 
            :key="tradition.key"
            class="text-xs px-3 py-1 rounded-full border cursor-pointer transition-all duration-200 hover:shadow-sm"
            :class="selectedTraditions.includes(tradition.key) 
              ? 'bg-red-600 text-white border-red-600 font-medium' 
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'"
            @click="toggleTradition(tradition.key)"
          >
            {{ tradition.name }}
          </label>
        </div>
        
        <!-- 魔法傳統浮動提示視窗 -->
        <div 
          v-if="showTraditionTooltip" 
          class="absolute top-16 left-0 z-50 w-96 bg-white border-2 border-red-900 rounded-lg shadow-lg p-4"
        >
          <h3 class="font-bold text-red-900 mb-3 text-center">魔法傳統說明</h3>
          
          <!-- 符文魔法 -->
          <div class="mb-4 p-3 bg-blue-50 rounded">
            <h4 class="font-bold text-blue-900 mb-2">符文魔法</h4>
            <p class="text-sm mb-2">使用符文魔法的施法者，從源自日耳曼（北歐系）的符文符號中汲取威能。符文使符文觀者或符文編織者能聚焦魔力。</p>
            <p class="text-xs text-gray-600">這些罕見的天賦者分布於大日耳曼地區及其殖地部族之間。</p>
          </div>
          
          <!-- 神諭魔法 -->
          <div class="mb-4 p-3 bg-purple-50 rounded">
            <h4 class="font-bold text-purple-900 mb-2">神諭魔法</h4>
            <p class="text-sm mb-2">神諭魔法讓施法者能窺見未來事件、洞察隱匿真理，並解讀他人的命運。無論是羅馬的占兆官與神諭者，或是日耳曼部族的賽德女巫。</p>
            <p class="text-xs text-gray-600">此類魔法常與特定的宗教人物相聯，如密米爾與安特沃塔。</p>
          </div>
          
          <!-- 凱爾特魔法 -->
          <div class="mb-2 p-3 bg-green-50 rounded">
            <h4 class="font-bold text-green-900 mb-2">凱爾特魔法</h4>
            <p class="text-sm mb-2">凱爾特魔法植根於萬物有靈的信仰，汲取力量自自然與凱爾特神系。其修習者多出身於希伯尼亞或不列顛尼亞，亦或源自高盧與日耳曼的其他凱爾特部族。</p>
            <p class="text-xs text-gray-600">他們被稱為德魯伊、聖師或預言者。這些施法者既精於治療與防護，也能召喚自然界的毀滅之力。</p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          施法屬性
        </label>
        <div 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12 flex items-center"
          :class="!selectedCasterType ? 'text-gray-400' : 'text-black'"
        >
          <span v-if="!selectedCasterType">請先選擇施法類型</span>
          <span v-else-if="selectedCasterType === 'traditional'" class="font-bold text-blue-900">洞察</span>
          <span v-else-if="selectedCasterType === 'research'" class="font-bold text-purple-900">智識</span>
          <span v-else-if="selectedCasterType === 'dabbling'" class="font-bold text-green-900">意志</span>
        </div>
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          威能值
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
      </div>
      
      <div class="flex flex-col relative">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          基礎威能
          <span 
            class="ml-1 cursor-help text-yellow-300"
            @mouseenter="showBasePowerTooltip = true"
            @mouseleave="showBasePowerTooltip = false"
          >
            ❓
          </span>
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
        
        <!-- 基礎威能浮動提示視窗 -->
        <div 
          v-if="showBasePowerTooltip" 
          class="absolute top-16 right-0 z-50 w-96 bg-white border-2 border-red-900 rounded-lg shadow-lg p-4"
        >
          <h3 class="font-bold text-red-900 mb-3 text-center">基礎威能說明</h3>
          
          <!-- 不同施法類型的威能說明 -->
          <div class="mb-4">
            <div class="mb-3 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-2">傳統施法者</h4>
              <p class="text-sm">基礎威能 <strong>2</strong>；依其<strong>洞察</strong>獲得額外挑戰骰，因其偏重智慧與本能領悟。</p>
            </div>
            
            <div class="mb-3 p-3 bg-purple-50 rounded border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-2">研究施法者</h4>
              <p class="text-sm">基礎威能 <strong>2</strong>；依其<strong>智識</strong>獲得額外挑戰骰，因其偏重研讀與分析。</p>
            </div>
            
            <div class="mb-4 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-2">涉獵施法者</h4>
              <p class="text-sm mb-2">基礎威能 <strong>1</strong>；但每當擲出檢定骰池時，可將威能提升至 <strong>3</strong>，代價為每擲出 1 個效果😈就產生 1 點威脅。</p>
              <p class="text-sm">另依其<strong>意志</strong>獲得額外挑戰骰🎲，靠心志與自信驅動魔力。</p>
            </div>
          </div>
          
          <!-- 屬性數值對照表 -->
          <div class="bg-gray-50 p-3 rounded">
            <h4 class="font-bold text-gray-900 mb-3 text-center">屬性數值與額外挑戰骰對照表</h4>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div class="font-bold border-b border-gray-300 pb-1">屬性數值</div>
              <div class="font-bold border-b border-gray-300 pb-1">額外挑戰骰</div>
              
              <div>8 以下</div>
              <div>—</div>
              
              <div>9</div>
              <div>+1🎲</div>
              
              <div>10–11</div>
              <div>+2🎲</div>
              
              <div>12–13</div>
              <div>+3🎲</div>
              
              <div>14–15</div>
              <div>+4🎲</div>
              
              <div>16+</div>
              <div>+5🎲</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SPELLS 法術區域 -->
    <div>
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-4 rounded-sm inline-block">
        SPELLS
      </label>
      
      <!-- 法術格子 - 3x2 網格 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div 
          v-for="n in 6" 
          :key="n"
          class="border-2 border-red-900 bg-white p-3 min-h-96"
        >
          <!-- 第一行：NAME, SKILL -->
          <div class="flex gap-2 mb-2">
            <div class="flex flex-col flex-1">
              <label class="text-xs font-bold text-red-900 mb-1">NAME:</label>
              <input 
                type="text" 
                class="border border-red-900 p-1 bg-white font-serif text-xs h-6"
              >
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-xs font-bold text-red-900 mb-1">SKILL:</label>
              <input 
                type="text" 
                class="border border-red-900 p-1 bg-white font-serif text-xs h-6"
              >
            </div>
          </div>

          <!-- 第二行：DIFFICULTY, COST -->
          <div class="flex gap-2 mb-2">
            <div class="flex flex-col flex-1">
              <label class="text-xs font-bold text-red-900 mb-1">DIFFICULTY:</label>
              <input 
                type="text" 
                class="border border-red-900 p-1 bg-white font-serif text-xs h-6"
              >
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-xs font-bold text-red-900 mb-1">COST:</label>
              <input 
                type="text" 
                class="border border-red-900 p-1 bg-white font-serif text-xs h-6"
              >
            </div>
          </div>

          <!-- 第三行：DURATION, CATEGORY -->
          <div class="flex gap-2 mb-2">
            <div class="flex flex-col flex-1">
              <label class="text-xs font-bold text-red-900 mb-1">DURATION:</label>
              <input 
                type="text" 
                class="border border-red-900 p-1 bg-white font-serif text-xs h-6"
              >
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-xs font-bold text-red-900 mb-1">CATEGORY:</label>
              <input 
                type="text" 
                class="border border-red-900 p-1 bg-white font-serif text-xs h-6"
              >
            </div>
          </div>

          <!-- SPELL EFFECT 大區域 -->
          <div class="flex flex-col mb-2">
            <div class="bg-gray-200 text-center py-1 mb-1">
              <span class="text-xs font-bold text-red-900">SPELL EFFECT</span>
            </div>
            <textarea 
              class="border border-red-900 p-2 bg-white font-serif text-xs resize-none h-32"
            ></textarea>
          </div>

          <!-- MOMENTUM 區域 -->
          <div class="flex flex-col">
            <div class="text-left">
              <span class="text-xs font-bold text-red-900">MOMENTUM</span>
            </div>
            <div class="border border-red-900 bg-white h-8 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 響應式數據
const selectedCasterType = ref('')
const showTooltip = ref(false)
const showTraditionTooltip = ref(false)
const showBasePowerTooltip = ref(false)
const selectedTraditions = ref([])

// 魔法傳統資料
const magicalTraditions = [
  {
    key: 'runic',
    name: '符文',
    englishName: 'Runic Magic'
  },
  {
    key: 'oracular',
    name: '神諭',
    englishName: 'Oracular Magic'
  },
  {
    key: 'celtic',
    name: '凱爾特',
    englishName: 'Celtic Magic'
  }
]

// 切換魔法傳統選取狀態
const toggleTradition = (traditionKey) => {
  const index = selectedTraditions.value.indexOf(traditionKey)
  if (index > -1) {
    selectedTraditions.value.splice(index, 1)
  } else {
    selectedTraditions.value.push(traditionKey)
  }
}
</script>