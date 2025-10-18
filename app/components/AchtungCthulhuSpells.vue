<template>
  <div class="character-form cthulhu-sheet bg-amber-50 text-black font-serif">
    <!-- 標題 -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold mb-2 text-red-900 tracking-widest">
        《臨戰克蘇魯—角色表》
      </h1>
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
          :value="store.spells.selectedCasterType"
          @input="store.setCasterType($event.target.value)"
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
          <div v-if="!store.spells.selectedCasterType" class="text-sm text-gray-600">
            請選擇一種施法類型以查看詳細說明
          </div>
          <div v-else-if="store.spells.selectedCasterType === 'traditional'" class="text-sm">
            <h3 class="font-bold text-red-900 mb-2">傳統型</h3>
            <p class="mb-2">傳統施法者將一生大部分時間投入於特定的魔法傳統，如符文、神諭或凱爾特等體系。這些傳統由世代相傳的教義構成，需要多年研習方能精通。</p>
            <div class="bg-yellow-50 p-2 rounded">
              <strong>✦ 傳統施法者以洞察進行施法。</strong>
            </div>
            <p class="mt-2 text-xs">傳統施法者僅能使用自己所屬傳統的法術，並可進行儀式性魔法。</p>
          </div>
          <div v-else-if="store.spells.selectedCasterType === 'research'" class="text-sm">
            <h3 class="font-bold text-red-900 mb-2">研究型</h3>
            <p class="mb-2">研究施法者透過研讀禁書、祕典與零散的古老知識片段，拼湊出對超常現象的理解。這種方法極為危險，因為這類施法者多為自學。</p>
            <div class="bg-yellow-50 p-2 rounded">
              <strong>✦ 研究施法者以智識進行施法。</strong>
            </div>
            <p class="mt-2 text-xs">研究施法者可從任何魔法傳統的法術書中學習法術，並可施展儀式性魔法。</p>
          </div>
          <div v-else-if="store.spells.selectedCasterType === 'dabbling'" class="text-sm">
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
            :class="store.spells.selectedTraditions.includes(tradition.key) 
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
          :class="!store.spells.selectedCasterType ? 'text-gray-400' : 'text-black'"
        >
          <span v-if="!store.spells.selectedCasterType">請先選擇施法類型</span>
          <span v-else-if="store.spells.selectedCasterType === 'traditional'" class="font-bold text-blue-900">洞察</span>
          <span v-else-if="store.spells.selectedCasterType === 'research'" class="font-bold text-purple-900">智識</span>
          <span v-else-if="store.spells.selectedCasterType === 'dabbling'" class="font-bold text-green-900">意志</span>
        </div>
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          威能值
        </label>
        <input 
          type="text" 
          :value="store.spells.powerValue"
          @input="store.setPowerValue($event.target.value)"
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
          placeholder="輸入威能值"
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
          :value="store.spells.basePower"
          @input="store.setBasePower($event.target.value)"
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
          placeholder="輸入基礎威能"
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
      <div class="flex items-center justify-between mb-4">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold rounded-sm inline-block">
          法術
        </label>
        <button 
          @click="openSpellModalForNewSpell"
          class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors"
        >
          + 新增法術
        </button>
      </div>
      
      <!-- 空狀態提示 -->
      <div v-if="store.spells.spellSlots.length === 0" class="text-center py-12 text-gray-500">
        <div class="text-6xl mb-4">📜</div>
        <h3 class="text-xl font-bold mb-2">尚未新增任何法術</h3>
        <p class="text-sm">點擊上方「新增法術」按鈕開始添加法術到你的法術書中</p>
      </div>

      <!-- 法術格子 - 響應式網格 -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div 
          v-for="slot in store.spells.spellSlots" 
          :key="slot.id"
          class="border-2 border-red-900 bg-white p-3 min-h-96 relative"
        >
          <!-- 法術選擇按鈕（當沒有法術時顯示） -->
          <div v-if="!slot.spell" class="absolute inset-0 flex items-center justify-center">
            <button 
              @click="openSpellModal(slot.id)"
              class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              選擇法術
            </button>
          </div>

          <!-- 法術內容（當有法術時顯示） -->
          <div v-if="slot.spell" class="relative">
            <!-- 清除按鈕 -->
            <button 
              @click="clearSpell(slot.id)"
              class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs hover:bg-red-700 z-10"
            >
              ×
            </button>

            <!-- 第一行：NAME, SKILL -->
            <div class="flex gap-2 mb-2">
              <div class="flex flex-col flex-1">
                <label class="text-xs font-bold text-red-900 mb-1">名稱:</label>
                <div class="border border-red-900 p-1 bg-gray-50 font-serif text-xs h-6 flex items-center">
                  {{ slot.spell.chineseName }}
                </div>
              </div>
              <div class="flex flex-col flex-1">
                <label class="text-xs font-bold text-red-900 mb-1">技能:</label>
                <div class="border border-red-900 p-1 bg-gray-50 font-serif text-xs h-6 flex items-center">
                  {{ slot.spell.skill }}
                </div>
              </div>
            </div>

            <!-- 第二行：DIFFICULTY, COST -->
            <div class="flex gap-2 mb-2">
              <div class="flex flex-col flex-1">
                <label class="text-xs font-bold text-red-900 mb-1">難度:</label>
                <div class="border border-red-900 p-1 bg-gray-50 font-serif text-xs h-6 flex items-center">
                  {{ slot.spell.difficulty }}
                </div>
              </div>
              <div class="flex flex-col flex-1">
                <label class="text-xs font-bold text-red-900 mb-1">代價:</label>
                <div class="border border-red-900 p-1 bg-gray-50 font-serif text-xs h-6 flex items-center">
                  {{ slot.spell.cost }}
                </div>
              </div>
            </div>

            <!-- 第三行：DURATION, CATEGORY -->
            <div class="flex gap-2 mb-2">
              <div class="flex flex-col flex-1">
                <label class="text-xs font-bold text-red-900 mb-1">持續時間:</label>
                <div class="border border-red-900 p-1 bg-gray-50 font-serif text-xs h-6 flex items-center">
                  {{ slot.spell.duration }}
                </div>
              </div>
              <div class="flex flex-col flex-1">
                <label class="text-xs font-bold text-red-900 mb-1">分類:</label>
                <div class="border border-red-900 p-1 bg-gray-50 font-serif text-xs h-6 flex items-center">
                  {{ slot.spell.category }}
                </div>
              </div>
            </div>

            <!-- 儀式特殊資訊 -->
            <div v-if="slot.spell.category === '儀式'" class="mb-2">
              <div class="flex gap-2 mb-1">
                <div class="flex flex-col flex-1">
                  <label class="text-xs font-bold text-red-900 mb-1">步驟:</label>
                  <div class="border border-red-900 p-1 bg-purple-50 font-serif text-xs h-6 flex items-center">
                    {{ slot.spell.steps }}
                  </div>
                </div>
                <div class="flex flex-col flex-1">
                  <label class="text-xs font-bold text-red-900 mb-1">壓力上限:</label>
                  <div class="border border-red-900 p-1 bg-purple-50 font-serif text-xs h-6 flex items-center">
                    {{ slot.spell.maxStress }}
                  </div>
                </div>
              </div>
              
              <!-- 需求資訊 -->
              <div class="flex flex-col mb-1">
                <label class="text-xs font-bold text-red-900 mb-1">需求:</label>
                <div class="border border-red-900 p-1 bg-purple-50 font-serif text-xs min-h-8 text-wrap">
                  {{ slot.spell.requirements }}
                </div>
              </div>
              
              <!-- 缺陷法術 -->
              <div v-if="slot.spell.flawedSpell" class="flex flex-col">
                <label class="text-xs font-bold text-red-900 mb-1">缺陷法術:</label>
                <div class="border border-red-900 p-1 bg-red-50 font-serif text-xs min-h-8 text-wrap">
                  <div v-html="formatSpellEffect(slot.spell.flawedSpell)"></div>
                </div>
              </div>
            </div>

            <!-- SPELL EFFECT 大區域 -->
            <div class="flex flex-col mb-2">
              <div class="bg-gray-200 text-center py-1 mb-1">
                <span class="text-xs font-bold text-red-900">法術效果</span>
              </div>
              <div class="border border-red-900 p-2 bg-gray-50 font-serif text-xs min-h-32">
                <div v-html="formatSpellEffect(slot.spell.effect)"></div>
              </div>
            </div>

            <!-- MOMENTUM 區域 -->
            <div class="flex flex-col">
              <div class="text-left">
                <span class="text-xs font-bold text-red-900">動力點選項</span>
              </div>
              <div class="border border-red-900 bg-gray-50 min-h-8 p-1">
                <div v-if="slot.spell.momentumOptions && slot.spell.momentumOptions.length > 0" class="text-xs">
                  <div v-for="(option, index) in slot.spell.momentumOptions" :key="index" class="mb-1">
                    <strong>{{ option.cost }}：</strong><span v-html="formatSpellEffect(option.effect)"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 傷害效果 Tooltip -->
      <div 
        v-if="showDamageTooltip && currentDamageEffect" 
        class="fixed z-50 bg-white border-2 border-red-900 rounded-lg shadow-lg p-4 w-80"
        :style="{ left: tooltipPosition.x + 'px', top: tooltipPosition.y + 'px' }"
      >
        <h3 class="font-bold text-red-900 mb-2">{{ currentDamageEffect.name }}</h3>
        <p class="text-sm text-gray-700">{{ currentDamageEffect.description }}</p>
        <div v-if="currentDamageEffect.examples" class="mt-2 text-xs text-gray-600">
          <strong>範例：</strong>{{ currentDamageEffect.examples }}
        </div>
      </div>
    </div>

    <!-- 法術選擇 Modal -->
    <div 
      v-if="showSpellModal" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closeSpellModal"
    >
      <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-6xl h-4/5 overflow-hidden flex flex-col">
        <!-- Modal Header -->
        <div class="bg-red-900 text-white px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-bold">選擇法術</h2>
          <button 
            @click="closeSpellModal"
            class="text-white hover:text-gray-200 text-2xl"
          >
            ×
          </button>
        </div>

        <!-- 成功提示 -->
        <div 
          v-if="showSuccessMessage" 
          class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mx-6 mt-4 rounded"
        >
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm font-medium">
                ✅ 成功新增法術：{{ successSpellName }}
              </p>
            </div>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6 flex-1 overflow-y-auto">
          <!-- 搜尋欄 -->
          <div class="mb-4">
            <input 
              v-model="spellSearchTerm"
              type="text" 
              placeholder="搜尋法術名稱或描述..."
              class="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-red-500"
            >
          </div>

          <!-- 頁籤切換 -->
          <div class="mb-4">
            <!-- 第一行：傳統法術書 -->
            <div class="flex border-b border-gray-300 mb-2">
              <button 
                v-for="spellbook in regularSpellbooks" 
                :key="spellbook"
                @click="activeSpellbook = spellbook"
                class="flex-1 px-4 py-2 text-sm font-medium border-b-2 transition-colors"
                :class="activeSpellbook === spellbook 
                  ? 'border-red-500 text-red-600 bg-red-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'"
              >
                {{ spellbook }}
              </button>
            </div>
            
            <!-- 第二行：儀式 -->
            <div class="flex border-b border-gray-300">
              <button 
                v-for="spellbook in ritualSpellbooks" 
                :key="spellbook"
                @click="activeSpellbook = spellbook"
                class="flex-1 px-4 py-2 text-sm font-medium border-b-2 transition-colors"
                :class="activeSpellbook === spellbook 
                  ? 'border-purple-500 text-purple-600 bg-purple-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'"
              >
                {{ spellbook }}
              </button>
            </div>
          </div>

          <!-- 法術清單 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div 
              v-for="spell in filteredSpells" 
              :key="spell.chineseName"
              class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              @click="selectSpell(spell)"
            >
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="font-bold text-red-900">{{ spell.chineseName }}</h3>
                  <p class="text-sm text-gray-600">{{ spell.englishName }}</p>
                </div>
                <div class="text-right text-xs">
                  <div class="bg-blue-100 text-blue-800 px-2 py-1 rounded">{{ spell.category }}</div>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 text-xs">
                <div><strong>技能：</strong>{{ spell.skill }}</div>
                <div><strong>難度：</strong>{{ spell.difficulty }}</div>
                <div><strong>消耗：</strong>{{ spell.cost }}</div>
                <div><strong>持續：</strong>{{ spell.duration }}</div>
              </div>

              <!-- 法術效果描述 -->
              <div v-if="spell.category === '儀式'" class="text-sm text-gray-700 mb-3">
                <div class="bg-purple-50 p-3 rounded mb-2">
                  <h5 class="font-bold text-purple-900 mb-1">儀式效果</h5>
                  <p class="text-xs">{{ spell.effect }}</p>
                </div>
                
                <!-- 儀式特殊資訊 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-purple-600 mb-2">
                  <div><strong>步驟：</strong>{{ spell.steps }}</div>
                  <div><strong>最大壓力：</strong>{{ spell.maxStress }}</div>
                  <div><strong>需求：</strong></div>
                </div>
                
                <!-- 需求詳細資訊 -->
                <div class="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                  <strong>需求：</strong>{{ spell.requirements }}
                </div>
                
                <!-- 缺陷法術 -->
                <div v-if="spell.flawedSpell" class="text-xs text-red-600 bg-red-50 p-2 rounded mt-1">
                  <strong>缺陷法術：</strong>{{ spell.flawedSpell }}
                </div>
              </div>
              
              <!-- 一般法術效果描述 -->
              <p v-else class="text-sm text-gray-700 line-clamp-3">{{ spell.effect }}</p>
            </div>

            <div v-if="filteredSpells.length === 0" class="text-center text-gray-500 py-8">
              找不到符合條件的法術
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useSpellData } from '~/composables/useSpellDataCC'
import { useCohorsCthvlhvStore } from '~/stores/cohorsCthvlhvStore'

