import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import { Mine } from '@/pages/mine/Mine'
import { MainLayout } from '@/layouts/Main/MainLayout'
import Explore from '@/pages/explore/Explore'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/main'} />,
  },
  {
    path: '/main',
    element: <MainLayout />,
    children: [
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'mine',
        element: <Mine />,
      },
    ],
  },
]

export function RootRouter() {
  const routeEl = useRoutes(routes)

  return <>
    {routeEl}
  </>
}
