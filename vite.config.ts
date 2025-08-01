import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import tanstackRouter from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    host: process.env.APP_HOST || 'localhost',
    port: Number(process.env.APP_PORT) || 5134,
    strictPort: true,
  },
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
