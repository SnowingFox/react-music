import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

const container = createRoot(document.querySelector('#root')!)

container.render(<>
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
</>)
