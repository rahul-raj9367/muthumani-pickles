import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/muthumani-pickles/",
  build: {
    chunkSizeWarningLimit: 500 * 1024,// Set your custom threshold here (500 KB in this example)
    outDir: 'dist', // Check that 'dist' is specified as the output directory 
  },
  server: {
    host: '0.0.0.0',
  },
})
