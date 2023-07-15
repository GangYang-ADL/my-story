<script setup lang="ts">
import AppSidebar from './components/AppSidebar/AppSidebar.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="bg-gray-50 md:w-64">
      <AppSidebar />
    </div>
    <div class="min-w-0 flex-grow overflow-auto bg-white">
      <router-view />
    </div>
  </div>
</template>
