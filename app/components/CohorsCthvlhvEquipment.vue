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

    <!-- WEAPONS 武器區域 -->
    <div class="mb-6">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        武器
      </label>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse mt-2 min-w-max">
          <thead>
            <tr>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-24">名稱</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-20">專精</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-28">距離</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">傷害&效果</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-16">體積</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">特性</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-20">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(weapon, index) in weaponList" :key="`weapon-${index}`" class="h-12">
              <td class="p-1 border border-red-900 bg-white">
                <input 
                  type="text" 
                  v-model="weapon.name"
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0"
                  placeholder="武器名稱"
                >
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input 
                  type="text" 
                  v-model="weapon.focus"
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0"
                  placeholder="專精"
                >
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input 
                  type="text" 
                  v-model="weapon.reach"
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0 text-center"
                  placeholder="距離"
                >
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input 
                  type="text" 
                  v-model="weapon.damage"
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0"
                  @mouseenter="handleDamageEffectHover"
                  @mouseleave="hideQualityTooltip"
                  placeholder="傷害效果"
                >
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input 
                  type="text" 
                  v-model="weapon.size"
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0 text-center"
                  placeholder="體積"
                >
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <div class="flex flex-wrap gap-1 p-1 min-h-8">
                  <span
                    v-for="(quality, qIndex) in weapon.qualities"
                    :key="`weapon-quality-${qIndex}`"
                    class="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full border border-blue-300 cursor-help"
                    @mouseenter="(e) => showQualityTooltip(e, quality, 'weapon')"
                    @mouseleave="hideQualityTooltip"
                  >
                    {{ quality }}
                  </span>
                  <span v-if="weapon.qualities.length === 0" class="text-gray-400 text-xs italic">
                    無特性
                  </span>
                </div>
              </td>
              <td class="p-1 border border-red-900 bg-white text-center">
                <div class="flex flex-col gap-1">
                  <button
                    @click="openWeaponModal(index)"
                    class="text-blue-600 hover:text-blue-800 text-xs font-bold"
                    type="button"
                  >
                    選擇
                  </button>
                  <button
                    @click="clearWeapon(index)"
                    class="text-red-600 hover:text-red-800 text-xs font-bold"
                    type="button"
                  >
                    清空
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ARMOR & BELONGINGS 區域 -->
    <div class="flex flex-col lg:flex-row gap-6 mb-6">
      <!-- ARMOR 護甲區域 -->
      <div class="lg:w-1/2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          護甲
        </label>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse mt-2 min-w-max">
            <thead>
              <tr>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-24">名稱</th>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-20">抗性</th>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">特性</th>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-20">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(armor, index) in armorList" :key="`armor-${index}`" class="h-12">
                <td class="p-1 border border-red-900 bg-white">
                  <input 
                    type="text" 
                    v-model="armor.name"
                    class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0"
                    placeholder="護甲名稱"
                  >
                </td>
                <td class="p-1 border border-red-900 bg-white">
                  <input 
                    type="text" 
                    v-model="armor.resistance"
                    class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0 text-center"
                    placeholder="+1"
                  >
                </td>
                <td class="p-1 border border-red-900 bg-white">
                  <div class="flex flex-wrap gap-1 p-1 min-h-8">
                    <span
                      v-for="(quality, qIndex) in armor.qualities"
                      :key="`quality-${qIndex}`"
                      class="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full border border-red-300 cursor-help"
                      @mouseenter="(e) => showQualityTooltip(e, quality, 'armor')"
                      @mouseleave="hideQualityTooltip"
                    >
                      {{ quality }}
                    </span>
                    <span v-if="armor.qualities.length === 0" class="text-gray-400 text-xs italic">
                      無特性
                    </span>
                  </div>
                </td>
                <td class="p-1 border border-red-900 bg-white text-center">
                  <div class="flex flex-col gap-1">
                    <button
                      @click="openArmorModal(index)"
                      class="text-blue-600 hover:text-blue-800 text-xs font-bold"
                      type="button"
                    >
                      選擇
                    </button>
                    <button
                      @click="clearArmor(index)"
                      class="text-red-600 hover:text-red-800 text-xs font-bold"
                      type="button"
                    >
                      清空
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BELONGINGS 物品區域 -->
      <div class="lg:w-1/2">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-3">
            <label 
              class="bg-red-900 text-white px-2 py-1 text-xs font-bold rounded-sm inline-block cursor-help"
              @mouseenter="showItemLimitTooltip"
              @mouseleave="hideItemLimitTooltip"
            >
              物品
            </label>
            <!-- 超載提示 -->
            <div 
              v-if="isOverloaded"
              class="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-sm cursor-help animate-pulse"
              @mouseenter="showOverloadTooltip"
              @mouseleave="hideOverloadTooltip"
            >
              超載
            </div>
          </div>
          <div class="flex gap-4 text-xs">
            <div class="flex items-center gap-2">
              <span class="text-red-900 font-bold">主要物品:</span>
              <span 
                class="px-2 py-1 border border-red-900 text-center text-xs bg-white font-serif min-w-8"
                :class="calculatedMajorItems > maxMajorItems ? 'bg-red-100 text-red-700 font-bold' : ''"
              >
                {{ calculatedMajorItems }}
              </span>
              <span class="text-red-900">/</span>
              <input 
                type="number" 
                v-model.number="maxMajorItems"
                min="0" 
                max="99"
                class="w-12 p-1 border border-red-900 text-center text-xs bg-white font-serif"
              >
            </div>
            <div class="flex items-center gap-2">
              <span class="text-red-900 font-bold">次要物品:</span>
              <span 
                class="px-2 py-1 border border-red-900 text-center text-xs bg-white font-serif min-w-8"
                :class="calculatedMinorItems > maxMinorItems ? 'bg-red-100 text-red-700 font-bold' : ''"
              >
                {{ calculatedMinorItems }}
              </span>
              <span class="text-red-900">/</span>
              <input 
                type="number" 
                v-model.number="maxMinorItems"
                min="0" 
                max="99"
                class="w-12 p-1 border border-red-900 text-center text-xs bg-white font-serif"
              >
              <button
                @click="openItemModal"
                class="ml-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 text-xs font-bold rounded transition-colors"
              >
                新增物品
              </button>
            </div>
          </div>
        </div>
        <div class="border-2 border-red-900 bg-white p-2" style="min-height: 180px;">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(item, index) in itemList"
              :key="`item-${index}`"
              class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full border border-gray-300 cursor-help group relative"
              @mouseenter="(e) => showItemTooltip(e, item)"
              @mouseleave="hideItemTooltip"
            >
              {{ item.name }}
              <button
                @click="removeItem(index)"
                @mouseenter.stop="hideItemTooltip"
                class="ml-1 text-red-600 hover:text-red-800 font-bold hover:bg-red-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </span>
            <span v-if="itemList.length === 0" class="text-gray-400 text-sm italic flex items-center justify-center w-full" style="min-height: 160px;">
              點擊「新增物品」來添加物品到清單中
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- TALENTS 天賦區域 -->
    <div class="mb-6">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        TALENTS
      </label>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse mt-2 min-w-max">
          <thead>
            <tr>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">NAME</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">KEYWORDS</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-96">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 8" :key="`talent-${n}`" class="h-12">
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <textarea 
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs resize-none h-10 min-w-0"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 特性浮動提示框 -->
    <div 
      v-if="tooltip.show"
      class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-80 pointer-events-none"
      :style="tooltipStyle"
    >
      <div class="font-bold text-red-400 mb-2 text-base">{{ tooltip.quality?.name }}</div>
      <div class="text-sm leading-relaxed">{{ tooltip.quality?.description }}</div>
      
      <!-- 箭頭指示器 -->
      <div 
        class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
        :class="tooltip.arrowClass"
        :style="tooltip.arrowStyle"
      ></div>
    </div>

    <!-- 武器選擇Modal -->
    <div 
      v-if="showWeaponModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeWeaponModal"
    >
      <div 
        class="bg-white rounded-lg shadow-2xl max-w-6xl w-full mx-4 max-h-96 overflow-hidden"
        @click.stop
      >
        <div class="bg-red-900 text-white p-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">選擇武器</h3>
            <button 
              @click="closeWeaponModal"
              class="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
        
        <div class="p-4">
          <div class="overflow-y-auto max-h-64">
            <table class="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th class="bg-gray-100 p-2 font-bold text-left border">名稱</th>
                  <th class="bg-gray-100 p-2 font-bold text-center border">專精</th>
                  <th class="bg-gray-100 p-2 font-bold text-center border">距離</th>
                  <th class="bg-gray-100 p-2 font-bold text-center border">傷害</th>
                  <th class="bg-gray-100 p-2 font-bold text-center border">體積</th>
                  <th class="bg-gray-100 p-2 font-bold text-left border">特性</th>
                  <th class="bg-gray-100 p-2 font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="weapon in defaultWeapons" :key="weapon.name" class="hover:bg-gray-50">
                  <td class="p-2 border">{{ weapon.name }}</td>
                  <td class="p-2 border text-center">{{ weapon.focus }}</td>
                  <td class="p-2 border text-center">{{ weapon.reach }}</td>
                  <td class="p-2 border text-center font-mono">{{ weapon.damage }}</td>
                  <td class="p-2 border text-center">{{ weapon.size }}</td>
                  <td class="p-2 border">
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="quality in weapon.qualities"
                        :key="quality"
                        class="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full border border-blue-300 cursor-help"
                        @mouseenter="(e) => showQualityTooltip(e, quality, 'weapon')"
                        @mouseleave="hideQualityTooltip"
                      >
                        {{ quality }}
                      </span>
                      <span v-if="weapon.qualities.length === 0" class="text-gray-400 text-xs italic">
                        無特性
                      </span>
                    </div>
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      @click="selectWeapon(weapon)"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      選擇
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="bg-gray-100 p-4 text-right">
          <button
            @click="closeWeaponModal"
            class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded mr-2 transition-colors"
          >
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 護甲選擇Modal -->
    <div 
      v-if="showArmorModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeArmorModal"
    >
      <div 
        class="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-96 overflow-hidden"
        @click.stop
      >
        <div class="bg-red-900 text-white p-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">選擇護甲</h3>
            <button 
              @click="closeArmorModal"
              class="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
        
        <div class="p-4">
          <div class="overflow-y-auto max-h-64">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">名稱</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">護甲抗性</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">護甲特性</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="armor in defaultArmors" :key="armor.name" class="hover:bg-gray-50">
                  <td class="p-2 border text-sm">{{ armor.name }}</td>
                  <td class="p-2 border text-sm text-center font-bold">{{ armor.resistance }}</td>
                  <td class="p-2 border">
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="quality in armor.qualities"
                        :key="quality"
                        class="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full border border-red-300 cursor-help"
                        @mouseenter="(e) => showQualityTooltip(e, quality, 'armor')"
                        @mouseleave="hideQualityTooltip"
                      >
                        {{ quality }}
                      </span>
                      <span v-if="armor.qualities.length === 0" class="text-gray-400 text-xs italic">
                        無特性
                      </span>
                    </div>
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      @click="selectArmor(armor)"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      選擇
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="bg-gray-100 p-4 text-right">
          <button
            @click="closeArmorModal"
            class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded mr-2 transition-colors"
          >
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 物品限制浮動提示框 -->
    <div 
      v-if="itemLimitTooltip.show"
      class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-80 pointer-events-none"
      :style="itemLimitTooltipStyle"
    >
      <div class="font-bold text-red-400 mb-2 text-base">物品攜帶限制</div>
      <div class="text-sm leading-relaxed mb-3">
        <div class="mb-2">
          <span class="text-yellow-300 font-semibold">預設限制：</span><br>
          主要物品：2 件<br>
          次要物品：3 件
        </div>
        <div class="mb-2">
          <span class="text-yellow-300 font-semibold">體魄加成：</span>
        </div>
        <div class="text-xs space-y-1 ml-2">
          <div><span class="text-green-400">體魄 9：</span>+1 次要物品</div>
          <div><span class="text-green-400">體魄 10-11：</span>+2 次要物品</div>
          <div><span class="text-green-400">體魄 12 以上：</span>+1 主要物品 或 +3 次要物品</div>
        </div>
      </div>
      
      <!-- 小三角箭頭指示器 -->
      <div 
        class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
        :class="itemLimitTooltip.arrowClass"
        :style="itemLimitTooltip.arrowStyle"
      ></div>
    </div>

    <!-- 超載提示浮動框 -->
    <div 
      v-if="overloadTooltip.show"
      class="fixed z-50 bg-red-800 text-white p-4 rounded-lg shadow-2xl border border-red-600/50 w-80 pointer-events-none"
      :style="overloadTooltipStyle"
    >
      <div class="font-bold text-yellow-300 mb-2 text-base">超載狀態</div>
      <div class="text-sm leading-relaxed">
        <div class="mb-3">
          「超載」真理使與移動、耐力或力量相關的技能檢定難度提高 <span class="text-yellow-300 font-bold">+1</span>。
        </div>
        <div class="mb-3">
          此外，當角色處於此狀態時，可能無法奔跑或進行衝刺主動作，具體由遊戲主持人決定。
        </div>
        <div class="text-yellow-200 text-xs">
          若負重過度，遊戲主持人可追加進一步懲罰，或令角色承受若干點疲勞。
        </div>
      </div>
      
      <!-- 小三角箭頭指示器 -->
      <div 
        class="absolute w-3 h-3 bg-red-800 border-l border-t border-red-600/50 transform rotate-45"
        :class="overloadTooltip.arrowClass"
        :style="overloadTooltip.arrowStyle"
      ></div>
    </div>

    <!-- 新增物品Modal -->
    <div v-if="showItemModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <!-- Modal Header -->
        <div class="bg-red-900 text-white p-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">新增物品到清單</h3>
            <button 
              @click="closeItemModal"
              class="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <!-- Tab切換 -->
          <div class="flex mt-3 border-b border-red-700">
            <button
              @click="activeItemTab = 'weapons'"
              class="px-4 py-2 text-sm font-bold transition-colors"
              :class="activeItemTab === 'weapons' ? 'bg-red-700 text-white' : 'text-red-200 hover:text-white'"
            >
              武器
            </button>
            <button
              @click="activeItemTab = 'armors'"
              class="px-4 py-2 text-sm font-bold transition-colors"
              :class="activeItemTab === 'armors' ? 'bg-red-700 text-white' : 'text-red-200 hover:text-white'"
            >
              護甲
            </button>
            <button
              @click="activeItemTab = 'tools'"
              class="px-4 py-2 text-sm font-bold transition-colors"
              :class="activeItemTab === 'tools' ? 'bg-red-700 text-white' : 'text-red-200 hover:text-white'"
            >
              技能工具組
            </button>
            <button
              @click="activeItemTab = 'miscellaneous'"
              class="px-4 py-2 text-sm font-bold transition-colors"
              :class="activeItemTab === 'miscellaneous' ? 'bg-red-700 text-white' : 'text-red-200 hover:text-white'"
            >
              其他裝備
            </button>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="p-4">
          <!-- 武器頁籤 -->
          <div v-if="activeItemTab === 'weapons'" class="overflow-y-auto max-h-96">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">名稱</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">專精</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">距離</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">傷害&效果</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">體積</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">特性</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="weapon in defaultWeapons" :key="weapon.name" class="hover:bg-gray-50">
                  <td class="p-2 border text-sm">{{ weapon.name }}</td>
                  <td class="p-2 border text-sm text-center">{{ weapon.focus }}</td>
                  <td class="p-2 border text-sm text-center">{{ weapon.reach }}</td>
                  <td class="p-2 border text-sm text-center">{{ weapon.damage }}</td>
                  <td class="p-2 border text-sm text-center font-bold">{{ weapon.size }}</td>
                  <td class="p-2 border">
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="quality in weapon.qualities"
                        :key="quality"
                        class="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full border border-blue-300 cursor-help"
                        @mouseenter="(e) => showQualityTooltip(e, quality, 'weapon')"
                        @mouseleave="hideQualityTooltip"
                      >
                        {{ quality }}
                      </span>
                      <span v-if="weapon.qualities.length === 0" class="text-gray-400 text-xs italic">
                        無特性
                      </span>
                    </div>
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      @click="addItemToList(weapon, 'weapon')"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      添加
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 護甲頁籤 -->
          <div v-if="activeItemTab === 'armors'" class="overflow-y-auto max-h-96">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">名稱</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">護甲抗性</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">護甲特性</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="armor in defaultArmors" :key="armor.name" class="hover:bg-gray-50">
                  <td class="p-2 border text-sm">{{ armor.name }}</td>
                  <td class="p-2 border text-sm text-center font-bold">{{ armor.resistance }}</td>
                  <td class="p-2 border">
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="quality in armor.qualities"
                        :key="quality"
                        class="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full border border-red-300 cursor-help"
                        @mouseenter="(e) => showQualityTooltip(e, quality, 'armor')"
                        @mouseleave="hideQualityTooltip"
                      >
                        {{ quality }}
                      </span>
                      <span v-if="armor.qualities.length === 0" class="text-gray-400 text-xs italic">
                        無特性
                      </span>
                    </div>
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      @click="addItemToList(armor, 'armor')"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      添加
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 技能工具組頁籤 -->
          <div v-if="activeItemTab === 'tools'" class="overflow-y-auto max-h-96">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">名稱</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">限制等級</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">需求</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">體積</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tool in skillTools" :key="tool.name" class="hover:bg-gray-50">
                  <td class="p-2 border text-sm font-bold">{{ tool.name }}</td>
                  <td class="p-2 border text-sm text-center">{{ tool.restrictionLevel }}</td>
                  <td class="p-2 border text-sm text-center">{{ tool.requirement || '—' }}</td>
                  <td class="p-2 border text-sm text-center font-bold">{{ tool.size }}</td>
                  <td class="p-2 border text-center">
                    <button
                      @click="addItemToList(tool, 'tool')"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      添加
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 其他裝備頁籤 -->
          <div v-if="activeItemTab === 'miscellaneous'" class="overflow-y-auto max-h-96">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">名稱</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">限制等級</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">體積</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-left border">效果</th>
                  <th class="bg-gray-100 p-2 text-xs font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="misc in miscellaneousItems" :key="misc.name" class="hover:bg-gray-50">
                  <td class="p-2 border text-sm font-bold">{{ misc.name }}</td>
                  <td class="p-2 border text-sm text-center">{{ misc.restrictionLevel }}</td>
                  <td class="p-2 border text-sm text-center font-bold">{{ misc.size }}</td>
                  <td class="p-2 border text-xs">
                    <div class="max-w-xs">
                      <div class="font-bold text-blue-800 mb-1">{{ misc.effect }}</div>
                      <div class="text-gray-600">{{ misc.shortDescription }}</div>
                    </div>
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      @click="addItemToList(misc, 'miscellaneous')"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      添加
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-4 py-3 flex justify-end">
          <button
            @click="closeItemModal"
            class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm font-bold rounded transition-colors"
          >
            關閉
          </button>
        </div>
      </div>
    </div>

    <!-- 物品詳細資訊浮動框 -->
    <div 
      v-if="itemTooltip.show"
      class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-80 pointer-events-none"
      :style="itemTooltipStyle"
    >
      <div class="font-bold text-red-400 mb-2 text-base">{{ itemTooltip.item?.name }}</div>
      <div class="text-sm leading-relaxed">
        <div v-if="itemTooltip.item?.type === 'weapon'" class="space-y-1">
          <div><span class="text-yellow-300">專精：</span>{{ itemTooltip.item.focus }}</div>
          <div><span class="text-yellow-300">距離：</span>{{ itemTooltip.item.reach }}</div>
          <div><span class="text-yellow-300">傷害：</span>{{ itemTooltip.item.damage }}</div>
          <div><span class="text-yellow-300">體積：</span>{{ itemTooltip.item.size }}</div>
          <div v-if="itemTooltip.item.qualities?.length">
            <span class="text-yellow-300">特性：</span>{{ itemTooltip.item.qualities.join(', ') }}
          </div>
        </div>
        <div v-else-if="itemTooltip.item?.type === 'armor'" class="space-y-1">
          <div><span class="text-yellow-300">護甲抗性：</span>{{ itemTooltip.item.resistance }}</div>
          <div v-if="itemTooltip.item.qualities?.length">
            <span class="text-yellow-300">特性：</span>{{ itemTooltip.item.qualities.join(', ') }}
          </div>
        </div>
        <div v-else-if="itemTooltip.item?.type === 'tool'" class="space-y-1">
          <div><span class="text-yellow-300">限制等級：</span>{{ itemTooltip.item.restrictionLevel }}</div>
          <div v-if="itemTooltip.item.requirement">
            <span class="text-yellow-300">需求：</span>{{ itemTooltip.item.requirement }}
          </div>
          <div><span class="text-yellow-300">體積：</span>{{ itemTooltip.item.size }}</div>
          <div class="mt-2 pt-2 border-t border-slate-600">
            <div class="text-xs text-slate-300 mb-1">{{ itemTooltip.item.description }}</div>
            <div class="text-xs text-green-300 font-bold">{{ itemTooltip.item.effect }}</div>
          </div>
        </div>
        <div v-else-if="itemTooltip.item?.type === 'miscellaneous'" class="space-y-1">
          <div><span class="text-yellow-300">限制等級：</span>{{ itemTooltip.item.restrictionLevel }}</div>
          <div><span class="text-yellow-300">體積：</span>{{ itemTooltip.item.size }}</div>
          <div><span class="text-yellow-300">效果：</span>{{ itemTooltip.item.effect }}</div>
          <div class="mt-2 pt-2 border-t border-slate-600">
            <div class="text-xs text-slate-300 mb-2">{{ itemTooltip.item.description }}</div>
            <div class="text-xs text-green-300">{{ itemTooltip.item.usage }}</div>
          </div>
        </div>
      </div>
      
      <!-- 小三角箭頭指示器 -->
      <div 
        class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
        :class="itemTooltip.arrowClass"
        :style="itemTooltip.arrowStyle"
      ></div>
    </div>

    <!-- 新增物品成功提示 -->
    <div 
      v-if="itemAddedNotification.show"
      class="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-pulse"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      <span class="font-bold text-sm">{{ itemAddedNotification.message }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 武器特性資料
const weaponQualities = ref({
  '精準': {
    name: '精準',
    description: '若角色在攻擊前採取瞄準（副動作），該攻擊獲得「強烈」效果。'
  },
  '剋敵': {
    name: '剋敵',
    description: '此武器對神話生物特別有效，無視其「無敵」特殊規則。此外，具「堅韌 X」特質的生物無法以消耗威脅來忽略此武器造成的傷勢。'
  },
  '削弱': {
    name: '削弱',
    description: '治療由此武器造成的身體傷勢之技能檢定難度 +1。'
  },
  '局勢升高': {
    name: '局勢升高',
    description: '持此武器進入場景時，為遊戲主持人增加 1 威脅。'
  },
  '沉重': {
    name: '沉重',
    description: '若持用者體魄低於 10，使用此武器攻擊時難度 +1。'
  },
  '隱藏': {
    name: '隱藏',
    description: '此武器在隱藏時，旁人僅以目視無法察覺。搜尋此武器之技能檢定難度 +1。'
  },
  '饑渴': {
    name: '饑渴',
    description: '每當此武器造成至少一處傷勢時，使用者可選擇以下獎勵之一：移除 5 點壓力、治癒一處傷勢，或獲得 +1 威能直至場景結束（此加成每場景僅能獲得一次）。'
  },
  '不精準': {
    name: '不精準',
    description: '使用此武器時無法從瞄準（副動作）中獲益。'
  },
  '間接': {
    name: '間接',
    description: '此武器設計為拋射用途，可越過長距離投射目標。攻擊難度 +1，但不需視線。'
  },
  '格擋': {
    name: '格擋',
    description: '當持用者遭近戰攻擊並進行對抗檢定時，可重擲一顆 d20。若持有多件格擋武器，此效果不疊加。'
  },
  '可靠': {
    name: '可靠',
    description: '在行動場景中使用此武器時，角色可忽略第一次擲出的糾葛結果。'
  },
  '裝填': {
    name: '裝填',
    description: '攻擊後需重新裝填，耗費一個主動作。'
  },
  '盾牌': {
    name: '盾牌 X',
    description: '當角色遭受近戰攻擊時，其距離視為 X；若角色處於防備狀態，則獲得 +X 掩蔽抗性。'
  },
  '特殊': {
    name: '特殊',
    description: '此武器具有特殊性質或能力，於描述中另行說明。'
  },
  '特殊-斧': {
    name: '特殊（斧）',
    description: '單手斧亦可作為「投擲武器」使用，射程為近距，造成與近戰相同的傷害。'
  },
  '特殊-杖': {
    name: '特殊（杖）',
    description: '若以雙手持杖，將距離降為 2，基礎傷害提升為 3。'
  },
  '特殊-標槍': {
    name: '特殊（標槍）',
    description: '雖非為近戰而造，若角色擁有「近戰武器」專精，則可以標槍進行近戰攻擊。此時距離為 2，造成的傷害與遠程相同。'
  },
  '特殊-投石索': {
    name: '特殊（投石索）',
    description: '此時代的標準彈藥為橢圓形鉛彈。然而此武器最大優勢在於「可就地取材」。若角色因「彈盡」真理失去彈藥，可於地面拾石代替。使用石塊時，武器傷害值減 1。'
  },
  '精巧': {
    name: '精巧',
    description: '攻擊聲響難以察覺，需以「洞察＋觀察」檢定（難度 2）察覺。遊戲主持人可依距離或環境噪音調整難度。'
  },
  '雙手': {
    name: '雙手',
    description: '此武器以雙手使用為佳。若單手使用，攻擊難度 +1。'
  },
  '不可靠': {
    name: '不可靠',
    description: '使用此武器攻擊時，檢定的糾葛範圍+1。'
  }
})

// 傷害效果資料
const damageEffects = ref({
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
  },
  '擊倒': {
    name: '擊倒',
    description: '目標踉蹌或倒地。若效果😈數 ≥ 目標的運動技能等級，則目標倒地。此外也破除防備狀態。'
  },
  '持續': {
    name: '持續 X',
    description: '效果具延續性。若攻擊產生至少一個效果，目標在其回合開始時連續 X 輪擲挑戰骰🎲，承受擲骰產生的壓力。此擲骰不再觸發額外效果。若目標為物體，則效果立即生效。'
  },
  '穿透': {
    name: '穿透 X',
    description: '每擲出一個效果😈，忽略 X 點抗性。'
  },
  '纏縛': {
    name: '纏縛',
    description: '攻擊使目標糾纏束縛。目標無法執行除掙脫以外的行動。掙脫需進行一次（通常為體魄＋運動）技能檢定，難度等於效果😈數。掙脫耗費一次主動作，但仍可在同回合執行副動作。'
  },
  '震懾': {
    name: '震懾',
    description: '目標暫時無法行動，令其失去防備。若效果😈數 ≥ 目標的韌性等級，則其在下個回合無法採取任何行動。'
  },
  '兇猛': {
    name: '兇猛',
    description: '攻擊特別致命。每擲出一個效果😈，額外造成 +1 壓力。'
  }
})

