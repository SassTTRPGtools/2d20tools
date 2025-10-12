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

    <!-- 上半部分 - TRAITS, HISTORY, PERSONAL AGENDA -->
    <div class="flex flex-col lg:flex-row gap-4 mb-6">
      <!-- 左側 TRAITS -->
      <div class="flex flex-col lg:w-1/2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          TRAITS
        </label>
        <div class="border-2 border-red-900 bg-white flex-1 min-h-64">
          <textarea 
            class="w-full h-full p-3 border-0 bg-transparent font-serif text-sm resize-none"
            style="min-height: 250px;"
            placeholder="角色特質..."
          ></textarea>
        </div>
      </div>

      <!-- 右側 HISTORY 和 PERSONAL AGENDA -->
      <div class="flex flex-col lg:w-1/2 gap-4">
        <!-- HISTORY -->
        <div class="flex flex-col">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            HISTORY
          </label>
          <div class="border-2 border-red-900 bg-white">
            <textarea 
              class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-32"
              placeholder="角色歷史..."
            ></textarea>
          </div>
        </div>

        <!-- PERSONAL AGENDA -->
        <div class="flex flex-col">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            PERSONAL AGENDA
          </label>
          <div class="border-2 border-red-900 bg-white">
            <textarea 
              class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-32"
              placeholder="個人議程..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- 中間部分 - CONTACTS 和 FACTIONS -->
    <div class="flex flex-col lg:flex-row gap-4 mb-6">
      <!-- 左側 CONTACTS -->
      <div class="flex flex-col lg:w-1/2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          CONTACTS
        </label>
        <div class="border-2 border-red-900 bg-white">
          <textarea 
            class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-40"
            placeholder="聯絡人..."
          ></textarea>
        </div>
      </div>

      <!-- 右側 FACTIONS -->
      <div class="flex flex-col lg:w-1/2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          FACTIONS
        </label>
        <div class="border-2 border-red-900 bg-white">
          <textarea 
            class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-40"
            placeholder="派系關係..."
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 底部 JOURNAL/NOTES -->
    <div class="flex flex-col">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        JOURNAL/NOTES
      </label>
      <div class="border-2 border-red-900 bg-white">
        <textarea 
          class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none"
          style="min-height: 300px;"
          placeholder="日誌與筆記..."
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
// 這個頁面不需要特殊的響應式數據
</script>