// 使用 Pinia store
const store = useCohorsCthvlhvStore()

// 響應式數據
const showTooltip = ref(false)
const showTraditionTooltip = ref(false)
const showBasePowerTooltip = ref(false)

// 法術 Modal 相關
const showSpellModal = ref(false)
const spellSearchTerm = ref('')
const activeSpellbook = ref('符文法典')
const selectedSpellSlot = ref(null)

// 成功提示相關
const showSuccessMessage = ref(false)
const successSpellName = ref('')

// 傷害效果 Tooltip 相關
const showDamageTooltip = ref(false)
const currentDamageEffect = ref(null)
const tooltipPosition = ref({ x: 0, y: 0 })

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

// 使用法術數據庫
const { 
  getSpellbooks, 
  getSpellsBySpellbook, 
  searchSpells 
} = useSpellData()

// 獲取法術書清單
const spellbooks = getSpellbooks()

// 分離傳統法術書和儀式
const regularSpellbooks = computed(() => {
  return spellbooks.filter(book => !book.includes('儀式'))
})

const ritualSpellbooks = computed(() => {
  return spellbooks.filter(book => book.includes('儀式'))
})

// 傷害效果說明資料庫
const damageEffects = {
  '穿透': {
    name: '穿透 X',
    description: '每擲出一個效果😈，忽略 X 點抗性。'
  },
  '震懾': {
    name: '震懾',
    description: '目標暫時無法行動，令其失去防備。若效果😈數 ≥ 目標的韌性等級，則其在下個回合無法採取任何行動。'
  },
  '兇猛': {
    name: '兇猛',
    description: '攻擊特別致命。每擲出一個效果😈，額外造成 +1 壓力。'
  },
  '擊倒': {
    name: '擊倒',
    description: '目標踉蹌或倒地。若效果😈數 ≥ 目標的運動技能等級，則目標倒地。此外也破除防備狀態。'
  },
  '持續': {
    name: '持續 X',
    description: '效果具延續性。若攻擊產生至少一個效果，目標在其回合開始時擲骰 X 🎲，承受擲骰產生的壓力，持續時間為😈數的輪次。此擲骰不再觸發額外效果。若目標為物體，則效果立即生效。'
  },
  '纏縛': {
    name: '纏縛',
    description: '攻擊使目標糾纏束縛。目標無法執行除掙脫以外的行動。掙脫需進行一次（通常為體魄＋運動）技能檢定，難度等於效果😈數。'
  },
  '區域': {
    name: '區域',
    description: '每擲出一個效果😈，攻擊額外命中一名處於初始目標「近距」內的目標。次要目標承受完整效果。'
  },
  '消耗': {
    name: '消耗',
    description: '每擲出一個效果😈，目標承受 1 點疲勞。'
  },
  '強烈': {
    name: '強烈',
    description: '若攻擊造成傷勢且擲出效果😈，則額外造成一處傷勢。'
  }
}

