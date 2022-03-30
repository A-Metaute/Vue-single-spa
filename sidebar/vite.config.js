import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: 'http://localhost',
  server: {
    port: 3010,
    strictPort: true
  },
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}

/* export default defineConfig({
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: 'http://localhost:3010',
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}) */