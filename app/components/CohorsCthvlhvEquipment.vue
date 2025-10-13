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
      <div class="flex items-center justify-between mb-2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold rounded-sm inline-block">
          天賦
        </label>
        <button
          @click="openTalentModal"
          class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
        >
          新增天賦
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse mt-2 min-w-max">
          <thead>
            <tr>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-32">名稱</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-32">關鍵字</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-80">描述</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-16">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(talent, index) in talentList" :key="`talent-${index}`" class="min-h-16">
              <td class="p-1 border border-red-900 bg-white">
                <div class="p-1 font-serif text-xs text-gray-700">
                  {{ talent.name || '未選擇天賦' }}
                </div>
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input 
                  type="text" 
                  v-model="talent.keywords"
                  class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0"
                  placeholder="關鍵字"
                  :readonly="!talent.name"
                  :class="talent.name ? '' : 'text-gray-400'"
                >
              </td>
              <td class="p-1 border border-red-900 bg-white max-w-80">
                <div 
                  class="p-1 font-serif text-xs text-gray-700 min-h-16 leading-relaxed break-words word-wrap"
                  style="word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap;"
                  @mouseenter="(e) => showSpecialEffectTooltip(e, talent.content)"
                  @mouseleave="hideSpecialEffectTooltip"
                >
                  {{ talent.content || '尚未選擇天賦' }}
                </div>
              </td>
              <td class="p-1 border border-red-900 bg-white text-center">
                <button
                  @click="removeTalent(index)"
                  class="text-red-600 hover:text-red-800 text-xs font-bold"
                  type="button"
                  :disabled="!talent.name"
                  :class="talent.name ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'"
                >
                  清空
                </button>
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

    <!-- 天賦選擇Modal -->
    <div 
      v-if="showTalentModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeTalentModal"
    >
      <div 
        class="bg-white rounded-lg shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden"
        @click.stop
      >
        <div class="bg-red-900 text-white p-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">選擇天賦</h3>
            <button 
              @click="closeTalentModal"
              class="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <!-- 搜索框 -->
          <div class="mt-4">
            <input
              v-model="talentSearchQuery"
              type="text"
              placeholder="搜索天賦名稱或關鍵字..."
              class="w-full px-3 py-2 bg-white text-black rounded border border-red-700 text-sm focus:outline-none focus:border-red-500"
            >
          </div>
          
          <!-- Tab切換 -->
          <div class="flex mt-3 border-b border-red-700 flex-wrap">
            <button
              @click="activeTalentTab = 'all'"
              class="px-4 py-2 text-sm font-bold transition-colors"
              :class="activeTalentTab === 'all' ? 'bg-red-700 text-white' : 'text-red-200 hover:text-white'"
            >
              全部 ({{ getTotalTalentsCount() }})
            </button>
            <button
              v-for="category in talentCategories"
              :key="category"
              @click="activeTalentTab = category"
              class="px-4 py-2 text-sm font-bold transition-colors"
              :class="activeTalentTab === category ? 'bg-red-700 text-white' : 'text-red-200 hover:text-white'"
            >
              {{ category }} ({{ getTalentsByCategory(category).length }})
            </button>
          </div>
        </div>
        
        <div class="p-4">
          <div class="overflow-y-auto max-h-[60vh]">
            <table class="w-full border-collapse text-xs">
              <thead class="sticky top-0">
                <tr>
                  <th class="bg-gray-100 p-2 font-bold text-left border">天賦名稱</th>
                  <th class="bg-gray-100 p-2 font-bold text-left border">分類</th>
                  <th class="bg-gray-100 p-2 font-bold text-left border">關鍵字</th>
                  <th class="bg-gray-100 p-2 font-bold text-left border">效果</th>
                  <th class="bg-gray-100 p-2 font-bold text-center border">選擇</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="talent in filteredTalents" 
                  :key="`${talent.category}-${talent.talent.englishName}`" 
                  class="hover:bg-gray-50"
                >
                  <td class="p-2 border">
                    <div class="font-bold text-blue-800">{{ talent.talent.chineseName }}</div>
                    <div class="text-gray-600 text-xs italic">{{ talent.talent.englishName }}</div>
                  </td>
                  <td class="p-2 border text-center">
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
                      {{ talent.category }}
                    </span>
                  </td>
                  <td class="p-2 border text-center">
                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      {{ talent.talent.keywords }}
                    </span>
                  </td>
                  <td class="p-2 border">
                    <div 
                      class="text-sm cursor-help max-w-lg"
                      @mouseenter="(e) => showTalentEffectTooltip(e, talent.talent)"
                      @mouseleave="hideTalentEffectTooltip"
                    >
                      {{ truncateText(talent.talent.content, 100) }}
                    </div>
                  </td>
                  <td class="p-2 border text-center">
                    <button
                      @click="selectTalent(talent.talent)"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-bold rounded transition-colors"
                    >
                      選擇
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <!-- 沒有找到結果的提示 -->
            <div v-if="filteredTalents.length === 0" class="text-center py-8">
              <div class="text-gray-500 text-lg">沒有找到符合條件的天賦</div>
              <div class="text-gray-400 text-sm mt-2">請嘗試調整搜索條件或選擇其他分類</div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-100 p-4 text-right">
          <button
            @click="closeTalentModal"
            class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded mr-2 transition-colors"
          >
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 天賦效果浮動提示框 -->
    <div 
      v-if="talentEffectTooltip.show"
      class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-96 pointer-events-none"
      :style="talentEffectTooltipStyle"
    >
      <div class="font-bold text-red-400 mb-2 text-base">
        {{ talentEffectTooltip.talent?.chineseName }}
      </div>
      <div class="text-xs text-gray-300 mb-3 italic">
        {{ talentEffectTooltip.talent?.englishName }}
      </div>
      <div class="text-yellow-300 text-xs font-bold mb-2">
        關鍵字：{{ talentEffectTooltip.talent?.keywords }}
      </div>
      <div class="text-sm leading-relaxed whitespace-pre-line">
        {{ talentEffectTooltip.talent?.content }}
      </div>
      
      <!-- 箭頭指示器 -->
      <div 
        class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
        :class="talentEffectTooltip.arrowClass"
        :style="talentEffectTooltip.arrowStyle"
      ></div>
    </div>

    <!-- 特殊效果浮動提示框 -->
    <div 
      v-if="specialEffectTooltip.show"
      class="fixed z-50 bg-slate-800 text-white p-4 rounded-lg shadow-2xl border border-red-900/30 w-80 pointer-events-none"
      :style="specialEffectTooltipStyle"
    >
      <div class="font-bold text-red-400 mb-3 text-base">
        {{ specialEffectTooltip.effects?.length > 1 ? '特殊效果' : specialEffectTooltip.effects?.[0]?.name }}
      </div>
      
      <div 
        v-for="(effect, index) in specialEffectTooltip.effects" 
        :key="effect.name"
        :class="{ 'mb-3': index < specialEffectTooltip.effects.length - 1 }"
      >
        <div v-if="specialEffectTooltip.effects.length > 1" class="font-bold text-yellow-300 mb-1 text-sm">
          {{ effect.name }}
        </div>
        <div class="text-sm leading-relaxed">{{ effect.description }}</div>
      </div>
      
      <!-- 箭頭指示器 -->
      <div 
        class="absolute w-3 h-3 bg-slate-800 border-l border-t border-red-900/30 transform rotate-45"
        :class="specialEffectTooltip.arrowClass"
        :style="specialEffectTooltip.arrowStyle"
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

    <!-- 新增天賦成功提示 -->
    <div 
      v-if="talentAddedNotification.show"
      class="fixed top-16 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-pulse"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      <span class="font-bold text-sm">{{ talentAddedNotification.message }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useEquipmentData } from '~/composables/useEquipmentData'
