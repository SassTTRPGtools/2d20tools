<template>
  <div class="character-form cthulhu-sheet bg-slate-100 text-black font-serif">
    <!-- 標題 -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold mb-2 text-slate-800 tracking-widest">
        《克蘇魯來襲—角色表》
      </h1>
      <div class="flex justify-center gap-4 mt-4">
        <button 
          @click="openCharacterCreation"
          class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-lg"
        >
          🎲 建立新角色
        </button>
        <button 
          @click="clearAllData"
          class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-lg"
        >
          🗑️ 清空資料
        </button>
      </div>
    </div>

    <!-- 第一行：基本資訊 -->
    <div class="flex flex-col md:flex-row gap-4 mb-4">
      <div class="flex flex-col flex-grow">
        <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          姓名
        </label>
        <input 
          type="text" 
          v-model="characterName"
          class="border-2 border-slate-700 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          國籍
        </label>
        <input 
          type="text" 
          v-model="culture"
          class="border-2 border-slate-700 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          階級
        </label>
        <input 
          type="text" 
          v-model="rank"
          class="border-2 border-slate-700 p-2 bg-white font-serif"
        >
      </div>
    </div>

    <!-- 第二行：職業背景 -->
    <div class="flex flex-col lg:flex-row gap-4 mb-4">
      <div class="flex flex-col flex-1">
        <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          原型
        </label>
        <textarea 
          v-model="archetype"
          class="border-2 border-slate-700 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          背景
        </label>
        <textarea 
          v-model="background"
          class="border-2 border-slate-700 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          特徵
        </label>
        <textarea 
          v-model="talent"
          class="border-2 border-slate-700 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
    </div>

    <!-- 個人真相與疤痕 -->
    <div class="mb-6">
      <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
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
            v-model="personalTruths[n - 1]"
            class="w-full border-2 border-slate-700 p-2 h-20 bg-white font-serif resize-none text-sm"
          ></textarea>
        </div>
        <!-- 第二行 -->
        <div 
          v-for="n in 5" 
          :key="n + 5"
          class="flex flex-col"
        >
          <textarea 
            v-model="personalTruths[n + 4]"
            class="w-full border-2 border-slate-700 p-2 h-20 bg-white font-serif resize-none text-sm"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 壓力、傷勢與護甲區域 -->
    <div class="flex flex-col xl:flex-row gap-6 mb-6">
      <!-- 左側：壓力、傷勢與勇氣財富 -->
      <div class="flex flex-col xl:w-1/2">
        <!-- 壓力與傷勢區域 -->
        <div class="flex flex-col lg:flex-row gap-4 mb-4">
          <!-- 壓力區域 -->
          <div class="flex-1">
            <div class="flex items-center gap-4 mb-2">
              <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold rounded-sm">
                壓力
              </label>
              <div class="flex items-center gap-2">
                <label class="text-xs font-bold text-slate-700">上限:</label>
                <input 
                  type="number" 
                  v-model.number="maxStressBoxes"
                  min="1" 
                  max="20"
                  class="border border-slate-700 px-2 py-1 text-xs w-12 text-center bg-white font-serif"
                >
                <span class="text-xs text-slate-700">/ 20</span>
              </div>
              <button 
                @click="clearStress"
                class="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
              >
                清空
              </button>
            </div>
            <div class="border-2 border-slate-700 p-3 bg-white">
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

          <!-- 傷勢區域 -->
          <div class="flex-shrink-0 w-full lg:w-48">
            <div class="flex items-center gap-2 mb-2">
              <label 
                class="bg-slate-700 text-white px-2 py-1 text-xs font-bold rounded-sm cursor-help"
                @mouseenter="showWoundTooltip"
                @mouseleave="hideWoundTooltip"
              >
                傷勢 ({{ currentWoundCount }}/3)
              </label>
              <button 
                @click="clearAllWounds"
                class="bg-slate-600 hover:bg-slate-700 text-white px-2 py-1 text-xs font-bold rounded transition-colors"
              >
                清空
              </button>
            </div>
            <div class="border-2 border-slate-700 bg-white">
              <div 
                v-for="(wound, index) in wounds.woundBoxes" 
                :key="index"
                class="border-b border-slate-700 last:border-b-0"
              >
                <div class="flex items-center">
                  <!-- 傷勢格子 -->
                  <div 
                    class="w-6 h-8 border-r-2 border-slate-700 transition-colors cursor-pointer flex items-center justify-center"
                    :class="wounds.isWounded[index] ? 'bg-slate-700' : 'bg-white hover:bg-slate-100'"
                    @click="toggleWound(index)"
                  >
                    <span v-if="wounds.isWounded[index]" class="text-white font-bold text-xs">✗</span>
                  </div>
                  <!-- 傷勢描述輸入框 -->
                  <input 
                    v-model="wounds.woundBoxes[index]"
                    :disabled="!wounds.isWounded[index]"
                    class="flex-1 px-2 py-1 text-xs bg-transparent border-0 font-serif"
                    :class="wounds.isWounded[index] ? 'text-black' : 'text-gray-400'"
                    placeholder="傷勢影響描述..."
                    @input="setWoundDescription(index, $event.target.value)"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 語言區塊 -->
        <div class="flex gap-4">
          <div class="flex flex-col flex-1">
            <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              語言
            </label>
            <div class="border-2 border-slate-700 bg-white h-20">
              <textarea 
                v-model="languages"
                class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none"
                placeholder="掌握的語言..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右側：護甲區域 -->
      <div class="flex gap-4 xl:w-1/2">
        <!-- 左側：BASE ARMOR 和 TOTAL ARMOR -->
        <div class="flex flex-col w-32 gap-4">
          <div class="flex flex-col">
            <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              勇氣
            </label>
            <div class="border-2 border-slate-700 bg-white h-12 flex items-center justify-center">
              <input 
                type="number"
                v-model.number="courage"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-slate-800"
                min="0" 
                max="99"
              >
            </div>
          </div>
          
          <div class="flex flex-col">
            <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              護甲
            </label>
            <div class="border-2 border-slate-700 bg-white h-12 flex items-center justify-center">
              <input 
                type="number"
                v-model.number="totalArmor"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-slate-800"
                min="0" 
                max="99"
              >
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
              命運點
            </label>
            <div class="border-2 border-slate-700 bg-white h-12 flex items-center justify-center">
              <input 
                type="number"
                v-model.number="fate"
                class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-slate-800"
                min="0" 
                max="99"
              >
            </div>
          </div>
        </div>
        
        <!-- 右側：INJURIES -->
        <div class="flex flex-col flex-1">
          <label class="bg-slate-700 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            創傷
          </label>
          <div class="border-2 border-slate-700 bg-white flex-1" style="min-height: 168px;">
            <textarea 
              v-model="injuries"
              class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none"
              style="min-height: 164px;"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- 屬性表格 -->
    <div class="mb-6 relative">
      <div class="border-2 border-slate-700">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="bg-slate-700 text-white p-2 text-xs font-bold text-left">屬性</th>
              <th 
                v-for="attribute in attributes" 
                :key="attribute.code"
                class="bg-slate-700 text-white p-2 text-xs font-bold border-l border-slate-700 text-center cursor-help"
                @mouseenter="showTooltip($event, attribute)"
                @mouseleave="hideTooltip"
              >
                {{ attribute.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bg-slate-700 text-white font-bold text-xs p-2 text-left">
                數值
              </td>
              <td 
                v-for="attribute in attributes" 
                :key="`rating-${attribute.code}`"
                class="p-0 border-l border-slate-700 text-center bg-white"
              >
                <input 
                  type="number"
                  :value="store.attributes[attribute.code]"
                  @input="store.setAttribute(attribute.code, $event.target.value)"
                  class="w-full p-2 text-center border-0 bg-transparent font-serif text-sm"
                  min="0" max="99"
                >
              </td>
            </tr>
            <tr>
              <td 
                class="bg-slate-700 text-white font-bold text-xs p-2 border-t border-slate-700 text-left relative cursor-help"
                @mouseenter="showBonusTooltip"
                @mouseleave="hideBonusTooltip"
              >
                額外傷害
              </td>
              <td 
                v-for="attribute in attributes" 
                :key="`bonus-${attribute.code}`"
                class="p-0 border-l border-t border-slate-700 text-center"
                :class="['BRA', 'INS', 'WIL'].includes(attribute.code) ? 'bg-white' : 'bg-gray-200'"
              >
                <input 
                  v-if="['BRA', 'INS', 'WIL'].includes(attribute.code)"
                  type="number"
                  :value="store.attributeBonuses[attribute.code]"
                  @input="store.setAttributeBonus(attribute.code, $event.target.value)"
                  class="w-full p-2 text-center border-0 bg-transparent font-serif text-sm"
                  min="0" max="5"
                >
                <span v-else class="w-full p-2 text-center text-gray-500 text-sm">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 浮動提示框 -->
      <div 
        v-if="tooltip.show"
        ref="tooltipRef"
        class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-slate-600/30 w-80 pointer-events-none"
        :style="tooltipStyle"
      >
        <div class="font-bold text-slate-300 mb-2 text-base">{{ tooltip.attribute?.name }}</div>
        <div class="text-sm leading-relaxed whitespace-pre-line mb-3">{{ tooltip.attribute?.description }}</div>
        <div class="pt-2 border-t border-slate-600">
          <div class="text-xs text-slate-300 whitespace-pre-line font-medium">{{ tooltip.attribute?.usage }}</div>
        </div>
        
        <!-- 小三角箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-slate-600/30 transform rotate-45"
          :class="tooltip.arrowClass"
          :style="tooltip.arrowStyle"
        ></div>
      </div>

      <!-- 額外傷害提示框 -->
      <div 
        v-if="bonusTooltip.show"
        ref="bonusTooltipRef"
        class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-slate-600/30 w-80 pointer-events-none"
        :style="bonusTooltipStyle"
      >
        <div class="font-bold text-slate-300 mb-2 text-base">額外挑戰骰</div>
        <div class="text-sm leading-relaxed mb-3">
          根據屬性數值獲得的額外挑戰骰數量：
        </div>
        <div class="bg-slate-700 p-3 rounded text-xs font-mono space-y-1">
          <div>8 或以下：—</div>
          <div>9：+1🎲</div>
          <div>10–11：+2🎲</div>
          <div>12–13：+3🎲</div>
          <div>14–15：+4🎲</div>
          <div>16 或以上：+5🎲</div>
        </div>
        <div class="pt-2 border-t border-slate-600 mt-3">
          <div class="text-xs text-slate-300">
            只有<span class="text-slate-300">體魄</span>、<span class="text-slate-300">洞察</span>、<span class="text-slate-300">意志</span>提供額外傷害
          </div>
        </div>
        
        <!-- 小三角箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-slate-600/30 transform rotate-45"
          :class="bonusTooltip.arrowClass"
          :style="bonusTooltip.arrowStyle"
        ></div>
      </div>

      <!-- 傷勢提示框 -->
      <div 
        v-if="woundTooltip.show"
        ref="woundTooltipRef"
        class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-slate-600/30 w-96 pointer-events-none"
        :style="woundTooltipStyle"
      >
        <div class="font-bold text-slate-300 mb-2 text-base">傷勢系統</div>
        <div class="text-sm leading-relaxed mb-3">
          每個傷勢會對角色造成以下影響：
        </div>
        <div class="bg-slate-700 p-3 rounded text-xs space-y-2">
          <div><span class="text-amber-400">🎲 糾葛範圍：</span>每個傷勢使糾葛範圍 +1</div>
          <div><span class="text-yellow-400">⚡ 暫時創傷：</span>傷勢會成為暫時創傷</div>
          <div><span class="text-blue-400">💎 真理援引：</span>主持人或玩家可援引傷勢作為真理</div>
        </div>
        <div class="mt-3 p-2 bg-green-900/30 rounded text-xs">
          <div class="text-green-400 font-bold mb-1">援引獎勵：</div>
          <div>• 獲得 1 點命運點</div>
          <div>• 立刻發生糾葛</div>
        </div>
        <div class="pt-2 border-t border-slate-600 mt-3">
          <div class="text-xs text-slate-300">
            點擊 ✗ 標記傷勢，輸入具體影響描述
          </div>
        </div>
        
        <!-- 小三角箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-slate-600/30 transform rotate-45"
          :class="woundTooltip.arrowClass"
          :style="woundTooltip.arrowStyle"
        ></div>
      </div>
    </div>

    <!-- 技能區域 -->
    <div class="flex flex-col xl:flex-row gap-6 relative">
      <!-- 技能列表 -->
      <div class="flex-1">
        <div class="border-2 border-slate-700">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="bg-slate-700 text-white p-2 text-xs font-bold text-left w-32">技能</th>
                <th class="bg-slate-700 text-white p-2 text-xs font-bold text-center border-l border-slate-700 w-20">等級</th>
                <th class="bg-slate-700 text-white p-2 text-xs font-bold text-left border-l border-slate-700">專精</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="skill in skillsData" :key="skill.code" class="border-t border-slate-700">
                <td 
                  class="bg-slate-100 text-slate-800 font-bold text-xs px-2 py-2 cursor-help"
                  @mouseenter="showSkillTooltip($event, skill)"
                  @mouseleave="hideSkillTooltip"
                >
                  {{ skill.name }}
                </td>
                <td class="border-l border-slate-700 bg-white text-center">
                  <input 
                    type="number"
                    :value="store.skills[skill.code]"
                    @input="store.setSkill(skill.code, $event.target.value)"
                    class="w-full p-2 text-center border-0 bg-transparent font-serif text-sm"
                    min="0" max="99"
                  >
                </td>
                <td class="border-l border-slate-700 bg-white px-2 py-1">
                  <!-- 專精切換按鈕 -->
                  <div class="text-xs text-slate-700">
                    <span
                      v-for="(focus, index) in skill.focuses"
                      :key="focus.name"
                      @click="toggleFocus(skill.code, focus.name)"
                      @mouseenter="showFocusTooltip($event, focus)"
                      @mouseleave="hideFocusTooltip"
                      class="cursor-pointer transition-all duration-200 hover:bg-slate-100 px-1 rounded"
                      :class="isFocusActive(skill.code, focus.name) 
                        ? 'bg-green-600 text-white font-bold' 
                        : 'text-slate-700'"
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
        class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-slate-600/30 w-80 pointer-events-none"
        :style="skillTooltipStyle"
      >
        <div class="font-bold text-slate-300 mb-2 text-base">{{ skillTooltip.skill?.name }}</div>
        <div class="text-sm leading-relaxed">{{ skillTooltip.skill?.description }}</div>
        
        <!-- 箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-slate-600/30 transform rotate-45"
          :class="skillTooltip.arrowClass"
          :style="skillTooltip.arrowStyle"
        ></div>
      </div>
      
      <!-- 專精浮動提示框 -->
      <div 
        v-if="focusTooltip.show"
        class="fixed z-50 bg-slate-800 text-white p-3 rounded-lg shadow-2xl border border-slate-600/30 w-72 pointer-events-none"
        :style="focusTooltipStyle"
      >
        <div class="font-bold text-slate-300 mb-2">{{ focusTooltip.focus?.name }}</div>
        <div class="text-sm leading-relaxed">{{ focusTooltip.focus?.description }}</div>
        
        <!-- 箭頭指示器 -->
        <div 
          class="absolute w-3 h-3 bg-slate-800 border-l border-t border-slate-600/30 transform rotate-45"
          :class="focusTooltip.arrowClass"
          :style="focusTooltip.arrowStyle"
        ></div>
      </div>
      
      <!-- 語言與經驗 -->
      <div class="flex-1 xl:max-w-sm">
        <div class="mb-4 border-2 border-slate-700">
          <div class="bg-slate-700 text-white p-2 text-xs font-bold">
            語言
          </div>
          <textarea 
            v-model="languages"
            class="w-full p-2 bg-white font-serif resize-none h-32 border-0"
          ></textarea>
        </div>
        
        <div class="border-2 border-slate-700">
          <div class="bg-slate-700 text-white p-2 text-xs font-bold flex justify-between items-center">
            <span>經驗</span>
            <button
              @click="openExperienceModal"
              class="bg-slate-600 hover:bg-slate-500 text-white px-2 py-1 text-xs rounded transition-colors"
            >
              記錄
            </button>
          </div>
          <div class="bg-white h-20 flex items-center justify-center">
            <input 
              type="number"
              v-model.number="currentExperience"
              class="w-full h-full text-center border-0 bg-transparent font-serif text-2xl font-bold text-slate-800"
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
        <div class="bg-slate-700 text-white p-4">
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
            <h4 class="text-md font-bold text-slate-800 mb-3">添加經驗點記錄</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div>
                <label class="block text-xs font-bold text-slate-800 mb-1">增減數量</label>
                <input 
                  type="number" 
                  v-model.number="newExperienceRecord.amount"
                  class="w-full p-2 border border-slate-600 rounded text-sm"
                  placeholder="如: +50 或 -20"
                >
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-800 mb-1">日期</label>
                <input 
                  type="date" 
                  v-model="newExperienceRecord.date"
                  class="w-full p-2 border border-slate-600 rounded text-sm"
                >
              </div>
              <div class="md:col-span-1">
                <label class="block text-xs font-bold text-slate-800 mb-1">說明</label>
                <input 
                  type="text" 
                  v-model="newExperienceRecord.description"
                  class="w-full p-2 border border-slate-600 rounded text-sm"
                  placeholder="經驗點變動原因"
                >
              </div>
            </div>
            <button
              @click="addExperienceRecord"
              class="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 text-sm font-bold rounded transition-colors"
            >
              添加記錄
            </button>
          </div>

          <!-- 歷史記錄列表 -->
          <div class="overflow-y-auto max-h-96">
            <h4 class="text-md font-bold text-slate-800 mb-3">歷史記錄</h4>
            
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

    <!-- 角色建立 Modal -->
    <div v-if="showCharacterCreationModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
        <!-- Modal Header -->
        <div class="bg-amber-700 text-white p-4 flex-shrink-0">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-2xl font-bold">🎲 角色建立精靈</h3>
              <p class="text-amber-100 text-sm mt-1">步驟 {{ currentCreationStep }} / 5: {{ creationStepNames[currentCreationStep - 1] }}</p>
            </div>
            <button 
              @click="closeCharacterCreation"
              class="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <!-- 進度條 -->
          <div class="mt-4">
            <div class="flex justify-between text-xs text-amber-100 mb-2">
              <span v-for="(stepName, index) in creationStepNames" :key="index" 
                    :class="index + 1 <= currentCreationStep ? 'font-bold' : ''">
                {{ stepName }}
              </span>
            </div>
            <div class="w-full bg-amber-800 rounded-full h-2">
              <div class="bg-amber-300 h-2 rounded-full transition-all duration-300" 
                   :style="{ width: (currentCreationStep / 5) * 100 + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Modal Body - 可滾動區域 -->
        <div class="flex-1 overflow-y-auto">
          <div class="p-6">
            <!-- 步驟 1: 選擇原型 -->
            <div v-if="currentCreationStep === 1">
              <CharacterCreationStep1 
                @next-step="nextCreationStep"
                @select-archetype="selectArchetype"
                :selected-archetype="characterCreationState.selectedArchetype"
              />
            </div>
            
            <!-- 步驟 2: 國籍 -->
            <div v-else-if="currentCreationStep === 2">
              <CharacterCreationStep2 
                @next-step="nextCreationStep"
                @prev-step="prevCreationStep"
                @select-nationality="selectNationality"
                :selected-nationality="characterCreationState.selectedNationality"
              />
            </div>
            
            <!-- 步驟 3: 背景 -->
            <div v-else-if="currentCreationStep === 3">
              <CharacterCreationStep3 
                @next-step="nextCreationStep"
                @prev-step="prevCreationStep"
                @select-background="selectBackground"
                :selected-background="characterCreationState.selectedBackground"
                :archetype-focuses="selectedArchetypeFocuses"
                :selected-archetype="characterCreationState.selectedArchetype"
              />
            </div>
            
            <!-- 步驟 4: 特徵 -->
            <div v-else-if="currentCreationStep === 4">
              <CharacterCreationStep4 
                @next-step="nextCreationStep"
                @prev-step="prevCreationStep"
                @select-trait="selectTrait"
                :selected-trait="characterCreationState.selectedTrait"
                :selected-archetype="characterCreationState.selectedArchetype"
              />
            </div>
            
            <!-- 步驟 5: 最終修飾 -->
            <div v-else-if="currentCreationStep === 5">
              <CharacterCreationStep5 
                @finish-creation="finishCharacterCreation"
                @prev-step="prevCreationStep"
                :character-data="getCharacterCreationData()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, provide } from 'vue'
import { useachtungCthulhuStore } from '~/stores/achtungCthulhuStore.js'
import CharacterCreationStep1 from './CharacterCreationStep1.vue'
import CharacterCreationStep2 from './CharacterCreationStep2.vue'
import CharacterCreationStep3 from './CharacterCreationStep3.vue'
import CharacterCreationStep4 from './CharacterCreationStep4.vue'
import CharacterCreationStep5 from './CharacterCreationStep5.vue'

// 使用 Pinia store
const store = useachtungCthulhuStore()

// 基本資訊的 computed 屬性
const characterName = computed({
  get: () => store.basicInfo.characterName,
  set: (value) => store.updateBasicInfo({ characterName: value })
})
const culture = computed({
  get: () => store.basicInfo.culture,
  set: (value) => store.updateBasicInfo({ culture: value })
})
const rank = computed({
  get: () => store.basicInfo.rank,
  set: (value) => store.updateBasicInfo({ rank: value })
})
const archetype = computed({
  get: () => store.basicInfo.archetype,
  set: (value) => store.updateBasicInfo({ archetype: value })
})
const background = computed({
  get: () => store.basicInfo.background,
  set: (value) => store.updateBasicInfo({ background: value })
})
const talent = computed({
  get: () => store.basicInfo.talent,
  set: (value) => store.updateBasicInfo({ talent: value })
})

// 壓力系統的 computed 屬性
const maxStressBoxes = computed({
  get: () => store.stress.maxStressBoxes,
  set: (value) => store.setMaxStressBoxes(value)
})
const stressBoxes = computed(() => store.stress.stressBoxes)

// 經驗相關的 computed 屬性
const currentExperience = computed({
  get: () => store.character.currentExperience,
  set: (value) => store.character.currentExperience = Number(value) || 0
})
const experienceRecords = computed(() => store.character.experienceRecords)

// 個人真理的 computed 屬性
const personalTruths = computed({
  get: () => store.personalTruths,
  set: (value) => store.personalTruths = [...value]
})

// 戰鬥屬性的 computed 屬性
const courage = computed({
  get: () => store.combat.courage,
  set: (value) => store.updateCombatStats({ courage: Number(value) || 0 })
})
const fate = computed({
  get: () => store.combat.fate,
  set: (value) => store.updateCombatStats({ fate: Number(value) || 0 })
})
const totalArmor = computed({
  get: () => store.combat.totalArmor,
  set: (value) => store.updateCombatStats({ totalArmor: Number(value) || 0 })
})
const injuries = computed({
  get: () => store.combat.injuries,
  set: (value) => store.updateCombatStats({ injuries: value })
})

// 語言的 computed 屬性
const languages = computed({
  get: () => store.character.languages,
  set: (value) => store.character.languages = value
})

// 傷勢系統的 computed 屬性
const wounds = computed(() => store.wounds)
const currentWoundCount = computed(() => store.getCurrentWoundCount)

const skillsData = ref([
  {
    code: 'ACADEMIA',
    name: '學識',
    description: '此技能涵蓋角色的教育背景與知識積累，以及研究不熟悉課題的能力。最常用於研究新資訊或回憶相關事實。',
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
    description: '此技能衡量角色的體能與運動能力，亦包括角色快速移動的嘗試。',
    focuses: [
      { name: '攀爬', description: '涵蓋攀登牆壁、懸崖與登山技巧。' },
      { name: '游泳', description: '涵蓋徒手游泳與使用呼吸裝置的潛水能力。' },
      { name: '奔跑', description: '涵蓋短跑爆發力與長距離耐力。' },
      { name: '運動訓練', description: '涵蓋自我與他人訓練的方法。' },
      { name: '投擲', description: '涵蓋擲物技巧，從奧運式項目到手榴彈與飛刀。' },
      { name: '舉重', description: '涵蓋搬運重物與對肌肉負荷的訓練應用。' }
    ]
  },
  {
    code: 'ENGINEERING',
    name: '工程',
    description: '此技能涵蓋角色的技術與機械專業，著重於實際應用：設計、建造與修理裝置與建築；操作設備；以及判斷如何破壞或摧毀它們。',
    focuses: [
      { name: '建築學', description: '涵蓋建築設計與結構支撐原理。' },
      { name: '戰鬥工兵', description: '涵蓋支援或阻礙軍隊行動的工程任務，如築路、壕溝、堡壘與軍事設施建造或破壞。' },
      { name: '電子學', description: '涵蓋電子設備的構造、修理與應用。二戰期間此領域尚屬新興技術，涵蓋雷達、聲納、通訊甚至早期電腦的發展。' },
      { name: '爆裂物學', description: '涵蓋對炸藥性質、用途與操作的知識，包括製造與拆解炸彈或地雷。' },
      { name: '機械工程', description: '涵蓋機械運作、維修與設計的理解，適用於各類戰鬥載具（坦克、飛機、船艦等）。' }
    ]
  },
  {
    code: 'FIGHTING',
    name: '戰鬥',
    description: '此技能衡量角色的戰鬥能力與自我防衛，融合了訓練技巧、體能與本能。用於攻擊、判斷威脅情況，並包含對武器與戰鬥風格的實用知識。',
    focuses: [
      { name: '徒手戰鬥', description: '包含以拳腳或擒拿進行的無裝備格鬥，可代表拳擊、柔道等武術訓練。' },
      { name: '近戰武器', description: '使用短兵器作戰，如匕首或刺刀。' },
      { name: '手槍', description: '使用左輪、半自動與衝鋒手槍等短槍。' },
      { name: '近距作戰', description: '使用霰彈槍、衝鋒槍等設計於近距離或狹窄空間（如戰壕、建築內）的武器。' },
      { name: '步槍', description: '使用中長距離火器，如步槍與卡賓槍。' },
      { name: '重型武器', description: '使用機槍、火焰噴射器、反坦克武器、迫擊砲或車載武裝。' },
      { name: '威脅感知', description: '對危險的警覺與反應能力，可用於避免攻擊或伏擊。' },
      { name: '異域', description: '操作稀有、實驗性或異常武器的知識與應變能力，能在不熟悉的情況下安全使用。' }
    ]
  },
  {
    code: 'MEDICINE',
    name: '醫學',
    description: '此技能代表角色診斷與治療傷病的能力，用於處理傷口、疾病症狀，並延緩死亡。',
    focuses: [
      { name: '急救', description: '為患者進行緊急處置以穩定傷勢，維持生命直到接受完整治療。' },
      { name: '傳染病學', description: '理解疾病的成因、傳播、症狀與治療方式。' },
      { name: '藥理學', description: '研究藥物的用途、副作用與療效。' },
      { name: '精神醫學', description: '研究並治療心理疾病。' },
      { name: '外科手術', description: '涉及開放性操作，如切除異物、縫合傷口或移除組織。' },
      { name: '毒理學', description: '研究毒素、毒液等異物對身體的影響，並掌握中和與排除方法。' }
    ]
  },
  {
    code: 'OBSERVATION',
    name: '觀察',
    description: '此技能衡量角色的覺察力與從環境中獲取資訊的能力。描述角色多敏銳、多快能察覺細節，並有效運用或忽略干擾。觀察與學識常有重疊，但方法不同。',
    focuses: [
      { name: '聽覺', description: '涵蓋聽覺辨識與聲音分析，如識別口音。對無線電操作員、密碼員、通訊專家尤其有用。' },
      { name: '直覺', description: '代表基於觀察的第六感或直覺反應，能提供模糊但實用的危機預感。' },
      { name: '視覺', description: '涵蓋在低能見度下觀察細節的能力，能準確辨識遠距離或細微變化。觀測員、領航員與投彈手皆適用。' },
      { name: '嗅覺與味覺', description: '以氣味或味覺辨識資訊，雖非人類強項，但對毒藥師、醫師或品酒師而言極具價值。' }
    ]
  },
  {
    code: 'PERSUASION',
    name: '說服',
    description: '此技能代表角色透過言語與肢體語言影響他人的能力，也能察覺他人是否在施展相同手段。',
    focuses: [
      { name: '魅力', description: '以天生的吸引力與氣場影響他人。' },
      { name: '暗示', description: '以間接方式傳達訊息或意圖。' },
      { name: '恐嚇', description: '透過威脅或揭露弱點使對方恐懼、遲疑或屈服。' },
      { name: '談判', description: '透過對話達成協議，可能涉及交易或報酬。' },
      { name: '修辭', description: '運用演說或辯論技巧，達成說服、激勵或傳達目的。' },
      { name: '欺瞞', description: '以手段或言語讓他人相信虛假的事實。' },
      { name: '祈招', description: '以非凡方式與超自然實體溝通的能力，為一般人所無法掌握的領域。' }
    ]
  },
  {
    code: 'RESILIENCE',
    name: '韌性',
    description: '此技能代表角色抵抗與復原於身體與心智損傷的能力，包括傷害、疼痛、疲勞與精神壓力。它還涵蓋對抗毒素與疾病的效果，以及抵禦魔法影響。角色可用韌性來避免負面效果，或在已受影響時嘗試復原。雖然醫學與韌性部分重疊，但韌性更專注於角色的內在堅韌。韌性與體魄或意志（取其高者）共同決定角色的最大壓力。',
    focuses: [
      { name: '堅毅', description: '代表身體的耐力與持久性，用以抵抗並恢復疲勞、疼痛與傷害。' },
      { name: '紀律', description: '代表心智的穩定與自制力，能抵抗混亂、恐懼或超自然精神影響。' },
      { name: '免疫力', description: '代表自然抵抗疾病與毒素的能力，並能更快恢復。' }
    ]
  },
  {
    code: 'STEALTH',
    name: '潛匿',
    description: '此技能代表角色隱藏自身、潛行不被發現、融入人群與藏匿物品的能力。',
    focuses: [
      { name: '偽裝', description: '透過化妝、服裝、道具與肢體語言扮演他人。' },
      { name: '迷彩', description: '利用自然或人工材料遮掩人物、物件或地點。' },
      { name: '都市潛行', description: '在城市環境中安靜移動並避免被察覺。' },
      { name: '野外潛行', description: '在自然環境中安靜行動並保持隱匿。' }
    ]
  },
  {
    code: 'SURVIVAL',
    name: '求生',
    description: '此技能涵蓋角色在野外生存與行動的能力，測量其在無文明庇護下獲取必需品、適應環境、導航、覓食與築庇護所的技巧。',
    focuses: [
      { name: '動物操控', description: '理解動物行為、馴養與指令控制。' },
      { name: '採集', description: '搜尋並辨識可食植物與安全食材，避免中毒。' },
      { name: '狩獵', description: '追蹤、捕殺獵物與處理野味的技術。' },
      { name: '秘學', description: '理解古代或現代的宗教儀式與祈禱，並能抵抗或破除其影響。' },
      { name: '定向', description: '導航、測向與長途跋涉的技巧。' },
      { name: '追蹤', description: '辨識與追隨生物或人類的行蹤，判斷其人數、速度與狀態等細節。' }
    ]
  },
  {
    code: 'TACTICS',
    name: '戰術',
    description: '此技能涉及角色感知與評估戰場局勢，並擬定合適的計畫。範圍涵蓋軍事戰略、部隊運作、領導與組織。',
    focuses: [
      { name: '空軍', description: '包含戰鬥機與轟炸機戰術，如纏鬥、編隊飛行與空中戰略。' },
      { name: '陸軍', description: '涵蓋步兵與機械化地面作戰的戰術與策略。' },
      { name: '祕密行動', description: '組織小隊在敵後安靜高效地行動。' },
      { name: '領導', description: '指揮與鼓舞他人，維持士氣與執行力。' },
      { name: '海軍', description: '涵蓋淺海與深海作戰戰略，從單艦交戰到艦隊規模。' },
      { name: '技術專案', description: '管理與分配大型科研、工程或學術計畫的人力與進度。' }
    ]
  },
  {
    code: 'VEHICLES',
    name: '載具',
    description: '此技能涵蓋角色操作各種交通工具的能力，從民用到軍用載具皆包含在內。',
    focuses: [
      { name: '汽車', description: '操作民用或軍用四輪車輛，包括小型卡車。' },
      { name: '摩托車', description: '操作雙輪或三輪民用與軍用摩托車。' },
      { name: '重型載具', description: '操作重卡、半履帶車等大型軍民兩用車輛。' },
      { name: '坦克', description: '操作各類坦克與裝甲戰鬥車輛。' },
      { name: '飛機', description: '操作民用與軍用飛行器，包含螺旋槳與噴射機型。' },
      { name: '船艇', description: '操作船隻、潛艇與軍用艦艇。' }
    ]
  }
])

// UI 狀態變數
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

const bonusTooltip = ref({
  show: false,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

const woundTooltip = ref({
  show: false,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 屬性資料定義
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

// 壓力格樣式函數
const getStressBoxClasses = (row, col) => {
  const boxIndex = (row - 1) * 10 + (col - 1)
  const isAvailable = boxIndex < maxStressBoxes.value
  const isChecked = stressBoxes.value[row - 1] && stressBoxes.value[row - 1][col - 1]
  
  if (!isAvailable) {
    return 'border-gray-400 bg-gray-200 cursor-not-allowed'
  }
  
  if (isChecked) {
    return 'border-slate-700 bg-slate-700 cursor-pointer hover:bg-slate-600'
  }
  
  return 'border-slate-700 bg-white cursor-pointer hover:bg-slate-100'
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

// 技能專精選擇的 computed 屬性
const selectedFocuses = computed(() => store.selectedFocuses)

// 經驗點 Modal 相關狀態
const showExperienceModal = ref(false)
const newExperienceRecord = ref({
  amount: null,
  date: new Date().toISOString().split('T')[0],
  description: ''
})

// 角色建立 Modal 相關狀態
const showCharacterCreationModal = ref(false)
const currentCreationStep = ref(1)
const creationStepNames = ref([
  '選擇原型',
  '選擇國籍', 
  '選擇背景',
  '選擇特徵',
  '最終修飾'
])

// 角色建立過程中的選擇狀態
const characterCreationState = ref({
  selectedArchetype: null,
  selectedNationality: null, 
  selectedBackground: null,
  selectedTrait: null,
  // 追蹤各步驟的詳細選擇
  archetypeSelections: null,  // 包含天賦、專精、裝備等選擇
  nationalitySelections: null, // 包含語言等選擇
  backgroundSelections: null,  // 包含專精、天賦、真理等選擇
  traitSelections: null        // 特徵相關選擇
})

// 提供角色創建狀態給子組件
provide('characterCreationState', characterCreationState)

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

const bonusTooltipStyle = computed(() => ({
  left: `${bonusTooltip.value.x}px`,
  top: `${bonusTooltip.value.y}px`
}))

const woundTooltipStyle = computed(() => ({
  left: `${woundTooltip.value.x}px`,
  top: `${woundTooltip.value.y}px`
}))

// 經驗點計算屬性
const sortedExperienceRecords = computed(() => {
  return [...experienceRecords.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

const totalGained = computed(() => store.getTotalGainedExperience)
const totalSpent = computed(() => store.getTotalSpentExperience)
const netExperience = computed(() => store.getNetExperience)

const toggleStress = (row, col) => {
  store.toggleStress(row, col)
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

const showBonusTooltip = (event) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 280
  
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
  
  bonusTooltip.value = {
    show: true,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideBonusTooltip = () => {
  bonusTooltip.value.show = false
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
  store.toggleSkillFocus(skillCode, focusName)
}

const isFocusActive = (skillCode, focusName) => {
  return store.selectedFocuses[skillCode]?.includes(focusName) || false
}

const clearStress = () => {
  store.clearStress()
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
  
  store.addExperienceRecord({
    amount: newExperienceRecord.value.amount,
    date: newExperienceRecord.value.date,
    description: newExperienceRecord.value.description
  })
  
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
    store.removeExperienceRecord(sortedIndex)
  }
}

// 傷勢相關函數
const toggleWound = (index) => {
  store.toggleWound(index)
}

const setWoundDescription = (index, description) => {
  store.setWoundDescription(index, description)
}

const clearAllWounds = () => {
  store.clearAllWounds()
}

const showWoundTooltip = (event) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 380
  const tooltipHeight = 300
  
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
  
  woundTooltip.value = {
    show: true,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideWoundTooltip = () => {
  woundTooltip.value.show = false
}

// 角色建立相關函數
const openCharacterCreation = () => {
  showCharacterCreationModal.value = true
  currentCreationStep.value = 1
  // 重置所有選擇狀態
  characterCreationState.value = {
    selectedArchetype: null,
    selectedNationality: null,
    selectedBackground: null,
    selectedTrait: null,
    archetypeSelections: null,
    nationalitySelections: null,
    backgroundSelections: null,
    traitSelections: null
  }
}

const closeCharacterCreation = () => {
  showCharacterCreationModal.value = false
  currentCreationStep.value = 1
}

const nextCreationStep = () => {
  if (currentCreationStep.value < 5) {
    currentCreationStep.value++
  }
}

const prevCreationStep = () => {
  if (currentCreationStep.value > 1) {
    currentCreationStep.value--
  }
}

// 計算原型提供的專精（供步驟3使用）
const selectedArchetypeFocuses = computed(() => {
  if (!characterCreationState.value.archetypeSelections?.selectedFocuses) return []
  
  return characterCreationState.value.archetypeSelections.selectedFocuses.map(focusName => {
    // 從原型專精選項中找到對應的專精詳細資料
    const archetype = characterCreationState.value.selectedArchetype
    if (!archetype?.focusOptions) return null
    
    for (const [skillCode, focuses] of Object.entries(archetype.focusOptions)) {
      const focus = focuses.find(f => f === focusName)
      if (focus) {
        return {
          name: focus,
          skillCode,
          skillName: getSkillName(skillCode),
          description: getFocusDescription(skillCode, focus)
        }
      }
    }
    return null
  }).filter(Boolean)
})

// 各步驟的選擇方法
const selectArchetype = (archetypeData) => {
  // archetypeData 可能是簡單的 archetype 物件或包含完整選擇的物件
  if (archetypeData.archetype) {
    // 完整的選擇物件（來自步驟1的確認）
    characterCreationState.value.selectedArchetype = archetypeData.archetype
    characterCreationState.value.archetypeSelections = {
      selectedTalent: archetypeData.selectedTalent,
      selectedFocuses: archetypeData.selectedFocuses,
      selectedBelongings: archetypeData.selectedBelongings,
      selectedAttributeChoice: archetypeData.selectedAttributeChoice,
      selectedSkillChoice: archetypeData.selectedSkillChoice
    }
  } else {
    // 簡單的 archetype 物件（初次選擇）
    characterCreationState.value.selectedArchetype = archetypeData
  }
}

const selectNationality = (nationalityData) => {
  if (nationalityData.nationality) {
    // 完整的選擇物件
    characterCreationState.value.selectedNationality = nationalityData.nationality
    characterCreationState.value.nationalitySelections = {
      selectedLanguage: nationalityData.selectedLanguage || null
    }
  } else {
    // 簡單的 nationality 物件
    characterCreationState.value.selectedNationality = nationalityData
  }
}

const selectBackground = (backgroundData) => {
  if (backgroundData.background) {
    // 完整的選擇物件
    characterCreationState.value.selectedBackground = backgroundData.background
    characterCreationState.value.backgroundSelections = {
      selectedTruth: backgroundData.selectedTruth,
      isCustomTruth: backgroundData.isCustomTruth,
      selectedFocuses: backgroundData.selectedFocuses,
      selectedTalent: backgroundData.selectedTalent
    }
  } else {
    // 簡單的 background 物件
    characterCreationState.value.selectedBackground = backgroundData
  }
}

const selectTrait = (traitData) => {
  if (traitData.trait) {
    // 完整的選擇物件
    characterCreationState.value.selectedTrait = traitData.trait
    characterCreationState.value.traitSelections = traitData.selections
  } else {
    // 簡單的 trait 物件
    characterCreationState.value.selectedTrait = traitData
  }
}

const getCharacterCreationData = () => {
  return {
    archetype: characterCreationState.value.selectedArchetype,
    nationality: characterCreationState.value.selectedNationality,
    background: characterCreationState.value.selectedBackground,
    trait: characterCreationState.value.selectedTrait,
    // 包含完整的選擇資料
    archetypeSelections: characterCreationState.value.archetypeSelections,
    nationalitySelections: characterCreationState.value.nationalitySelections,
    backgroundSelections: characterCreationState.value.backgroundSelections,
    traitSelections: characterCreationState.value.traitSelections
  }
}

const finishCharacterCreation = (finalData) => {
  // 角色創建已在第五步驟中直接應用到 store
  console.log('角色建立完成:', finalData)
  
  // 關閉角色創建模態框
  closeCharacterCreation()
  
  // 顯示成功訊息
  console.log('角色資料已成功應用到角色表')
}

const clearAllData = () => {
  if (confirm('確定要清空所有角色資料嗎？此操作無法復原。')) {
    store.clearAllData()
  }
}

// 監聽數據載入和清除事件
onMounted(() => {
  // 監聽載入數據事件
  window.addEventListener('loadCharacterData', (event) => {
    if (event.detail) {
      store.loadCharacterData(event.detail)
    }
  })
  
  // 監聽清除數據事件
  window.addEventListener('clearCharacterData', () => {
    store.clearAllData()
  })

  // 監聽獲取數據事件
  window.addEventListener('getSheetData', () => {
    window.characterSheetData = store.getFullCharacterData
  })
})

// 觸發數據變更事件
const triggerDataChange = () => {
  window.dispatchEvent(new CustomEvent('characterDataChanged'))
}

// 監聽 store 變更以觸發自動儲存
watch(() => store.$state, () => {
  console.log('CohorsCthvlhvSheet: Store 資料變更，觸發自動儲存')
  triggerDataChange()
}, { deep: true })

// 輔助方法
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

const getFocusDescription = (skillCode, focusName) => {
  const focusDescriptions = {
    'ACADEMIA': {
      '藝術': '涵蓋對藝術品、藝術流派與技巧的理解，以及其在不同文化中的影響。',
      '密碼學': '涵蓋對各種加密與解密技術的理解與應用。',
      '財務學': '涵蓋對貿易、銀行制度的知識，及金錢對政治與文化的影響。',
      '歷史學': '涵蓋對歷史事件、人物及其背後驅動力量的了解。',
      '語言學': '涵蓋對現代、古代與死語的研究，以及語言的演化。',
      '神秘學': '涵蓋對超自然現象、儀式、存在與傳統的研究。',
      '科學': '涵蓋科學方法與其主要分支（數學、物理、化學、生物學），以及其細部領域。'
    },
    'FIGHTING': {
      '徒手戰鬥': '包含以拳腳或擒拿進行的無裝備格鬥，可代表拳擊、柔道等武術訓練。',
      '近戰武器': '使用短兵器作戰，如匕首或刺刀。',
      '手槍': '使用左輪、半自動與衝鋒手槍等短槍。',
      '近距作戰': '使用霰彈槍、衝鋒槍等設計於近距離或狹窄空間的武器。',
      '步槍': '使用中長距離火器，如步槍與卡賓槍。',
      '重型武器': '使用機槍、火焰噴射器、反坦克武器等重型武裝。'
    }
  }
  
  return focusDescriptions[skillCode]?.[focusName] || `${focusName} 專精`
}
</script>