// 計算過濾後的法術
const filteredSpells = computed(() => {
  const spellbookSpells = getSpellsBySpellbook(activeSpellbook.value)
  
  if (!spellSearchTerm.value) {
    return spellbookSpells
  }
  
  return spellbookSpells.filter(spell => 
    spell.chineseName.includes(spellSearchTerm.value) ||
    spell.englishName.toLowerCase().includes(spellSearchTerm.value.toLowerCase()) ||
    spell.description.includes(spellSearchTerm.value) ||
    spell.effect.includes(spellSearchTerm.value)
  )
})

// 切換魔法傳統選取狀態
const toggleTradition = (traditionKey) => {
  store.toggleMagicalTradition(traditionKey)
}

// 打開法術 Modal
const openSpellModal = (slotId) => {
  selectedSpellSlot.value = slotId
  showSpellModal.value = true
}

// 為新增法術按鈕打開 Modal（動態創建新槽位）
const openSpellModalForNewSpell = () => {
  // 創建新的槽位
  const newSlotId = store.spells.spellSlots.length + 1
  store.spells.spellSlots.push({
    id: newSlotId,
    spell: null
  })
  
  selectedSpellSlot.value = newSlotId
  showSpellModal.value = true
}

// 選擇法術
const selectSpell = (spell) => {
  if (selectedSpellSlot.value) {
    const slot = store.spells.spellSlots.find(s => s.id === selectedSpellSlot.value)
    if (slot) {
      slot.spell = spell
      // 顯示成功提示
      showSuccessMessage.value = true
      successSpellName.value = spell.chineseName
      
      // 3秒後自動隱藏成功提示
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 3000)
      
      // 自動創建新的空槽位供下次選擇
      const newSlotId = store.spells.spellSlots.length + 1
      store.spells.spellSlots.push({
        id: newSlotId,
        spell: null
      })
      
      // 將新槽位設為選中狀態，讓用戶可以繼續選擇
      selectedSpellSlot.value = newSlotId
    }
  }
}

