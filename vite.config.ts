import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    // Devtools must be first (TanStack guidance).
    // tanstackStart must register the Vite "ssr" environment before nitro.
    devtools(),
    tailwindcss(),
    tanstackStart(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    viteReact(),
    
  ],
  clearScreen: false
})

export default config
