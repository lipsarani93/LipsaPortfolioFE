import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  define: {
    'process.env': {}
  },
  plugins: [react()],
};