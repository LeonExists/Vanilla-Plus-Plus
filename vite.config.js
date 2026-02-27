import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Vanilla-Plus-Plus/',
  build: {
    outDir: 'dist'
  }
})
