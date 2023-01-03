/// <reference types="vite/client" />
// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-react" />

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
