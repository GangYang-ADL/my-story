<script setup lang="ts">
import HomeIcon from '@/assets/sidebar-icon/home.svg'
import ExperiencesIcon from '@/assets/sidebar-icon/experiences.svg'
import SkillsIcon from '@/assets/sidebar-icon/skills.svg'
import LifeIcon from '@/assets/sidebar-icon/life.svg'
import { ref } from 'vue'

let isMobileMode = ref(false)
const toggleSidebar = () => {
  isMobileMode.value = !isMobileMode.value
  const sidebar = document.getElementById('default-sidebar')
  if (sidebar) {
    sidebar.classList.toggle('-translate-x-full')
  }
}
</script>

<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    @click="toggleSidebar"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
          >
            <HomeIcon class="w-5 h-5" />
            <span class="ml-3">HOME</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'experience' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
          >
            <ExperiencesIcon class="w-5 h-5" />
            <span class="flex-1 ml-3 whitespace-nowrap">EXP</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'skill' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
          >
            <SkillsIcon class="w-5 h-5" />
            <span class="flex-1 ml-3 whitespace-nowrap">SKILL</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'life' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
          >
            <LifeIcon class="w-5 h-5" />
            <span class="flex-1 ml-3 whitespace-nowrap">LIFE</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
  <div
    v-if="isMobileMode"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-30 transition-opacity"
    @click="toggleSidebar"
  ></div>
</template>

<style></style>
