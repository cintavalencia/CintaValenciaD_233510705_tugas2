import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref(false)
  
  // Initialize theme based on user preference or system preference
  const initializeTheme = () => {
    // Check local storage
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }
    
    // Apply theme
    applyTheme()
  }
  
  // Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
    // Save preference to localStorage
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  
  // Apply theme to document
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  // Watch for changes and apply theme
  watch(isDark, () => {
    applyTheme()
  })
  
  return {
    isDark,
    toggleTheme,
    initializeTheme
  }
})