import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  publicDir: 'public',
  server: {
    watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/public/**'],
    },
  },
})
