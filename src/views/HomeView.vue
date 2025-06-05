<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (routeName) => {
  router.push({ name: routeName })
}
</script>

<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold mb-4">Welcome to Learn Vue 3</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Platform untuk mempelajari Vue 3 dengan Composition API 
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="(item, index) in [
          { name: 'declarative-rendering', title: 'Declarative Rendering', description: 'Pelajari cara Vue merender data secara deklaratif ke DOM.' },
          { name: 'attribute-bindings', title: 'Attribute Bindings', description: 'Mengikat nilai atribut dan properti DOM dengan data aplikasi Anda.' },
          { name: 'event-listeners', title: 'Event Listeners', description: 'Tangani interaksi pengguna dengan mendengarkan dan merespons peristiwa DOM.' },
          { name: 'form-bindings', title: 'Form Bindings', description: 'Pelajari binding dua arah dengan elemen formulir untuk input pengguna.' }
        ]" 
        :key="index"
        @click="navigateTo(item.name)"
        class="card hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
        <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
      </div>
    </div>
    
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(item, index) in [
          { name: 'conditional-rendering', title: 'Conditional Rendering', description: 'Tampilkan elemen secara kondisional berdasarkan status aplikasi Anda.' },
          { name: 'list-rendering', title: 'List Rendering', description: 'Render daftar item berdasarkan array data dengan v-for.' },
          { name: 'computed-properties', title: 'Computed Properties', description: 'Buat properti turunan yang dihitung dari data lainnya.' },
          { name: 'lifecycle-template-refs', title: 'Lifecycle & Template Refs', description: 'Pelajari siklus hidup komponen dan cara mengakses elemen DOM.' },
          { name: 'watchers', title: 'Watchers', description: 'Pantau perubahan data dan tanggapi dengan fungsi watcher.' }
        ]" 
        :key="index + 4"
        @click="navigateTo(item.name)"
        class="card hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
