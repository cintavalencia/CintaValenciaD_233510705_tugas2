<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '../stores/theme'
import Sidebar from '../components/Sidebar.vue'
import MobileNav from '../components/MobileNav.vue'

const themeStore = useThemeStore()
const route = useRoute()
const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const pageTitle = computed(() => {
  return route.meta.title
})
</script>

<template>
  <div class="bg-[#FFFBF5]  dark:bg-gray-800 h-screen flex flex-col md:flex-row overflow-hidden"> 
  <!-- Sidebar (desktop) -->
    <Sidebar class="hidden md:flex flex-col h-full" />

    <!-- Main content -->
    <main class="flex-1 flex flex-col overflow-hidden">
      <!-- Top navigation bar -->
      <nav class="sticky top-0 z-30 bg-[#FFFBF5] dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div class="px-4 py-3 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <button @click="toggleMobileNav"
              class="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 h-8 w-8 flex items-center justify-center"
              aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="text-xl font-bold truncate m-0 leading-tight">{{ pageTitle }}</h1>
          </div>

          <div class="flex items-center space-x-4">
          
          </div>
        </div>
      </nav>

      <!-- Page content -->
      <div class="flex-1 overflow-y-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>

    <!-- Mobile navigation (slides in from left) -->
    <MobileNav :is-open="isMobileNavOpen" @close="isMobileNavOpen = false" />
  </div>
</template>
