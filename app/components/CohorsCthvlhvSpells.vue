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
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          SPELLCASTING TYPE
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          MAGICAL TRADITION
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          SPELLCASTING ATTRIBUTE
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          POWER RATING
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
      </div>
      
      <div class="flex flex-col">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-1 rounded-sm">
          BASE POWER
        </label>
        <input 
          type="text" 
          class="border-2 border-red-900 p-2 bg-white font-serif text-sm h-12"
        >
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
// 這個頁面不需要特殊的響應式數據
</script>