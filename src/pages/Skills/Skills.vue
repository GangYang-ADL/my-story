<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import SkillCard from '@/components/SkillCard/SkillCard.vue'
import skillsData from '@/data/skills.json'
</script>

<template>
  <div class="flex h-screen flex-col">
    <div>
      <PageHeader>
        <template #pageHeaderText>SKILLS</template>
      </PageHeader>
    </div>
    <div class="flex-grow bg-gray-200">
      <div class="mx-auto my-0 max-w-full p-6">
        <SkillCard :skillsData="skillsData" />
      </div>
    </div>
  </div>
</template>