import { useTalentData } from '~/composables/useTalentData'

// 引入裝備數據
const { weaponsDatabase, armorsDatabase, skillToolsDatabase, miscellaneousDatabase, weaponSpecialAbilities } = useEquipmentData()

// 引入天賦數據
const { talentsDatabase, getCategories, getTalentsByCategory } = useTalentData()

// 武器特性資料 - 使用外部數據模組
const weaponQualities = ref(weaponSpecialAbilities)

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

// 預設武器資料 - 使用外部數據模組
const defaultWeapons = ref(weaponsDatabase)

// 預設護甲資料 - 使用外部數據模組
const defaultArmors = ref(armorsDatabase)


// 技能工具組資料 - 使用外部數據模組
const skillTools = ref(skillToolsDatabase)


// 其他裝備資料 - 使用外部數據模組
const miscellaneousItems = ref(miscellaneousDatabase)


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

// 選擇狀態變數
const selectedWeapons = ref([])
const selectedArmor = ref([])
const customWeapons = ref([])
const customArmor = ref([])
const selectedSkillTools = ref([])
const selectedMiscellaneous = ref([])
const selectedTalents = ref([])
const customTalents = ref([])

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

// 天賦新增成功提示
const talentAddedNotification = ref({
  show: false,
  message: ''
})

