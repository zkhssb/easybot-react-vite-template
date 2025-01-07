import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
// https://vite.dev/config/

export default defineConfig({
  base: './', // 别删哦,问就是删了用不了
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
})
