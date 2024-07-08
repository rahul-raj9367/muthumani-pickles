import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkSizeWarningLimit: 500 * 1024,
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
  },
});
