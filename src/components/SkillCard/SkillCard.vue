<script setup lang="ts">
import { ref } from 'vue'
import SkillsCategory from './SkillsCategory.vue'

const props = defineProps({
  skillsData: {
    type: Object,
    required: true,
  },
})

const tabs = Object.keys(props.skillsData)
const activeTab = ref(tabs[0])

const handleTabClick = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <div class="mb-4 border-b border-gray-200">
    <ul class="-mb-px flex flex-wrap text-center text-sm font-medium" id="myTab" role="tablist">
      <li class="mr-2" role="presentation" v-for="(tab, index) in tabs" :key="index">
        <button
          class="inline-block rounded-t-lg border-b-2 p-4 text-lg hover:border-green-500 hover:text-green-500"
          :class="{ 'border-green-500 text-green-500': activeTab === tab }"
          :id="`${tab}-tab`"
          type="button"
          role="tab"
          :aria-controls="tab"
          :aria-selected="activeTab === tab"
          @click="handleTabClick(tab)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>
  </div>
  <div id="myTabContent">
    <div
      v-for="tab in tabs"
      v-show="activeTab === tab"
      :id="tab"
      role="tabpanel"
      :aria-labelledby="`${tab}-tab`"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full pr-2 md:w-1/2">
          <div
            v-for="(skill, skillIndex) in props.skillsData[tab].slice(
              0,
              Math.ceil(props.skillsData[tab].length / 2),
            )"
            :key="skillIndex"
            class="mb-2 flex items-center justify-between rounded-lg bg-gray-50 p-3"
          >
            <span class="mr-2 font-bold">{{ skill.name }}</span>
            <SkillsCategory :category="skill.category" />
          </div>
        </div>
        <div class="w-full md:w-1/2 md:pl-2">
          <div
            v-for="(skill, skillIndex) in props.skillsData[tab].slice(
              Math.ceil(props.skillsData[tab].length / 2),
            )"
            :key="skillIndex"
            class="mb-2 flex items-center justify-between rounded-lg bg-gray-50 p-3"
          >
            <span class="mr-2 font-bold">{{ skill.name }}</span>
            <SkillsCategory :category="skill.category" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
