/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alimama': ['"Alimama"', 'sans-serif'],
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}