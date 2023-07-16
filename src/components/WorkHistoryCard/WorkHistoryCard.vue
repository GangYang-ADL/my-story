<script setup lang="ts">
const props = defineProps<{
  title: string
  companyLogo: string
  companyName: string
  duration: string
  jobDetails: string[]
}>()
</script>

<template>
  <div
    class="mb-4 block max-w-4xl divide-y-2 divide-dashed divide-gray-200 rounded-lg border border-gray-200 bg-white p-6 shadow"
  >
    <div class="flex items-center pb-6">
      <div class="text-4xl font-bold text-green-500">{{ props.companyName }}</div>
      <div class="flex-grow text-right font-mono text-base text-orange-800">{{ props.title }}</div>
    </div>
    <div>
      <h4 class="m-2 text-lg font-bold">Responsibilites:</h4>
      <ul class="list-disc pl-6">
        <li v-for="detail in props.jobDetails" :key="detail" class="m-2 text-gray-700">
          {{ detail }}
        </li>
      </ul>
    </div>
    <div class="pt-6 text-gray-500">{{ props.duration }}</div>
  </div>
</template>
