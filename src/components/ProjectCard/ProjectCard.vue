<script setup lang="ts">
const { name, description, url, img, repo } = defineProps({
  name: String,
  description: String,
  url: String,
  img: String,
  repo: String,
})
</script>

<template>
  <div class="container mx-auto">
    <div class="max-w-xs rounded-lg bg-white p-4 shadow-lg">
      <img :src="`./src/assets/projects/${img}`" alt="Project Image" class="object-fit" />
      <h2 class="mb-2 mt-2 text-xl font-bold">{{ name }}</h2>
      <p class="mb-4 text-gray-600">{{ description }}</p>
      <div class="flex justify-between">
        <a v-if="url" :href="`${url}`" target="_blank" class="text-blue-600 hover:underline"
          >Link</a
        >
        <a v-if="repo" :href="`${repo}`" target="_blank" class="text-blue-600 hover:underline"
          >Repository</a
        >
      </div>
    </div>
  </div>
</template>
