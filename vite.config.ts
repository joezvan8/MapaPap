import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"), 
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@stylesheets": path.resolve(__dirname, "./src/stylesheets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@features": path.resolve(__dirname, "./src/features"),
    }
  }
})
