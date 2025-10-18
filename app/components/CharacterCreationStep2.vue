<template>
  <div class="character-creation-step">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">🌍 選擇你的國籍</h2>
      <p class="text-gray-600 text-lg">
        你來自哪個國家？這將成為你的重要背景和身份認同。
      </p>
    </div>

    <div class="text-center py-12">
      <div class="text-6xl mb-4">🚧</div>
      <h3 class="text-xl font-bold mb-2">此步驟正在開發中</h3>
      <p class="text-gray-600 mb-4">國籍選擇功能將在後續版本中實現</p>
    </div>

    <div class="flex justify-between">
      <button 
        @click="$emit('prev-step')"
        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        上一步
      </button>
      <button 
        @click="$emit('next-step')"
        class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['next-step', 'prev-step', 'select-nationality'])
</script>