// 護甲特性資料
const armorQualities = ref({
  '沉重': {
    name: '沉重',
    description: '因體積與重量，此護甲即使穿戴時仍計為主要物品。'
  },
  '不適': {
    name: '不適',
    description: '長時間穿著令人不適。每個場景結束時，穿戴者承受 1 點疲勞。'
  }
})

// 預設武器資料
const defaultWeapons = ref([
  {
    name: '斧',
    focus: '近戰武器',
    reach: '2',
    damage: '3🎲兇猛',
    size: '次要',
    qualities: ['特殊-斧']
  },
  {
    name: '棍',
    focus: '近戰武器',
    reach: '2',
    damage: '2🎲',
    size: '次要',
    qualities: []
  },
  {
    name: '棍杖',
    focus: '近戰武器',
    reach: '2',
    damage: '3🎲震懾',
    size: '主要',
    qualities: []
  },
  {
    name: '匕首',
    focus: '近戰武器',
    reach: '1',
    damage: '2🎲穿透1',
    size: '次要',
    qualities: ['隱藏', '精巧']
  },
  {
    name: '多用途軍斧',
    focus: '近戰武器',
    reach: '1',
    damage: '3🎲穿透1',
    size: '次要',
    qualities: []
  },
  {
    name: '標槍',
    focus: '近戰武器',
    reach: '2',
    damage: '3🎲穿透1',
    size: '次要',
    qualities: ['特殊-標槍']
  },
  {
    name: '長矛',
    focus: '近戰武器',
    reach: '3',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: []
  },
  {
    name: '杖',
    focus: '近戰武器',
    reach: '3',
    damage: '2🎲',
    size: '主要',
    qualities: ['特殊-杖']
  },
  {
    name: '劍',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲',
    size: '主要',
    qualities: ['格擋']
  },
  {
    name: '鐮刀劍',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲兇猛',
    size: '主要',
    qualities: []
  },
  {
    name: '羅馬短劍',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: ['格擋']
  },
  {
    name: '長劍',
    focus: '近戰武器',
    reach: '2',
    damage: '5🎲',
    size: '主要',
    qualities: ['雙手']
  },
  {
    name: '騎士長劍',
    focus: '近戰武器',
    reach: '2',
    damage: '5🎲穿透1',
    size: '主要',
    qualities: ['雙手']
  },
  {
    name: '徒手攻擊',
    focus: '徒手',
    reach: '0',
    damage: '2🎲',
    size: '—',
    qualities: ['精巧']
  },
  {
    name: '戰斧',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲兇猛',
    size: '主要',
    qualities: ['雙手']
  },
  {
    name: '小盾',
    focus: '近戰武器',
    reach: '1',
    damage: '2🎲震懾',
    size: '次要',
    qualities: ['盾牌2']
  },
  {
    name: '大盾',
    focus: '近戰武器',
    reach: '1',
    damage: '3🎲震懾',
    size: '主要',
    qualities: ['盾牌3']
  },
  // 遠程武器
  {
    name: '弩弓',
    focus: '弓術',
    reach: '中距',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: ['精準', '裝填']
  },
  {
    name: '弓',
    focus: '弓術',
    reach: '中距',
    damage: '3🎲穿透1',
    size: '主要',
    qualities: ['精巧']
  },
  {
    name: '複合弓',
    focus: '弓術',
    reach: '遠距',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: ['精巧']
  },
  {
    name: '標槍',
    focus: '投擲武器',
    reach: '中距',
    damage: '3🎲',
    size: '次要',
    qualities: ['特殊-標槍']
  },
  {
    name: '羅馬重標槍',
    focus: '投擲武器',
    reach: '近距',
    damage: '4🎲穿透1',
    size: '次要',
    qualities: ['特殊-標槍']
  },
  {
    name: '鉛鏢',
    focus: '投擲武器',
    reach: '近距',
    damage: '2🎲穿透1',
    size: '次要',
    qualities: []
  },
  {
    name: '投石索',
    focus: '投擲武器',
    reach: '遠距',
    damage: '3🎲震懾',
    size: '次要',
    qualities: ['不精準', '精巧', '特殊-投石索']
  }
])

