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
    class="relative max-w-2xl cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0"
  >
    <button @click="openModal">
      <img
        class="rounded-lg"
        :src="'./src/assets/hobbies/' + props.imgUrl"
        alt="image description"
      />
    </button>
  </figure>
</template>
