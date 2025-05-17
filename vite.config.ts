import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // or set your sub-path if needed
  build: {
    outDir: 'dist'
  }
})


