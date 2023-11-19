import { defineConfig } from 'vite'
import path from "path"
import { fileURLToPath } from "url"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "~/": `${path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src"
      )}/`,
    }
  }
})
