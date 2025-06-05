<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bg-[#FFFBF5] dark:bg-gray-800  shadow-soft p-6 mb-0">
    <h2 v-if="title" class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
      {{ title }}
    </h2>
    <div>
      <slot></slot>
    </div>
  </div>
</template>