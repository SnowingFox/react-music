import { join } from 'path'
import presetAttributify from '@unocss/preset-attributify'
import transformerVariantGroup from '@unocss/transformer-variant-group'
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
      shortcuts: {
        'text-holder': 'text-gray-500/80',
        'center': 'flex items-center justify-center',
        'x-center': 'flex justify-center',
        'y-center': 'flex items-center',
      },
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
      ],
      transformers: [
        transformerVariantGroup(),
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
