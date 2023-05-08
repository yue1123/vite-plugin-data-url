import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { base64Import } from 'vite-plugin-base64-import'

export default defineConfig({
  plugins: [vue(), base64Import()]
})
