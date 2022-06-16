import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './index.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import 'mdui'
import 'mdui/dist/css/mdui.min.css'

const container = createRoot(document.querySelector('#root')!)

const queryClient = new QueryClient()

container.render(<>
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
</>)
