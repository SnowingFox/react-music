import type { ReactNode } from 'react'
import React from 'react'
import { Navigate } from 'react-router'

export const AuthGuard: React.FC<{ children: ReactNode }> = (props) => {
  const [isLogin] = useState(true)

  if (!isLogin) return <Navigate to={'/auth'} />

  return <>{props.children}</>
}