// 清除法術
const clearSpell = (slotId) => {
  store.removeSpellSlot(slotId)
}

// 關閉法術 Modal
const closeSpellModal = () => {
  // 如果有選中的空槽位，將其移除
  if (selectedSpellSlot.value) {
    const slot = store.spells.spellSlots.find(s => s.id === selectedSpellSlot.value)
    if (slot && !slot.spell) {
      store.removeSpellSlot(selectedSpellSlot.value)
    }
  }
  
  showSpellModal.value = false
  selectedSpellSlot.value = null
  showSuccessMessage.value = false
}

// 格式化法術效果（處理傷害效果的 tooltip）
const formatSpellEffect = (effect) => {
  // 尋找傷害相關詞彙並添加 tooltip
  const damageTerms = [
    '穿透', '震懾', '兇猛', '擊倒', '持續', '纏縛', '區域', '消耗', '強烈'
  ]
  
  let formatted = effect
  damageTerms.forEach(term => {
    const regex = new RegExp(`(${term}[0-9]*?)`, 'g')
    formatted = formatted.replace(regex, `<span class="damage-term cursor-help text-red-600 font-bold border-b border-dotted border-red-400" onmouseenter="showDamageTooltipHandler(event, '${term}')" onmouseleave="hideDamageTooltipHandler()">$1</span>`)
  })
  
  return formatted
}

