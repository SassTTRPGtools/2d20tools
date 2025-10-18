<template>
  <div class="character-creation-step">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">🎨 最終修飾</h2>
      <p class="text-gray-600 text-lg">
        完善你的角色，計算最終數值，並為角色賦予生命。
      </p>
    </div>

    <div class="text-center py-12">
      <div class="text-6xl mb-4">🚧</div>
      <h3 class="text-xl font-bold mb-2">此步驟正在開發中</h3>
      <p class="text-gray-600 mb-4">最終修飾功能將在後續版本中實現</p>
    </div>

    <div class="flex justify-between">
      <button 
        @click="$emit('prev-step')"
        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        上一步
      </button>
      <button 
        @click="$emit('finish-creation')"
        class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        完成角色建立
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['finish-creation', 'prev-step'])
defineProps({
  characterData: {
    type: Object,
    default: () => ({})
  }
})
</script>