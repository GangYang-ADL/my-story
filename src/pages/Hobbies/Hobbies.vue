<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import HobbyCard from '@/components/HobbyCard/HobbyCard.vue'
import hobbyData from '@/data/hobbies.json'
</script>

<template>
  <div class="flex h-screen flex-col">
    <div>
      <PageHeader>
        <template #pageHeaderText>HOBBIES</template>
      </PageHeader>
    </div>
    <div class="flex-grow bg-gray-200">
      <div class="mb-4 mt-4 flex justify-center">
        <div class="mx-auto my-0 md:flex">
          <HobbyCard
            v-for="hobby in hobbyData"
            :key="hobby.imgUrl"
            :imgUrl="hobby.imgUrl"
            :desc="hobby.desc"
            :name="hobby.name"
            class="m-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>
