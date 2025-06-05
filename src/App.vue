<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import AppLayout from './layouts/AppLayout.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initializeTheme()
})
</script>

<template>
  <AppLayout />
</template>