<script setup lang="ts">
import AboutMeIcon from '@/assets/sidebar-icon/aboutme.svg'
import ExperiencesIcon from '@/assets/sidebar-icon/experiences.svg'
import SkillsIcon from '@/assets/sidebar-icon/skills.svg'
import LifeIcon from '@/assets/sidebar-icon/life.svg'
import ProjectsIcon from '@/assets/sidebar-icon/projects.svg'
import AppSidebarHeader from './AppSidebarHeader.vue'
import AppSidebarFooter from './AppSidebarFooter.vue'
import { ref, onBeforeUnmount } from 'vue'

let isSidebarOpen = ref(false)
let isMobileMode = ref(false)

const handleSidebarStatusChange = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  const sidebar = document.getElementById('default-sidebar')
  if (sidebar) {
    sidebar.classList.toggle('-translate-x-full')
  }
}

const mediaQuery = window.matchMedia('(max-width: 767px)')

const handleDeviceModeChange = () => {
  isMobileMode.value = mediaQuery.matches
}

mediaQuery.addEventListener('change', handleDeviceModeChange)
handleDeviceModeChange()

onBeforeUnmount(() => {
  mediaQuery.removeEventListener('change', handleDeviceModeChange)
})
</script>

<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden"
    @click="handleSidebarStatusChange"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="h-6 w-6"
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
    class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="overflow-y-autoflex flex h-full flex-col divide-y-2 bg-gray-50 px-3 py-4">
      <AppSidebarHeader />
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            :to="{ name: 'about' }"
            @click="handleSidebarStatusChange"
            class="group mt-2 flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-300 hover:ring-2 hover:ring-green-500"
            :class="{
              'bg-gray-200 ring-2 ring-green-500': !isMobileMode && $route.name === 'about',
            }"
          >
            <AboutMeIcon class="h-5 w-5" />
            <span class="ml-3">About</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'experiences' }"
            @click="handleSidebarStatusChange"
            class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-300 hover:ring-2 hover:ring-green-500"
            :class="{
              'bg-gray-200 ring-2 ring-green-500': !isMobileMode && $route.name === 'experiences',
            }"
          >
            <ExperiencesIcon class="h-5 w-5" />
            <span class="ml-3 flex-1 whitespace-nowrap">Experience</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'projects' }"
            @click="handleSidebarStatusChange"
            class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-300 hover:ring-2 hover:ring-green-500"
            :class="{
              'bg-gray-200 ring-2 ring-green-500': !isMobileMode && $route.name === 'projects',
            }"
          >
            <ProjectsIcon class="h-5 w-5" />
            <span class="ml-3 flex-1 whitespace-nowrap">Projects</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'skills' }"
            @click="handleSidebarStatusChange"
            class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-300 hover:ring-2 hover:ring-green-500"
            :class="{
              'bg-gray-200 ring-2 ring-green-500': !isMobileMode && $route.name === 'skills',
            }"
          >
            <SkillsIcon class="h-5 w-5" />
            <span class="ml-3 flex-1 whitespace-nowrap">Skills</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'hobbies' }"
            @click="handleSidebarStatusChange"
            class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-300 hover:ring-2 hover:ring-green-500"
            :class="{
              'bg-gray-200 ring-2 ring-green-500': !isMobileMode && $route.name === 'hobbies',
            }"
          >
            <LifeIcon class="h-5 w-5" />
            <span class="ml-3 flex-1 whitespace-nowrap">Hobbies</span>
          </router-link>
        </li>
      </ul>
      <div class="mt-auto text-center">
        <AppSidebarFooter />
      </div>
    </div>
  </aside>
  <div
    v-if="isMobileMode && isSidebarOpen"
    class="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 transition-opacity"
    @click="handleSidebarStatusChange"
  ></div>
</template>