// 預設護甲資料
const defaultArmors = ref([
  {
    name: '鎖子甲/分環鎧',
    resistance: '+2',
    size: '主要',
    qualities: ['不適']
  },
  {
    name: '皮甲',
    resistance: '+1',
    size: '主要',
    qualities: []
  },
  {
    name: '分片鎧',
    resistance: '+3',
    size: '主要',
    qualities: ['不適']
  },
  {
    name: '鱗甲',
    resistance: '+3',
    size: '主要',
    qualities: ['沉重', '不適']
  }
])

// 技能工具組資料
const skillTools = ref([
  {
    name: '製作工具',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '內含製造各類物品所需的工具，如：木工鋸、槌與鑿；金工鉗、錘與銼；或石雕用重鑿與鐵桿。每組皆附量具與刻記工具。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '馴獸師工具組',
    restrictionLevel: 1,
    requirement: '馴獸專精',
    size: '次要',
    description: '包含馬銜、韁繩、訓練餌、鞭與各類動物訓練用具。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '醫師工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '由各種外科器具組成，用於戰場醫療，包括復位用骨桿、手鑽、取箭鉗、手術刀與藥膏。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '羊皮紙卷軸',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '羅馬時期的書籍多以紙草或羊皮卷成冊，內容廣泛，從帝國史到哲學論述皆有。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '儀式工具',
    restrictionLevel: 2,
    requirement: '宗教專精',
    size: '次要',
    description: '基本儀式工具包含：儀式短劍、香、油燈、羊皮紙與墨水。滿足施行者進行多種儀式的需求。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '無賴工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '內含開鎖器、鑿、短撬棍與小錘，並附煤粉與潤滑油，用於潛入或破門而入。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '士兵工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '包含備用衣物、乾糧、小鏟與炊具，另附搭營與炊事用品。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '求生工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '內含生火材料（火絨盒、打火石與鋼片）、毛毯或獸皮、野外乾糧，並附繩索、岩釘與帆布，可搭建單人帳篷。',
    effect: '提供 3 點動力用於購買 d20'
  }
])

