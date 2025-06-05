<script setup>
import { ref } from 'vue';
import { useThemeStore } from '../../stores/theme';
import ThemeToggle from './ThemeToggle.vue';

const isMobileMenuOpen = ref(false);
const themeStore = useThemeStore();

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-10">
    <div class="flex items-center justify-between h-16 px-4 md:px-6">
      <div class="flex items-center">
        <button
          @click="toggleMobileMenu"
          class="mobile-menu-button"
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <router-link to="/" class="flex items-center ml-2 lg:ml-0">
          <img src="/vite.svg" alt="Logo" class="h-8 w-8 mr-2" />
          <span class="font-bold text-lg text-gray-900 dark:text-white">Vue 3 Guide</span>
        </router-link>
      </div>
      <div class="flex items-center">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>