// 天賦相關狀態
const talentList = ref([
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' },
  { name: '', keywords: '', content: '' }
])

const showTalentModal = ref(false)
const activeTalentTab = ref('all')
const talentSearchQuery = ref('')

// 天賦分類
const talentCategories = computed(() => getCategories())

// 天賦效果浮動提示框
const talentEffectTooltip = ref({
  show: false,
  talent: null,
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 特殊效果浮動提示框
const specialEffectTooltip = ref({
  show: false,
  effects: [],
  x: 0,
  y: 0,
  arrowClass: '',
  arrowStyle: {}
})

// 特殊效果數據庫（用於浮動提示）
const specialEffectsDatabase = ref({
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
    description: '效果具延續性。若攻擊產生至少一個效果，目標在其回合開始時連續 X 輪擲挑戰骰🎲，承受擲骰產生的壓力。'
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

const talentEffectTooltipStyle = computed(() => ({
  left: `${talentEffectTooltip.value.x}px`,
  top: `${talentEffectTooltip.value.y}px`
}))

const specialEffectTooltipStyle = computed(() => ({
  left: `${specialEffectTooltip.value.x}px`,
  top: `${specialEffectTooltip.value.y}px`
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

// 天賦相關計算屬性
const filteredTalents = computed(() => {
  let talents = []
  
  if (activeTalentTab.value === 'all') {
    // 顯示所有天賦
    for (const [category, categoryTalents] of Object.entries(talentsDatabase)) {
      talents.push(...categoryTalents.map(talent => ({ category, talent })))
    }
  } else {
    // 顯示特定分類的天賦
    const categoryTalents = getTalentsByCategory(activeTalentTab.value)
    talents = categoryTalents.map(talent => ({ category: activeTalentTab.value, talent }))
  }
  
  // 搜索過濾
  if (talentSearchQuery.value.trim()) {
    const query = talentSearchQuery.value.toLowerCase().trim()
    talents = talents.filter(item => 
      item.talent.chineseName.toLowerCase().includes(query) ||
      item.talent.englishName.toLowerCase().includes(query) ||
      item.talent.keywords.toLowerCase().includes(query) ||
      item.talent.content.toLowerCase().includes(query)
    )
  }
  
  return talents
})

// 獲取總天賦數量
const getTotalTalentsCount = () => {
  return Object.values(talentsDatabase).reduce((total, talents) => total + talents.length, 0)
}

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

// 天賦相關方法
const openTalentModal = () => {
  showTalentModal.value = true
  activeTalentTab.value = 'all'
  talentSearchQuery.value = ''
}

const closeTalentModal = () => {
  showTalentModal.value = false
  hideTalentEffectTooltip()
}

const selectTalent = (talent) => {
  // 找到第一個空的位置
  let targetIndex = talentList.value.findIndex(t => !t.name)
  
  // 如果沒有空位置，新增一個
  if (targetIndex === -1) {
    talentList.value.push({
      name: talent.chineseName,
      keywords: talent.keywords,
      content: talent.content
    })
  } else {
    // 使用現有的空位置
    talentList.value[targetIndex] = {
      name: talent.chineseName,
      keywords: talent.keywords,
      content: talent.content
    }
  }
  
  // 顯示新增成功提示而不是直接關閉Modal
  showTalentAddedNotification(talent.chineseName)
}

const showTalentAddedNotification = (talentName) => {
  talentAddedNotification.value = {
    show: true,
    message: `已新增天賦「${talentName}」`
  }
  
  // 3秒後自動隱藏
  setTimeout(() => {
    talentAddedNotification.value.show = false
  }, 3000)
}

const removeTalent = (index) => {
  talentList.value[index] = {
    name: '',
    keywords: '',
    content: ''
  }
}

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// 天賦效果浮動提示框相關方法
const showTalentEffectTooltip = (event, talent) => {
  const rect = event.target.getBoundingClientRect()
  const tooltipWidth = 384 // w-96
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
  
  talentEffectTooltip.value = {
    show: true,
    talent: talent,
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, tooltipHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideTalentEffectTooltip = () => {
  talentEffectTooltip.value.show = false
}

// 特殊效果浮動提示框相關方法
const showSpecialEffectTooltip = (event, content) => {
  if (!content) return
  
  // 檢查內容中是否包含傷害效果關鍵字（支持多個效果）
  let foundEffects = []
  const contentLower = content.toLowerCase()
  
  // 檢查所有可能的效果
  for (const [effectKey, effectData] of Object.entries(specialEffectsDatabase.value)) {
    let isMatch = false
    
    // 完全匹配
    if (contentLower.includes(effectKey.toLowerCase())) {
      isMatch = true
    }
    // 模糊匹配（至少2個字符）
    else if (effectKey.length >= 2 && contentLower.includes(effectKey.toLowerCase())) {
      isMatch = true
    }
    // 特殊處理：穿透和穿刺的相互匹配
    else if ((effectKey === '穿透' && contentLower.includes('穿刺')) || 
             (effectKey === '穿刺' && contentLower.includes('穿透'))) {
      isMatch = true
    }
    // 特殊處理：震懾和震暈的相互匹配
    else if ((effectKey === '震懾' && contentLower.includes('震暈')) || 
             (effectKey === '震暈' && contentLower.includes('震懾'))) {
      isMatch = true
    }
    
    if (isMatch && !foundEffects.some(effect => effect.name === effectData.name)) {
      foundEffects.push(effectData)
    }
  }
  
  // 只有找到傷害效果才顯示提示
  if (foundEffects.length === 0) return
  
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
  
  // 調整提示框高度以適應多個效果
  const estimatedHeight = Math.max(120, foundEffects.length * 60 + 40)
  
  // 重新計算位置
  if (y + estimatedHeight > window.innerHeight - 20) {
    y = window.innerHeight - estimatedHeight - 20
  }
  
  specialEffectTooltip.value = {
    show: true,
    effects: foundEffects, // 改為複數形式
    x: x,
    y: y,
    arrowClass: isOnRight ? '-left-1.5' : '-right-1.5',
    arrowStyle: {
      top: `${Math.max(12, Math.min(arrowY, estimatedHeight - 24))}px`,
      transform: isOnRight ? 'rotate(-135deg)' : 'rotate(45deg)'
    }
  }
}

const hideSpecialEffectTooltip = () => {
  specialEffectTooltip.value.show = false
  specialEffectTooltip.value.effects = []
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

// 監聽數據管理事件
onMounted(() => {
  // 監聽載入裝備數據事件
  window.addEventListener('loadEquipmentData', (event) => {
    if (event.detail) {
      loadEquipmentData(event.detail)
    }
  })
  
  // 監聽清除裝備數據事件
  window.addEventListener('clearCharacterData', () => {
    clearEquipmentData()
  })

  // 監聽獲取裝備數據事件
  window.addEventListener('getEquipmentData', () => {
    window.characterEquipmentData = getEquipmentData()
  })
})

// 獲取裝備數據
const getEquipmentData = () => {
  return {
    selectedWeapons: selectedWeapons.value,
    selectedArmor: selectedArmor.value,
    customWeapons: customWeapons.value,
    customArmor: customArmor.value,
    selectedSkillTools: selectedSkillTools.value,
    selectedMiscellaneous: selectedMiscellaneous.value,
    selectedTalents: selectedTalents.value,
    customTalents: customTalents.value
  }
}

// 載入裝備數據
const loadEquipmentData = (data) => {
  if (!data) return
  
  if (data.selectedWeapons) selectedWeapons.value = [...data.selectedWeapons]
  if (data.selectedArmor) selectedArmor.value = [...data.selectedArmor]
  if (data.customWeapons) customWeapons.value = [...data.customWeapons]
  if (data.customArmor) customArmor.value = [...data.customArmor]
  if (data.selectedSkillTools) selectedSkillTools.value = [...data.selectedSkillTools]
  if (data.selectedMiscellaneous) selectedMiscellaneous.value = [...data.selectedMiscellaneous]
  if (data.selectedTalents) selectedTalents.value = [...data.selectedTalents]
  if (data.customTalents) customTalents.value = [...data.customTalents]
}

// 清除裝備數據
const clearEquipmentData = () => {
  selectedWeapons.value = []
  selectedArmor.value = []
  customWeapons.value = []
  customArmor.value = []
  selectedSkillTools.value = []
  selectedMiscellaneous.value = []
  selectedTalents.value = []
  customTalents.value = []
}

// 觸發數據變更事件
const triggerDataChange = () => {
  window.dispatchEvent(new CustomEvent('characterDataChanged'))
}

// 監聽裝備數據變更
watch([
  selectedWeapons, selectedArmor, customWeapons, customArmor,
  selectedSkillTools, selectedMiscellaneous, selectedTalents, customTalents
], () => {
  triggerDataChange()
}, { deep: true })
</script>