<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-200">
    <PageHeader>
      <template #pageHeaderText>ABOUT</template>
    </PageHeader>
    <div class="flex-grow overflow-y-auto pl-2 pr-2 pt-12 md:ml-48">
      <div class="flex flex-col md:flex-row">
        <div class="md:flex-shrink-0">
          <div
            class="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <a href="#">
              <img class="rounded-t-lg" src="@/assets/avatar.jpg" alt="" />
            </a>
            <div class="p-5">
              <p class="mb-3 font-mono text-orange-500 dark:text-gray-400">
                Logical and results-driven full stack developer dedicated to building and optimizing
                user-focused websites and applications.
              </p>
            </div>
          </div>
        </div>
        <div class="md:ml-6 md:w-170">
          <div class="flow-root">
            <div
              class="my-4 font-mono text-2xl text-gray-700 first-letter:float-left first-letter:text-9xl"
            >
              Highly-skilled software development professional bringing more than 4 years of
              experience in JavaScript/TypeScript and Golang development. Particularly experienced
              in Vue.js, Docker, Kubernetes, RESTful API, and NoSQL database development.
            </div>
          </div>
          <div class="flow-root">
            <div class="my-4 font-mono text-2xl text-gray-700">
              Work well under pressure and consistently meets deadlines while delivering
              high-quality work. Highly motivated by full stack development, with additional
              experience in H5 game development and mobile development using React-Native.
            </div>
          </div>
          <div class="flow-root">
            <div class="my-4 font-mono text-base text-gray-700">
              Current Focus:
              <span class="text-orange-500">Vue.js</span>,
              <span class="text-orange-500">Microservices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
