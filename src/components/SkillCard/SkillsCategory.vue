<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
})

const categoryClass = computed(() => {
  const categoryMappings: { [key: string]: string } = {
    'CI/CD': 'bg-CI/CD',
    Framework: 'bg-Framework',
    Engine: 'bg-Engine',
    SaaS: 'bg-SaaS',
    IaC: 'bg-IaC',
    Database: 'bg-Database',
    Library: 'bg-Library',
    'Programming-Language': 'bg-Programming-Language',
    'Version-Control': 'bg-Version-Control',
    Architecture: 'bg-Architecture',
    Virtualization: 'bg-Virtualization',
    Runtime: 'bg-Runtime',
    Validation: 'bg-Validation',
    API: 'bg-API',
    'Payment-Gateway': 'bg-Payment-Gateway',
    'Message-Broker': 'bg-Message-Broker',
    Containerization: 'bg-Containerization',
    IaaS: 'bg-IaaS',
    Monitoring: 'bg-Monitoring',
    Testing: 'bg-Testing',
    Authentication: 'bg-Authentication',
    Tunneling: 'bg-Tunneling',
    Web: 'bg-Web',
    Graphics: 'bg-Graphics',
    Tools: 'bg-Tools',
    BaaS: 'bg-BaaS',
    'Scripting-Language': 'bg-Scripting-Language',
    Serialization: 'bg-Serialization',
    Firebase: 'bg-Firebase',
  }

  const category = props.category
  const classMapping = categoryMappings[category] as string

  return classMapping ? [classMapping] : []
})
</script>

<template>
  <span
    class="mr-2 inline-flex items-center rounded-full border-2 bg-opacity-70 px-2.5 py-0.5 text-xs text-white"
    :class="categoryClass"
    >{{ props.category }}</span
  >
</template>
