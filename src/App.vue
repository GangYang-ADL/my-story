<script setup lang="ts">
import AppSidebar from './components/AppSidebar/AppSidebar.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-64 bg-gray-50 dark:bg-gray-800">
      <AppSidebar />
    </div>
    <div class="flex-grow bg-white dark:bg-gray-900 pt-5 ml-5">
      <router-view />
    </div>
  </div>
</template>
