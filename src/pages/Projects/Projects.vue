<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'

import projectsData from '@/data/projects.json'
</script>

<template>
  <div class="flex h-screen flex-col">
    <div>
      <PageHeader>
        <template #pageHeaderText>PROJECTS</template>
      </PageHeader>
    </div>
    <div class="flex-grow bg-gray-200">
      <div class="mb-4 mt-4 flex">
        <div class="mx-auto my-0 md:space-x-16 md:flex">
          <ProjectCard
            v-for="project in projectsData"
            :key="project.name"
            :name="project.name"
            :description="project.description"
            :url="project.url"
            :img="project.img"
            :repo="project.repo"
            class="m-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>
