import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // Change to '/' if hosted at the root
  build: {
    chunkSizeWarningLimit: 500 * 1024, // 500 KB threshold
    outDir: 'dist', // Output directory
  },
  server: {
    host: '0.0.0.0',
  },
})