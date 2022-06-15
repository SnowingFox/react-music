import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import type { LazyExoticComponent, ReactNode } from 'react'
import { Suspense, lazy } from 'react'
import { MainLayout } from '@/layouts/Main/MainLayout'
import type { ComponentProps } from '@/shared/types/utils'

const Loadabel = (Component: LazyExoticComponent<any>) => (props: ComponentProps) => {
  return <>
    <Suspense fallback={<div>loading</div>}>
      <Component {...props}/>
    </Suspense>
  </>
}

const Explore = Loadabel(lazy(() => import('@/pages/explore/Explore')))
const Mine = Loadabel(lazy(() => import('@/pages/mine/Mine')))

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
  return useRoutes(routes)
}
