import { useRoutes } from 'react-router-dom'
import type { LazyExoticComponent } from 'react'
import { Suspense } from 'react'
import { Navigate } from 'react-router'
import { AuthGuard } from '../guard/AuthGuard'
import { Layout } from '../layout/layout'

const Loadable =
  (Component: LazyExoticComponent<any>) => (props: Record<string, any>) => {
    return (
      <Suspense fallback={<p>loading...</p>}>
        <Component {...props} />
      </Suspense>
    )
  }

const Recommend = Loadable(lazy(() => import('@/pages/recommend/recommend')))
const Mine = Loadable(lazy(() => import('@/pages/mine/mine')))
const Podcast = Loadable(lazy(() => import('@/pages/podcast/podcast')))
const Following = Loadable(lazy(() => import('@/pages/following/following')))

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={'/app'} />,
    },
    {
      path: '/app',
      element: (
        <>
          <AuthGuard>
            <Layout />
          </AuthGuard>
        </>
      ),
      children: [
        { element: <Navigate to={'recommend'} />, index: true },
        { path: 'recommend', element: <Recommend /> },
        { path: 'podcast', element: <Podcast /> },
        { path: 'mine', element: <Mine /> },
        { path: 'following', element: <Following /> },
      ],
    },
  ])
}
