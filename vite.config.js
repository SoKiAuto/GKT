// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Travel/", // Already added
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
