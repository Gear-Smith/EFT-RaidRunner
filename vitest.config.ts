/// <reference types="vitest" />
import path from 'path';
// import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // plugins: [react()],
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/public/**'],
    environment: "jsdom",
    globals: true,
    setupFiles: ["./__tests/setup.ts"],
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});