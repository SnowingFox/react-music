import { join } from 'path'
import * as process from 'process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Components from 'unplugin-react-components/vite'
import { MuiResolver, createResolver } from 'unplugin-react-components'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerAttributifyJsx } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
import { ohmytsVite } from '@ohmyts/vite'
import Inspect from 'vite-plugin-inspect'
import * as dotenv from 'dotenv'

dotenv.config()

function resolve(dir: string): string {
  return join(__dirname, dir)
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  server: {
    host: true,
  },
  plugins: [
    Unocss({
      shortcuts: [
        {
          'center': 'flex items-center justify-center',
          'x-center': 'flex justify-center',
          'y-center': 'flex items-center',
        },
      ],
      presets: [
        presetUno(),
        presetIcons(),
        presetAttributify(),
      ],
      transformers: [
        transformerAttributifyJsx(),
      ],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
      ],
      imports: [
        'react',
      ],
    }),
    react(),
    Components({
      dts: true,
      mode: 'prod',
      resolvers: [
        MuiResolver(),
        createResolver({
          prefix: '',
          module: 'react-lazy-load-image-component',
          style: false,
        })(),
      ],
    }),
    ohmytsVite({
      target: '/api',
      rootDir: resolve('@types'),
      proxyOptions: {
        target: 'https://autumnfish.cn',
      },
      overwrite: false,
    }),
    Inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),
  ],
})
