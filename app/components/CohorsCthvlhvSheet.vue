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
          NAME & PRONOUN
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          CULTURE
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          CASTE
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif"
        >
      </div>
      <div class="flex flex-col md:w-32">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          WEALTH
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
          ARCHETYPE
        </label>
        <textarea 
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          BACKGROUND
        </label>
        <textarea 
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
      <div class="flex flex-col flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          CHARACTERISTIC
        </label>
        <textarea 
          class="border-2 border-red-900 p-2 bg-white font-serif resize-none h-20"
        ></textarea>
      </div>
    </div>

    <!-- 個人真相與疤痕 -->
    <div class="mb-4">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        PERSONAL TRUTHS & SCARS
      </label>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mt-2">
        <textarea 
          v-for="n in 5" 
          :key="n"
          class="border-2 border-red-900 p-2 h-20 bg-white font-serif resize-none text-sm"
        ></textarea>
      </div>
    </div>

    <!-- 壓力與護甲區域 -->
    <div class="flex flex-col lg:flex-row gap-6 mb-6">
      <!-- 左側：壓力與勇氣財富 -->
      <div class="flex flex-col lg:w-1/2">
        <!-- 壓力區域 -->
        <div class="mb-4">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            STRESS
          </label>
          <div class="border-2 border-red-900 p-2 bg-white">
            <div class="grid gap-1">
              <div class="flex gap-1 justify-start" v-for="row in 3" :key="row">
                <div 
                  v-for="col in 8" 
                  :key="col"
                  class="w-6 h-6 border-2 border-red-900 bg-white cursor-pointer hover:bg-red-100"
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
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
              COURAGE
            </label>
            <input 
              type="text" 
              class="border-2 border-red-900 p-2 w-full bg-white font-serif h-16"
            >
          </div>
          <div class="flex flex-col flex-1">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
              FORTUNE
            </label>
            <input 
              type="text" 
              class="border-2 border-red-900 p-2 w-full bg-white font-serif h-16"
            >
          </div>
        </div>
      </div>
      
      <!-- 右側：護甲區域 -->
      <div class="flex flex-col gap-4 lg:w-1/2">
        <div class="flex gap-4">
          <div class="flex flex-col flex-1">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
              BASE ARMOR
            </label>
            <input 
              type="text" 
              class="border-2 border-red-900 p-2 w-full bg-white font-serif h-16"
            >
          </div>
          <div class="flex flex-col flex-1">
            <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
              TOTAL ARMOR
            </label>
            <input 
              type="text" 
              class="border-2 border-red-900 p-2 w-full bg-white font-serif h-16"
            >
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
            INJURIES
          </label>
          <textarea 
            class="border-2 border-red-900 p-2 w-full bg-white font-serif resize-none flex-1 min-h-32"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 屬性表格 -->
    <div class="mb-6">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        ATTRIBUTES
      </label>
      <table class="w-full border-collapse mt-2 table-fixed">
        <thead>
          <tr>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 w-20"></th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">AGI</th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">BRA</th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">COO</th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">GRA</th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">INS</th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">REA</th>
            <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900">WIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bg-red-900 text-white font-bold text-xs p-1 border border-red-900">
              RATING
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
          </tr>
          <tr>
            <td class="bg-red-900 text-white font-bold text-xs p-1 border border-red-900">
              BONUS DMG
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
            <td class="p-0 border border-red-900 text-center bg-white">
              <input 
                type="number" 
                class="w-full p-1 text-center border-0 bg-transparent font-serif text-xs"
                min="0" max="99"
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 技能區域 -->
    <div class="flex flex-col xl:flex-row gap-6">
      <!-- 技能列表 -->
      <div class="flex-1">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          SKILLS
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
import { ref } from 'vue'

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

const stressBoxes = ref(Array(3).fill().map(() => Array(8).fill(false)))

const toggleStress = (row, col) => {
  stressBoxes.value[row - 1][col - 1] = !stressBoxes.value[row - 1][col - 1]
}
</script>