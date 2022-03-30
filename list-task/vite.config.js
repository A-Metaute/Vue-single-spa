import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: 'http://localhost',
  server: {
    port: 3011,
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