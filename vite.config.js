import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://joecampos07.github.io/25-5-Clock/",
  plugins: [react()],
})
