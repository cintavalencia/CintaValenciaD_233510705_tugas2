<template>
  <aside class="w-64 bg-gradient-to-b from-[#FFFBF5] to-[#F3ECE3] dark:from-gray-900 dark:to-gray-800 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col shadow-lg z-20">
    <!-- Logo -->
    <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide">Vue 3</span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto p-4 space-y-2">
      <ul class="space-y-1">
        <li v-for="item in navigationItems" :key="item.name">
          <button
            @click="navigateTo(item.name)"
            class="group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 relative overflow-hidden"
            :class="[isActive(item.name)
              ? 'bg-white dark:bg-gray-700 text-primary-700 dark:text-primary-400 font-semibold shadow-sm'
              : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-700/50']"
          >
            <!-- Left active indicator -->
            <span
              v-if="isActive(item.name)"
              class="absolute left-0 top-0 h-full w-1 bg-primary-600 rounded-r-lg"
            ></span>

            <!-- Emoji icon -->
            <span class="text-xl relative z-10">
              {{ iconMap[item.icon] || '📁' }}
            </span>
            <span class="relative z-10">{{ item.title }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navigationItems = [
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
const navigateTo = (name) => router.push({ name })
</script>
