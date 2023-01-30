import { BackArrowIcon } from '@/components/Icons/Icons'
import React from 'react'
import { useNavigate } from 'react-router'

export function MusicListHeaderAppbar() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <AppBar className={'!relative !bg-transparent !shadow-none'}>
      <Toolbar className={'flex gap4 !px0'}>
        <IconButton className={'!text-white'} onClick={handleBackClick}>
          <BackArrowIcon />
        </IconButton>
        <Typography variant={'h6'}>歌单</Typography>
      </Toolbar>
    </AppBar>
  )
}