// 顯示傷害效果 tooltip
const showDamageTooltipHandler = (event, effectName) => {
  const baseName = effectName.replace(/[0-9]+/, '')
  currentDamageEffect.value = damageEffects[baseName]
  if (currentDamageEffect.value) {
    tooltipPosition.value = {
      x: event.clientX + 10,
      y: event.clientY - 10
    }
    showDamageTooltip.value = true
  }
}

// 隱藏傷害效果 tooltip
const hideDamageTooltipHandler = () => {
  showDamageTooltip.value = false
  currentDamageEffect.value = null
}

// 將這些函數暴露到全局範圍，讓 HTML 字符串中的事件處理器能夠調用
if (typeof window !== 'undefined') {
  window.showDamageTooltipHandler = showDamageTooltipHandler
  window.hideDamageTooltipHandler = hideDamageTooltipHandler
}

// 監聽數據管理事件
onMounted(() => {
  // 監聽載入法術數據事件
  window.addEventListener('loadCharacterData', (event) => {
    if (event.detail) {
      store.loadCharacterData(event.detail)
    }
  })
  
  // 監聽清除法術數據事件
  window.addEventListener('clearCharacterData', () => {
    store.clearAllData()
  })

  // 監聽獲取法術數據事件
  window.addEventListener('getSpellData', () => {
    window.characterSpellData = store.spells
  })
})

// 觸發數據變更事件
const triggerDataChange = () => {
  window.dispatchEvent(new CustomEvent('characterDataChanged'))
}

// 監聽 store 變更以觸發自動儲存
watch(() => store.$state, () => {
  console.log('CohorsCthvlhvSpells: Store 資料變更，觸發自動儲存')
  triggerDataChange()
}, { deep: true })
</script>