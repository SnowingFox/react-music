import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from '@/pages/home/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />,
  },
  {
    path: '/home',
    element: <Home />,
  },

]

export function RootRouter() {
  const routeEl = useRoutes(routes)

  return <>
    {routeEl}
  </>
}
