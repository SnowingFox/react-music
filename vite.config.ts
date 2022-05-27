import { join } from 'path'
import presetAttributify from '@unocss/preset-attributify'
import { presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import presetIcons from '@unocss/preset-icons'

function resolve(dir: string): string {
  return join(__dirname, dir)
}

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),

      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  server: {
    port: 3333,
  },
})
