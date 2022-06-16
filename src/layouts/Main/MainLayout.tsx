import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { MiniPlayer } from '@/components/mini-player/mini-player'
import { MainFooter } from '@/layouts/Main/MainFooter'

export function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/main') {
      navigate('explore')
    }
  }, [location])

  return <>
    <Box>
      <Box className={'w-screen h-screen bg-[#F4F4F4]'}>
        <Outlet />
      </Box>
      <MiniPlayer />
      <MainFooter />
    </Box>
  </>
}
