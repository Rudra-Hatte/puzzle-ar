import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    https: false, // Will be handled by Render
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  base: './'
})