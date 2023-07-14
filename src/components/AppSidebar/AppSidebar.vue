<script setup lang="ts">
import HomeIcon from '@/assets/sidebar-icon/home.svg'
import ExperiencesIcon from '@/assets/sidebar-icon/experiences.svg'
import SkillsIcon from '@/assets/sidebar-icon/skills.svg'
import LifeIcon from '@/assets/sidebar-icon/life.svg'
import AppSidebarFooter from './AppSidebarFooter.vue'
import { ref } from 'vue'

let isMobileMode = ref(false)
let isDarkMode = ref(false)

const handleSidebarStatusChange = () => {
  isMobileMode.value = !isMobileMode.value
  const sidebar = document.getElementById('default-sidebar')
  if (sidebar) {
    sidebar.classList.toggle('-translate-x-full')
  }
}

const handleThemeChange = (val: boolean) => {
  isDarkMode.value = val
}
</script>

<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2"
    :class="
      isDarkMode
        ? 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
        : 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200'
    "
    @click="handleSidebarStatusChange"
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
    <div
      class="h-full px-3 py-4 overflow-y-autoflex flex flex-col"
      :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-50'"
    >
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="flex items-center p-2 rounded-lg group"
            :class="
              isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-300  text-gray-900'
            "
          >
            <HomeIcon class="w-5 h-5" />
            <span class="ml-3">HOME</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'experiences' }"
            class="flex items-center p-2 rounded-lg group"
            :class="
              isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-300  text-gray-900'
            "
          >
            <ExperiencesIcon class="w-5 h-5" />
            <span class="flex-1 ml-3 whitespace-nowrap">EXP</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'skills' }"
            class="flex items-center p-2 rounded-lg group"
            :class="
              isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-300  text-gray-900'
            "
          >
            <SkillsIcon class="w-5 h-5" />
            <span class="flex-1 ml-3 whitespace-nowrap">SKILLS</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'hobbies' }"
            class="flex items-center p-2 rounded-lg group"
            :class="
              isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-300  text-gray-900'
            "
          >
            <LifeIcon class="w-5 h-5" />
            <span class="flex-1 ml-3 whitespace-nowrap">HOBBIES</span>
          </router-link>
        </li>
      </ul>
      <div class="text-center mt-auto">
        <AppSidebarFooter @changeTheme="handleThemeChange" />
      </div>
    </div>
  </aside>
  <div
    v-if="isMobileMode"
    class="fixed inset-0 z-30 transition-opacity"
    :class="isMobileMode ? 'bg-white-900 bg-opacity-50' : 'bg-gray-900 bg-opacity-50'"
    @click="handleSidebarStatusChange"
  ></div>
</template>
