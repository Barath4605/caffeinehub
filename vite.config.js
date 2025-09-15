import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  base: '/caffeinehub/dist',
  build: {
    rollupOptions: {
      external: ['react-icons/fi'],
    },
  },
})
