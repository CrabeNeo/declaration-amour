import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// En production (build pour GitHub Pages), le site est dans le sous-dossier
// /declaration-amour/. En développement (npm run dev), on reste à la racine.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/declaration-amour/' : '/',
  plugins: [react()],
}))
