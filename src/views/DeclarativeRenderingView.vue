<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
</script>

<template>
  <div>
    <PageHeader 
      title="Declarative Rendering" 
    />

    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Salah satu fitur inti dari Vue adalah <strong>declarative rendering</strong>, yaitu cara mendeklarasikan tampilan antarmuka (UI) berdasarkan data atau state dari JavaScript.
          Ketika data berubah, Vue akan secara otomatis memperbarui tampilan tanpa perlu manipulasi DOM secara manual.
        </p>
        <img 
          src="/images/codeDeclarativeRendering.png" 
          alt="Illustration of declarative rendering" 
          class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="showImageModal = true"
        />
        <p class="text-sm text-center text-gray-500 dark:text-gray-400">
          Klik gambar untuk memperbesar
        </p>
      </div>
    </ContentCard>

    
  </div>
</template>
