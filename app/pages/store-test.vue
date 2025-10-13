<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-red-900">Pinia Store 功能測試</h1>
      
      <!-- 快速測試按鈕 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button @click="testWeapons" class="p-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          測試武器功能
        </button>
        <button @click="testArmors" class="p-4 bg-green-500 text-white rounded hover:bg-green-600">
          測試護甲功能
        </button>
        <button @click="testTalents" class="p-4 bg-purple-500 text-white rounded hover:bg-purple-600">
          測試天賦功能
        </button>
        <button @click="testSpells" class="p-4 bg-orange-500 text-white rounded hover:bg-orange-600">
          測試法術功能
        </button>
      </div>
      
      <!-- 清空資料 -->
      <div class="mb-6">
        <button @click="clearAllData" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          清空所有資料
        </button>
        <button @click="fillTestData" class="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          填入完整測試資料
        </button>
      </div>
      
      <!-- 即時資料顯示 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 武器狀態 -->
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">武器 ({{ filledWeapons }}/{{ store.weapons.length }})</h3>
          <div v-for="(weapon, index) in store.weapons.slice(0, 3)" :key="index" class="text-xs text-gray-600 mb-1">
            {{ index + 1 }}. {{ weapon.name || '空' }}
          </div>
        </div>
        
        <!-- 護甲狀態 -->
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">護甲 ({{ filledArmors }}/{{ store.armors.length }})</h3>
          <div v-for="(armor, index) in store.armors" :key="index" class="text-xs text-gray-600 mb-1">
            {{ index + 1 }}. {{ armor.name || '空' }}
          </div>
        </div>
        
        <!-- 天賦狀態 -->
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">天賦 ({{ filledTalents }}/{{ store.talents.length }})</h3>
          <div v-for="(talent, index) in store.talents.slice(0, 3)" :key="index" class="text-xs text-gray-600 mb-1">
            {{ index + 1 }}. {{ talent.name || '空' }}
          </div>
        </div>
        
        <!-- 法術狀態 -->
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-bold mb-2">法術</h3>
          <div class="text-xs text-gray-600 mb-1">
            類型: {{ store.spells.selectedCasterType || '未選' }}
          </div>
          <div class="text-xs text-gray-600 mb-1">
            傳統: {{ store.spells.selectedTraditions.length }}個
          </div>
          <div class="text-xs text-gray-600 mb-1">
            威能值: {{ store.spells.powerValue || '未設' }}
          </div>
          <div class="text-xs text-gray-600 mb-1">
            基礎威能: {{ store.spells.basePower || '未設' }}
          </div>
          <div class="text-xs text-gray-600">
            法術位: {{ store.spells.spellSlots.length }}個
          </div>
        </div>
      </div>
      
      <!-- 物品計算測試 -->
      <div class="bg-white p-4 rounded shadow mb-6">
        <h3 class="font-bold mb-2">物品計算功能</h3>
        <div class="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span class="font-semibold">主要物品:</span> {{ store.getCurrentMajorItems }}/{{ store.items.maxMajorItems }}
          </div>
          <div>
            <span class="font-semibold">次要物品:</span> {{ store.getCurrentMinorItems }}/{{ store.items.maxMinorItems }}
          </div>
          <div class="text-red-600" v-if="store.isOverloaded">
            ⚠️ 超載！
          </div>
        </div>
      </div>
      
      <!-- 狀態訊息 -->
      <div v-if="message" class="p-4 rounded mb-4" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCohorsCthvlhvStore } from '~/stores/cohorsCthvlhvStore'

const store = useCohorsCthvlhvStore()
const message = ref('')
const messageClass = ref('bg-green-100 text-green-800')

// 計算已填入的項目數量
const filledWeapons = computed(() => store.weapons.filter(w => w.name).length)
const filledArmors = computed(() => store.armors.filter(a => a.name).length)
const filledTalents = computed(() => store.talents.filter(t => t.name).length)

