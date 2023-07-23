<script setup lang="ts">
const props = defineProps({
  imgUrl: String,
  desc: String,
  name: String,
})

const openModal = () => {
  const modal = document.createElement('div')
  modal.classList.add(
    'fixed',
    'top-0',
    'left-0',
    'w-screen',
    'h-screen',
    'bg-black',
    'bg-opacity-50',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
  )
  modal.innerHTML = `
    <div class="max-w-2xl rounded-lg bg-white p-4">
      <h3 class="text-lg font-semibold mb-2">${props.name}</h3>
      <p class="text-gray-600">${props.desc}</p>
    </div>
  `
  modal.addEventListener('click', () => {
    modal.remove()
  })
  document.body.appendChild(modal)
}
</script>

<template>
  <figure
    class="relative flex max-w-2xl cursor-pointer justify-center grayscale filter transition-all duration-300 hover:grayscale-0"
  >
    <button @click="openModal">
      <div v-if="props.name === 'NBA'">
        <img class="rounded-lg" src="@/assets/hobbies/nba.png" alt="nba" />
      </div>
      <div v-if="props.name === 'dota2'">
        <img class="rounded-lg" src="@/assets/hobbies/dota2.jpeg" alt="dota 2" />
      </div>
    </button>
  </figure>
</template>
