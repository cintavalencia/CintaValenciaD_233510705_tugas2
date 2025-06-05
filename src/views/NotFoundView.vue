<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12">
    <h1 class="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
    <h2 class="text-2xl font-semibold mb-6">Page Not Found</h2>
    
    <p class="mb-8 text-center max-w-md">
      The page you're looking for doesn't exist or has been moved.
    </p>
    
    <button @click="goHome" class="btn btn-primary">
      Go to Home Page
    </button>
  </div>
</template>