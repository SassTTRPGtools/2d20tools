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
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          BELONGINGS
        </label>
        <div class="border-2 border-red-900 mt-2 bg-white" style="min-height: 180px;">
          <textarea 
            class="w-full h-full p-2 border-0 bg-transparent font-serif text-sm resize-none"
            style="min-height: 176px;"
            placeholder="物品清單..."
          ></textarea>
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
  }
])

// 預設護甲資料
const defaultArmors = ref([
  {
    name: '鎖子甲/分環鎧',
    resistance: '+2',
    qualities: ['不適']
  },
  {
    name: '皮甲',
    resistance: '+1',
    qualities: []
  },
  {
    name: '分片鎧',
    resistance: '+3',
    qualities: ['不適']
  },
  {
    name: '鱗甲',
    resistance: '+3',
    qualities: ['沉重', '不適']
  }
])

// 武器列表和Modal狀態
const weaponList = ref([
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [] },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [] },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [] },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [] },
  { name: '', focus: '', reach: '', damage: '', size: '', qualities: [] }
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

const tooltipStyle = computed(() => ({
  left: `${tooltip.value.x}px`,
  top: `${tooltip.value.y}px`
}))

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
  
  const quality = qualities[qualityName]
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
    qualities: [...weapon.qualities]
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
    qualities: []
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