import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LegalbizAi_chatbot_UI/', // Thêm base path cho GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true, // Allow Vite to listen on 0.0.0.0
    port: 5173, // Ensure Vite listens on port 5173
  },
});
