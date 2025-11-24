import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // Abre automáticamente el navegador
    hmr: true, // Hot Module Replacement habilitado
    watch: {
      usePolling: true, // Útil en Windows para detectar cambios
    }
  },
  build: {
    sourcemap: true
  }
})
