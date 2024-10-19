// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/quizzing/', // Set this to the subdirectory where your site is hosted
  build: {
    outDir: 'dist', // Ensure this matches the output directory
  },
});
