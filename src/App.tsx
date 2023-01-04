import React from 'react'
import 'uno.css'
import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from './router/router'
import 'swiper/css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
