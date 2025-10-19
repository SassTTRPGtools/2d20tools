<template>
  <div class="character-form cthulhu-sheet bg-amber-50 text-black font-serif">
    <!-- 標題 -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold mb-2 text-red-900 tracking-widest">
        《臨戰克蘇魯—角色表》
      </h1>
    </div>

    <!-- 上半部分 - TRAITS, HISTORY, PERSONAL AGENDA -->
    <div class="flex flex-col lg:flex-row gap-4 mb-6">
      <!-- 左側 TRAITS -->
      <div class="flex flex-col lg:w-1/2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          特質
        </label>
        <div class="border-2 border-red-900 bg-white flex-1 min-h-64">
          <textarea 
            v-model="traits"
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
            歷史
          </label>
          <div class="border-2 border-red-900 bg-white">
            <textarea 
              v-model="history"
              class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-32"
              placeholder="角色歷史..."
            ></textarea>
          </div>
        </div>

        <!-- PERSONAL AGENDA -->
        <div class="flex flex-col">
          <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
            個人目標
          </label>
          <div class="border-2 border-red-900 bg-white">
            <textarea 
              v-model="personalAgenda"
              class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-32"
              placeholder="個人目標..."
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
          聯絡人
        </label>
        <div class="border-2 border-red-900 bg-white">
          <textarea 
            v-model="contacts"
            class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-40"
            placeholder="聯絡人..."
          ></textarea>
        </div>
      </div>

      <!-- 右側 FACTIONS -->
      <div class="flex flex-col lg:w-1/2">
        <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
          派系
        </label>
        <div class="border-2 border-red-900 bg-white">
          <textarea 
            v-model="factions"
            class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none h-40"
            placeholder="派系關係..."
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 底部 JOURNAL/NOTES -->
    <div class="flex flex-col">
      <label class="bg-red-900 text-white px-2 py-1 text-xs font-bold mb-2 rounded-sm inline-block">
        日誌/筆記
      </label>
      <div class="border-2 border-red-900 bg-white">
        <textarea 
          v-model="journal"
          class="w-full p-3 border-0 bg-transparent font-serif text-sm resize-none"
          style="min-height: 300px;"
          placeholder="日誌與筆記..."
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useCohorsCthvlhvStore } from '~/stores/cohorsCthvlhvStore.js'

// 使用 Pinia store
const store = useCohorsCthvlhvStore()

// 響應式數據，使用 computed 雙向綁定
const traits = computed({
  get: () => store.notes.traits,
  set: (value) => store.updateNotes({ traits: value })
})
const history = computed({
  get: () => store.notes.history,
  set: (value) => store.updateNotes({ history: value })
})
const personalAgenda = computed({
  get: () => store.notes.personalAgenda,
  set: (value) => store.updateNotes({ personalAgenda: value })
})
const contacts = computed({
  get: () => store.notes.contacts,
  set: (value) => store.updateNotes({ contacts: value })
})
const factions = computed({
  get: () => store.notes.factions,
  set: (value) => store.updateNotes({ factions: value })
})
const journal = computed({
  get: () => store.notes.journal,
  set: (value) => store.updateNotes({ journal: value })
})

// 監聽數據管理事件
onMounted(() => {
  // 監聽載入筆記數據事件
  window.addEventListener('loadCharacterData', (event) => {
    if (event.detail) {
      store.loadCharacterData(event.detail)
    }
  })
  
  // 監聽清除筆記數據事件
  window.addEventListener('clearCharacterData', () => {
    store.clearAllData()
  })

  // 監聽獲取筆記數據事件
  window.addEventListener('getNotesData', () => {
    window.characterNotesData = store.notes
  })
})

// 觸發數據變更事件
const triggerDataChange = () => {
  window.dispatchEvent(new CustomEvent('characterDataChanged'))
}

// 監聽 store 變更以觸發自動儲存
watch(() => store.$state, () => {
  console.log('CohorsCthvlhvNotes: Store 資料變更，觸發自動儲存')
  triggerDataChange()
}, { deep: true })
</script>