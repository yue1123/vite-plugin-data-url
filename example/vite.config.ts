import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dataUrlQuery } from 'vite-plugin-data-url-query'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    vue(),
    dataUrlQuery({
      limit: 100
    }),
    inspect()
  ]
})
