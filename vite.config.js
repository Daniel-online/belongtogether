import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // Allow the specific ngrok host
    // allowedHosts: ['https://02cb-179-100-35-100.ngrok-free.app'],
    // Optionally, if you want to listen on all network interfaces:
    host: true,
  },
  plugins: [react()],
  base: './', // This is important for relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  publicDir: 'public',
})