// 其他裝備資料
const miscellaneousItems = ref([
  {
    name: '護符',
    restrictionLevel: 0,
    size: '小物品',
    effect: '防護超自然攻擊',
    shortDescription: '防止詛咒、惡靈、邪眼攻擊',
    description: '人們會購買或製作護符與護身符，以防止詛咒、惡靈、「邪眼」與其他邪惡之物。孩童通常會配戴名為布拉或月形護符的護身飾物直到成年，因其被視為特別脆弱。',
    usage: '角色在被超自然力量、法術、邪眼或神話生物之心智攻擊鎖定時，可消耗 1 點命運點啟動護符，以防止該力量或攻擊的負面效果。之後擲 1 顆挑戰骰🎲。若結果為效果😈，護符仍然有效並可再次使用；若否，則護符失效，必須更換。'
  },
  {
    name: '手持油燈',
    restrictionLevel: 1,
    size: '小物品',
    effect: '產生光源',
    shortDescription: '近距範圍微弱光源，燃燒一小時',
    description: '陶製或金屬製手燈，以橄欖油或其他常見燃料為燃料，在羅馬時代十分普遍。',
    usage: '手燈可在近距範圍內產生微弱光源，燃燒一小時後需重新添油。'
  },
  {
    name: '連帽披風',
    restrictionLevel: 0,
    size: '小物品',
    effect: '保暖防護與隱匿',
    shortDescription: '保暖、防風雨、遮掩身份',
    description: '雖在溫暖的羅馬本地並不常見，但來自日耳曼北方的厚重披風「拉刻爾納」已在邊境地區流行。此披風能保暖、防風雨，且深兜帽可用於遮掩身份。',
    usage: '提供保暖與防護，兜帽可用於隱匿身份。'
  },
  {
    name: '鎖箱',
    restrictionLevel: 3,
    size: '次要',
    effect: '安全儲存物品',
    shortDescription: '保管財物與秘密的精製裝備',
    description: '堅固的木箱配以青銅鎖，是用來保管財物與秘密的昂貴精製裝備。',
    usage: '可用鑰匙開啟，或進行一次「協調＋潛匿」檢定（難度 3）開鎖；若角色具「開鎖」專精，可套用之。'
  },
  {
    name: '銅鏡',
    restrictionLevel: 1,
    size: '小物品',
    effect: '反射與觀察',
    shortDescription: '拋光青銅或鍍銀鏡',
    description: '鏡子材質多樣，最常見為拋光青銅鏡，而富裕階層則使用鍍銀鏡。',
    usage: '用於個人梳理或觀察周圍環境。'
  },
  {
    name: '銅筆與蠟板',
    restrictionLevel: 1,
    size: '小物品',
    effect: '書寫與記錄',
    shortDescription: '可重複使用的書寫工具',
    description: '書寫者常使用一端尖銳、一端鏟平的銅筆，於木或金屬框中盛裝的蠟板上刻寫暫時性筆記。',
    usage: '欲清除內容時，可用筆尾鏟端抹平痕跡。'
  },
  {
    name: '計時蠟燭',
    restrictionLevel: 1,
    size: '小物品',
    effect: '計時功能',
    shortDescription: '側面刻有時間刻度的蠟燭',
    description: '以蜂蠟或牛脂製成的蠟燭，側面刻或塗有時間刻度。理論上每燃燒一段至標記即過一小時，但受溫度與濕度影響，實際時間常有偏差。',
    usage: '用於粗略計時，但精度受環境因素影響。'
  },
  {
    name: '鐵蒺藜',
    restrictionLevel: 1,
    size: '次要',
    effect: '區域防禦武器',
    shortDescription: '造成物理危害的防禦器具',
    description: '鐵製蒺藜為羅馬軍與敵軍皆常使用的防禦器具。四刺呈金字塔狀排列，確保落地時必有一尖端朝上。',
    usage: '在一個區域中構成物理危害，對踏入者造成 3🎲傷害（詳見第 33 頁〈物理危害〉）。'
  },
  
  // 藥劑與藥理
  {
    name: '鴉片',
    restrictionLevel: 2,
    size: '小物品',
    effect: '額外消除1點壓力',
    shortDescription: '強效止痛與助眠藥物',
    description: '從罌粟提煉的強效藥物。輕劑量可泡製為稱作「克里特酒」的飲品，用於助眠；其葉則可製成「梅科尼翁」，用以減緩傷痛。',
    usage: '執行調息（主動作）消除壓力時可服用，額外消除1點壓力。若擲出效果😈，本場景中所有技能檢定的糾葛範圍+1。'
  },
  {
    name: '毒藥',
    restrictionLevel: 2,
    size: '小物品',
    effect: '致命傷害或武器強化',
    shortDescription: '致命的暗殺工具',
    description: '羅馬政壇上常見的暗殺手段。最常見的種類源自植物，如天仙子、曼陀羅與毒芹，某些動物毒液亦同樣致命。雖被視為懦夫之器，毒藥卻能迅速除去棘手敵人。',
    usage: '服用：立即承受4🎲物理傷害，並附帶「持續3」與「穿透3」效果。塗抹武器：本場景內該武器攻擊獲得+2傷害並具「持續3」效果。'
  },
  {
    name: '幻靈劑',
    restrictionLevel: 3,
    size: '小物品',
    effect: '施法強化或心靈保護',
    shortDescription: '改變心智狀態的致幻物質',
    description: '「幻靈劑」泛指能改變心智狀態的物質——從蜜蜂採集劇毒花蜜釀成的致幻蜂蜜、以藍蓮花泡製的茶，到被稱為「夢魚」的鯛魚肉。此類物質常用於魔法儀式與宗教祭典，可引發幻覺與靈視。',
    usage: '造成3🎲心智傷害，並附帶「持續2」與「穿透3」效果。選擇效果：1）施法者所施法術難度降低1（持續1小時）；2）角色在1小時內免受心靈創傷負面影響。無論選擇哪項，角色在此期間獲得個人真理：「目睹異象，真假難辨」。'
  },
  
  // 個人物品
  {
    name: '幸運符',
    restrictionLevel: 0,
    size: '小物品',
    effect: '每場冒險一次命運點',
    shortDescription: '吉兆紀念物或遺物',
    description: '部分背景與特質會賦予角色象徵過往的紀念物、事件遺物或其他吉兆之物。無論其具體外觀如何，效果皆相同。',
    usage: '每場冒險中一次，你可如同使用一點命運點般啟動幸運符。角色每次冒險僅能啟用一個幸運符。若背景與特質各提供一個幸運符，雖可同時保留兩件物品，但每場冒險僅能啟用其中之一。此外，角色可額外獲得一件限制等級為1或以下的裝備。'
  }
])

