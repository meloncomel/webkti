import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🔴 GANTI dengan NAMA REPO GitHub kamu
// contoh: https://username.github.io/bimbingan-kti/
// maka base = '/bimbingan-kti/'
const repoName = 'webkti'

export default defineConfig({
  plugins: [react()],

  base: `/${repoName}/`,

  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsDir: 'assets',
    emptyOutDir: true
  },

  server: {
    port: 5173,
    open: true
  },

  preview: {
    port: 4173
  },

  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
