<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue'

const toResource = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-200">
    <PageHeader>
      <template #pageHeaderText>ABOUT</template>
    </PageHeader>
    <div class="flex-grow overflow-y-auto pl-2 pr-2 pt-12 md:ml-48">
      <div class="flex flex-col md:flex-row">
        <div class="md:flex-shrink-0">
          <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
            <a href="#">
              <img class="rounded-t-lg" src="@/assets/hobbies/nba.png" alt="" />
            </a>
            <div class="p-5">
              <blockquote class="text-xl font-semibold italic text-gray-900">
                <svg
                  class="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path
                    d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
                  />
                </svg>
                <p class="text-justify text-orange-700">
                  "Logical and results-driven full stack developer dedicated to building and
                  optimizing user-focused websites and applications."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div class="md:ml-6 md:w-170">
          <div class="flow-root">
            <div class="my-4 text-justify text-2xl text-gray-700">
              Welcome to my personal website! My name is
              <span
                class="cursor-pointer text-2xl font-bold text-green-500"
                @click="toResource('https://www.linkedin.com/in/gang-yang-8a394a142/')"
                >Gang Yang</span
              >, I am a full stack developer based in Adelaide, South Australia.
            </div>
          </div>
          <div class="flow-root">
            <div class="my-4 text-justify text-2xl text-gray-700">
              Although my career has taken some twists and turns - from a PTE Instructor to a
              software engineer role at the very beginning. However, I am truly grateful to
              <span
                class="text-2xl font-bold text-green-500 hover:cursor-pointer"
                @click="toResource('https://frvr.com/')"
                >FRVR</span
              >
              for giving me the opportunity to realize the joy that programming can bring and the
              deep satisfaction I feel from bringing happiness to millions, or even billions, of
              players.
            </div>
          </div>
          <div class="flow-root">
            <div class="my-4 text-justify text-2xl text-gray-700">
              Now, I am a highly-skilled software development professional with over 4 years of
              experience in JavaScript/TypeScript and Golang development. I have particular
              expertise in Vue.js, Docker, Kubernetes, RESTful API, and NoSQL database development.
            </div>
          </div>
          <div class="flow-root">
            <div class="my-4 text-justify text-2xl text-gray-700">
              I can work well under pressure and consistently meets deadlines while delivering
              high-quality work. Highly motivated by full stack development, with additional
              experience in H5 game development and mobile development using React-Native.
            </div>
          </div>
          <div class="flow-root">
            <div class="my-4 font-mono text-base text-gray-700">
              Current Focus:
              <span class="text-green-500">Vue.js</span>,
              <span class="text-green-500">Golang</span>,
              <span class="text-green-500">Microservices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
