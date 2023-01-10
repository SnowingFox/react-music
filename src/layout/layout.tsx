import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { Icons } from '@/components/Icons/Icons'

const bottoms = [
  { label: '推荐', value: 'recommend', icon: Icons.NeteaseCloudMusicIcon },
  { label: '播客', value: 'podcast', icon: Icons.RadioPodcastIcon },
  { label: '我的', value: 'mine', icon: Icons.MusicNotes },
  { label: '关注', value: 'following', icon: Icons.Following },
]

export const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [route, setRoute] = useState<string>(location.pathname.split('/')[2])

  useEffect(() => {
    navigate(route)
  }, [route])

  return (
    <Box className={'bg-black/5 w-screen h-screen overflow-hidden'}>
      <div p2>
        <Outlet />
      </div>
      <div className={'fixed bottom-0 w-screen bg-white py1'}>
        <BottomNavigation className={'flex'} showLabels value={route} onChange={(e, newRoute) => setRoute(newRoute)}>
          {bottoms.map((bottom) => {
            return (
              <BottomNavigationAction
                className={'flex-1 text-2xl'}
                key={bottom.value}
                label={bottom.label}
                value={bottom.value}
                icon={bottom.icon}
              />
            )
          })}
        </BottomNavigation>
      </div>
    </Box>
  )
}
