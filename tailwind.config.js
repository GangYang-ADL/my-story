/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        170: '42.5rem',
        190: '48rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
