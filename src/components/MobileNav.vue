<template>
  <div 
    class="fixed inset-0 z-50 md:hidden"
    v-if="isOpen"
    @click="emit('close')"
  >
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300"></div>

    <!-- Drawer from bottom -->
    <div
      class="absolute bottom-0 left-0 right-0 max-h-[85%] bg-white dark:bg-gray-900 rounded-t-2xl shadow-xl overflow-y-auto transition-transform duration-300 ease-out"
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
      @click.stop
    >
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <span class="text-lg font-extrabold text-gray-900 dark:text-white tracking-wide">Vue 3 Docs</span>
        <button 
          @click="emit('close')" 
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="item in navigationItems" :key="item.name">
            <button
              @click="navigateTo(item.name)"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group relative"
              :class="[isActive(item.name)
                ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800']"
            >
              <span class="text-xl">{{ iconMap[item.icon] || '📁' }}</span>
              <span class="text-base">{{ item.title }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const route = useRoute()
const router = useRouter()

const navigationItems = [
  { name: 'home', title: 'Home', icon: 'home' },
  { name: 'declarative-rendering', title: 'Declarative Rendering', icon: 'template' },
  { name: 'attribute-bindings', title: 'Attribute Bindings', icon: 'link' },
  { name: 'event-listeners', title: 'Event Listeners', icon: 'click' },
  { name: 'form-bindings', title: 'Form Bindings', icon: 'form' },
  { name: 'conditional-rendering', title: 'Conditional Rendering', icon: 'branch' },
  { name: 'list-rendering', title: 'List Rendering', icon: 'list' },
  { name: 'computed-properties', title: 'Computed Properties', icon: 'calculator' },
  { name: 'lifecycle-template-refs', title: 'Lifecycle & Template Refs', icon: 'cycle' },
  { name: 'watchers', title: 'Watchers', icon: 'eye' }
]

const iconMap = {
  home: '🏠',
  template: '📄',
  link: '🔗',
  click: '🖱️',
  form: '📝',
  branch: '🌿',
  list: '📋',
  calculator: '🧮',
  cycle: '🔄',
  eye: '👁️'
}

const isActive = (name) => route.name === name
const navigateTo = (name) => {
  router.push({ name })
  emit('close')
}

watch(() => route.fullPath, () => emit('close'))
</script>