// 武器列表和Modal狀態
const weaponList = ref([
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [], qualityInput: '' },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [], qualityInput: '' },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [], qualityInput: '' },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [], qualityInput: '' },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [], qualityInput: '' }
])

const showWeaponModal = ref(false)
const selectedWeaponIndex = ref(0)

// 護甲列表和Modal狀態
const armorList = ref([
  { name: '', resistance: '', qualities: [] },
  { name: '', resistance: '', qualities: [] },
  { name: '', resistance: '', qualities: [] }
])

const showArmorModal = ref(false)
const selectedArmorIndex = ref(0)

// 提示框狀態
const tooltip = ref({
  show: false,
  quality: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 物品限制相關狀態
const currentMajorItems = ref(0)
const maxMajorItems = ref(2)
const currentMinorItems = ref(0)
const maxMinorItems = ref(3)

const itemLimitTooltip = ref({
  show: false,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

const overloadTooltip = ref({
  show: false,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 物品清單相關狀態
const itemList = ref([])
const showItemModal = ref(false)
const activeItemTab = ref('weapons')

const itemTooltip = ref({
  show: false,
  item: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 新增物品提示
const itemAddedNotification = ref({
  show: false,
  message: ''
})

const tooltipStyle = computed(() => ({
  left: `${tooltip.value.x}px`,
  top: `${tooltip.value.y}px`
}))

const itemLimitTooltipStyle = computed(() => ({
  left: `${itemLimitTooltip.value.x}px`,
  top: `${itemLimitTooltip.value.y}px`
}))

const overloadTooltipStyle = computed(() => ({
  left: `${overloadTooltip.value.x}px`,
  top: `${overloadTooltip.value.y}px`
}))

const itemTooltipStyle = computed(() => ({
  left: `${itemTooltip.value.x}px`,
  top: `${itemTooltip.value.y}px`
}))

// 自動計算當前攜帶的物品數量
const calculatedMajorItems = computed(() => {
  let majorCount = 0
  
  // 計算武器的主要物品
  weaponList.value.forEach(weapon => {
    if (weapon.name && weapon.size === '主要') {
      majorCount++
    }
  })
  
  // 計算護甲的主要物品（只計算有「沉重」特性的護甲）
  armorList.value.forEach(armor => {
    if (armor.name && armor.qualities.includes('沉重')) {
      majorCount++
    }
  })
  
  // 計算物品清單中的主要物品
  itemList.value.forEach(item => {
    if (item.type === 'weapon' && item.size === '主要') {
      majorCount++
    } else if (item.type === 'armor' && item.qualities.includes('沉重')) {
      majorCount++
    } else if (item.type === 'tool' && item.size === '主要') {
      majorCount++
    } else if (item.type === 'miscellaneous' && item.size === '主要') {
      majorCount++
    }
  })
  
  return majorCount
})

const calculatedMinorItems = computed(() => {
  let minorCount = 0
  
  // 計算武器的次要物品
  weaponList.value.forEach(weapon => {
    if (weapon.name && weapon.size === '次要') {
      minorCount++
    }
  })
  
  // 計算物品清單中的次要物品
  itemList.value.forEach(item => {
    if (item.type === 'weapon' && item.size === '次要') {
      minorCount++
    } else if (item.type === 'armor' && !item.qualities.includes('沉重')) {
      minorCount++
    } else if (item.type === 'tool' && item.size === '次要') {
      minorCount++
    } else if (item.type === 'miscellaneous' && item.size === '次要') {
      minorCount++
    }
  })
  
  return minorCount
})

const isOverloaded = computed(() => {
  return calculatedMajorItems.value > maxMajorItems.value || 
         calculatedMinorItems.value > maxMinorItems.value
})

// 提示框函數
const showQualityTooltip = (event, qualityName, type = 'weapon') => {
  let qualities
  if (type === 'weapon') {
    qualities = weaponQualities.value
  } else if (type === 'armor') {
    qualities = armorQualities.value
  } else if (type === 'damage') {
    qualities = damageEffects.value
  }
  
  // 先嘗試精確比對
  let quality = qualities[qualityName]
  
  // 如果精確比對失敗，嘗試模糊比對
  if (!quality) {
    const foundQualityKey = Object.keys(qualities).find(key => 
      qualityName.toLowerCase().includes(key.toLowerCase())
    )
    if (foundQualityKey) {
      quality = qualities[foundQualityKey]
    }
  }
  
  if (!quality) return
  
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 120
  
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
    quality: quality,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideQualityTooltip = () => {
  tooltip.value.show = false
}

// 物品限制提示相關函數
const showItemLimitTooltip = (event) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 200
  
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
  
  itemLimitTooltip.value = {
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

const hideItemLimitTooltip = () => {
  itemLimitTooltip.value.show = false
}

// 超載提示相關函數
const showOverloadTooltip = (event) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 180
  
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
  
  overloadTooltip.value = {
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

const hideOverloadTooltip = () => {
  overloadTooltip.value.show = false
}

// 物品管理相關函數
const openItemModal = () => {
  showItemModal.value = true
}

const closeItemModal = () => {
  showItemModal.value = false
}

const addItemToList = (item, type) => {
  const newItem = {
    ...item,
    type: type,
    id: Date.now() + Math.random() // 簡單的唯一ID
  }
  itemList.value.push(newItem)
  
  // 顯示已新增提示
  showItemAddedNotification(item.name)
}

const showItemAddedNotification = (itemName) => {
  itemAddedNotification.value = {
    show: true,
    message: `已新增「${itemName}」到物品清單`
  }
  
  // 3秒後自動隱藏
  setTimeout(() => {
    itemAddedNotification.value.show = false
  }, 3000)
}

const removeItem = (index) => {
  // 隱藏浮動提示框，避免卡住
  hideItemTooltip()
  itemList.value.splice(index, 1)
}

const showItemTooltip = (event, item) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 320
  const tooltipHeight = 150
  
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
  
  itemTooltip.value = {
    show: true,
    item: item,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideItemTooltip = () => {
  itemTooltip.value.show = false
}

// 處理武器特性懸浮事件
const handleQualityHover = (event) => {
  const inputValue = event.target.value
  if (!inputValue) return
  
  // 檢查輸入的文字是否包含已知的武器特性
  const foundQuality = Object.keys(weaponQualities.value).find(quality => 
    inputValue.toLowerCase().includes(quality.toLowerCase())
  )
  
  if (foundQuality) {
    showQualityTooltip(event, foundQuality, 'weapon')
  }
}

// 處理傷害效果懸浮事件
const handleDamageEffectHover = (event) => {
  const inputValue = event.target.value
  if (!inputValue) return
  
  // 檢查輸入的文字是否包含已知的傷害效果
  const foundEffect = Object.keys(damageEffects.value).find(effect => 
    inputValue.toLowerCase().includes(effect.toLowerCase())
  )
  
  if (foundEffect) {
    showQualityTooltip(event, foundEffect, 'damage')
  }
}



// 武器modal相關函數
const openWeaponModal = (index) => {
  selectedWeaponIndex.value = index
  showWeaponModal.value = true
}

const closeWeaponModal = () => {
  showWeaponModal.value = false
}

const selectWeapon = (weapon) => {
  weaponList.value[selectedWeaponIndex.value] = {
    name: weapon.name,
    focus: weapon.focus,
    reach: weapon.reach,
    damage: weapon.damage,
    size: weapon.size,
    qualities: [...weapon.qualities],
    qualityInput: ''
  }
  closeWeaponModal()
}

// 清空武器
const clearWeapon = (index) => {
  weaponList.value[index] = {
    name: '',
    focus: '',
    reach: '',
    damage: '',
    size: '',
    qualities: [],
    qualityInput: ''
  }
}

// 護甲modal相關函數
const openArmorModal = (index) => {
  selectedArmorIndex.value = index
  showArmorModal.value = true
}

const closeArmorModal = () => {
  showArmorModal.value = false
}

const selectArmor = (armor) => {
  armorList.value[selectedArmorIndex.value] = {
    name: armor.name,
    resistance: armor.resistance,
    qualities: [...armor.qualities]
  }
  closeArmorModal()
}

// 清空護甲
const clearArmor = (index) => {
  armorList.value[index] = {
    name: '',
    resistance: '',
    qualities: []
  }
}

// 解析特性文字並添加懸浮效果（用於未來功能）
const parseQualities = (qualitiesText, type = 'weapon') => {
  if (!qualitiesText) return qualitiesText
  
  const qualities = type === 'weapon' ? weaponQualities.value : armorQualities.value
  let result = qualitiesText
  
  // 替換已知的特性名稱為可點擊的 span
  Object.keys(qualities).forEach(qualityName => {
    const regex = new RegExp(`\\b${qualityName}\\b`, 'g')
    result = result.replace(regex, `<span class="quality-link cursor-help text-red-600 hover:text-red-800 font-semibold border-b border-dashed border-red-600" data-quality="${qualityName}" data-type="${type}">${qualityName}</span>`)
  })
  
  return result
}
</script>