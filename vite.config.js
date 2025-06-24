import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/KanDiRa.CA/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
