<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="mb-8 bg-[#FFFBF5] dark:bg-gray-800">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2 ml-4 mt-6">
    
    </h1>
    <p v-if="description" class="text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>