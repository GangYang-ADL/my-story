<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import WorkHistoryCard from '@/components/WorkHistoryCard/WorkHistoryCard.vue'
import workHistoryData from '@/data/workHistory.json'
</script>

<template>
  <div class="flex h-screen flex-col">
    <div>
      <PageHeader>
        <template #pageHeaderText>EXPERIENCE</template>
      </PageHeader>
    </div>
    <div class="flex-grow bg-gray-200">
      <div class="mb-4 mt-4 flex justify-center">
        <div class="mx-auto my-0 space-y-20">
          <WorkHistoryCard
            v-for="workHistory in workHistoryData"
            :key="workHistory.companyName"
            :title="workHistory.title"
            :companyLogo="workHistory.companyLogo"
            :companyName="workHistory.companyName"
            :duration="workHistory.duration"
            :jobDetails="workHistory.jobDetails"
          />
        </div>
      </div>
    </div>
  </div>
</template>
