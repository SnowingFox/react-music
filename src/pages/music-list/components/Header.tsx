import React from 'react'
import { MusicListHeaderAppbar } from '@/pages/music-list/components/HeaderAppbar'
import { MusicListHeaderInfo } from '@/pages/music-list/components/HeaderInfo'

export const MusicListHeader = () => {
  return (
    <Stack spacing={1} className={'w-screen overflow-hidden !px2'}>
      <MusicListHeaderAppbar />
      <MusicListHeaderInfo />
    </Stack>
  )
}
