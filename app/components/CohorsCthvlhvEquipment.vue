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
        WEAPONS
      </label>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse mt-2 min-w-max">
          <thead>
            <tr>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-24">NAME</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-20">FOCUS</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-28">REACH OR RANGE</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">DAMAGE & EFFECTS</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-16">SIZE</th>
              <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-32">QUALITIES</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5" :key="`weapon-${n}`" class="h-10">
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
              </td>
              <td class="p-1 border border-red-900 bg-white">
                <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
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
          ARMOR
        </label>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse mt-2 min-w-max">
            <thead>
              <tr>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-24">NAME</th>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-20">RESISTANCE</th>
                <th class="bg-red-900 text-white p-1 text-xs font-bold border border-red-900 min-w-24">QUALITIES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 3" :key="`armor-${n}`" class="h-12">
                <td class="p-1 border border-red-900 bg-white">
                  <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
                </td>
                <td class="p-1 border border-red-900 bg-white">
                  <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
                </td>
                <td class="p-1 border border-red-900 bg-white">
                  <input type="text" class="w-full p-1 border-0 bg-transparent font-serif text-xs min-w-0">
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
  </div>
</template>

<script setup>
// 這個頁面不需要特殊的響應式數據
</script>