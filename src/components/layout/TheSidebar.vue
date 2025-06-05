<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSidebarOpen = ref(window.innerWidth >= 1024);
const isSmallScreen = ref(window.innerWidth < 1024);

// Navigation links
const navLinks = [
  { name: 'home', path: '/', label: 'Home' },
  { name: 'declarative-rendering', path: '/declarative-rendering', label: 'Declarative Rendering' },
  { name: 'attribute-bindings', path: '/attribute-bindings', label: 'Attribute Bindings' },
  { name: 'event-listeners', path: '/event-listeners', label: 'Event Listeners' },
  { name: 'form-bindings', path: '/form-bindings', label: 'Form Bindings' },
  { name: 'conditional-rendering', path: '/conditional-rendering', label: 'Conditional Rendering' },
  { name: 'list-rendering', path: '/list-rendering', label: 'List Rendering' },
  { name: 'computed-properties', path: '/computed-properties', label: 'Computed Properties' },
  { name: 'lifecycle-template-refs', path: '/lifecycle-template-refs', label: 'Lifecycle & Template Refs' },
  { name: 'watchers', path: '/watchers', label: 'Watchers' }
];

// Get current route name for highlighting active link
const currentRouteName = computed(() => router.currentRoute.value.name);

// Toggle sidebar visibility
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

// Close sidebar on route change for mobile
watch(() => router.currentRoute.value, () => {
  if (isSmallScreen.value) {
    isSidebarOpen.value = false;
  }
});

// Check screen size and adjust sidebar visibility
const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 1024;
  if (!isSmallScreen.value) {
    isSidebarOpen.value = true;
  } else {
    isSidebarOpen.value = false;
  }
};

// Add resize event listener
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

// Clean up event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <!-- Mobile backdrop -->
  <div
    v-if="isSidebarOpen && isSmallScreen"
    @click="toggleSidebar"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 transition-opacity lg:hidden"
  ></div>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300 transform',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <nav class="p-4 space-y-1">
      <router-link
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        :class="['sidebar-link', { 'active': currentRouteName === link.name }]"
      >
        <span class="ml-3">{{ link.label }}</span>
      </router-link>
    </nav>
  </aside>
</template>