// 顯示訊息
const showMessage = (text, isSuccess = true) => {
  message.value = text
  messageClass.value = isSuccess 
    ? 'bg-green-100 text-green-800 border border-green-200' 
    : 'bg-red-100 text-red-800 border border-red-200'
  
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 測試武器功能
const testWeapons = () => {
  try {
    store.setWeapon(0, {
      name: '劍',
      focus: '戰鬥',
      reach: '近戰',
      damage: '3💀',
      size: '主要',
      qualities: ['鋒銳']
    })
    
    store.setWeapon(1, {
      name: '短劍',
      focus: '戰鬥',
      reach: '近戰', 
      damage: '2💀',
      size: '次要',
      qualities: ['迅速']
    })
    
    showMessage('武器測試成功！已添加劍和短劍。')
  } catch (error) {
    showMessage(`武器測試失敗: ${error.message}`, false)
  }
}

// 測試護甲功能
const testArmors = () => {
  try {
    store.setArmor(0, {
      name: '鱗甲',
      resistance: '3',
      qualities: ['沉重']
    })
    
    store.setArmor(1, {
      name: '皮甲',
      resistance: '2', 
      qualities: ['輕便']
    })
    
    showMessage('護甲測試成功！已添加鱗甲和皮甲。')
  } catch (error) {
    showMessage(`護甲測試失敗: ${error.message}`, false)
  }
}

// 測試天賦功能
const testTalents = () => {
  try {
    store.setTalent(0, {
      name: '武器訓練',
      keywords: '戰鬥, 技能',
      content: '你在使用武器時獲得額外的效果骰。'
    })
    
    store.setTalent(1, {
      name: '護甲精通',
      keywords: '防禦, 技能', 
      content: '你能更有效地使用護甲進行防禦。'
    })
    
    showMessage('天賦測試成功！已添加武器訓練和護甲精通。')
  } catch (error) {
    showMessage(`天賦測試失敗: ${error.message}`, false)
  }
}

// 測試法術功能
const testSpells = () => {
  try {
    store.setCasterType('traditional')
    store.toggleMagicalTradition('runes')
    store.toggleMagicalTradition('divination')
    
    store.setPowerValue('3')
    store.setBasePower('2')
    
    store.addSpellSlot('火球術', 1, 'D1')
    store.addSpellSlot('治療術', 1, 'D2')
    
    showMessage('法術測試成功！已設置施法類型、傳統、威能值和法術位。')
  } catch (error) {
    showMessage(`法術測試失敗: ${error.message}`, false)
  }
}

// 清空所有資料
const clearAllData = () => {
  try {
    store.clearAllData()
    showMessage('所有資料已清空！')
  } catch (error) {
    showMessage(`清空失敗: ${error.message}`, false)
  }
}

// 填入完整測試資料
const fillTestData = () => {
  try {
    // 基本資料
    store.updateBasicInfo({
      characterName: '測試角色',
      culture: '羅馬',
      rank: '百夫長',
      wealth: '富有',
      archetype: '戰士',
      background: '軍人',
      talent: '領導'
    })
    
    // 屬性
    store.setAttribute('might', 12)
    store.setAttribute('agility', 10)
    store.setAttribute('intellect', 9)
    store.setAttribute('willpower', 11)
    store.setAttribute('personality', 8)
    
    // 技能
    store.setSkill('athletics', 3)
    store.setSkill('warfare', 4)
    store.setSkill('command', 3)
    
    // 武器
    testWeapons()
    
    // 護甲
    testArmors()
    
    // 天賦
    testTalents()
    
    // 法術
    testSpells()
    
    // 筆記
    store.updateNotes('traits', '勇敢、忠誠、戰術思維敏銳')
    store.updateNotes('history', '出身於羅馬軍團世家，自幼接受嚴格軍事訓練。')
    store.updateNotes('personalAgenda', '保護羅馬帝國，維護軍團榮譽。')
    
    showMessage('完整測試資料填入成功！請檢查各個頁籤。')
  } catch (error) {
    showMessage(`填入測試資料失敗: ${error.message}`, false)
  }
}
</script>