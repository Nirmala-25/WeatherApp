import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    strictPort: true
  },
  preview: {
    port: process.env.PORT || 4173,
    strictPort: true
  }
});
