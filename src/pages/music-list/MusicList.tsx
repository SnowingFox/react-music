import { useNavigate, useParams } from 'react-router'
import { isNumber } from '@/shared/utils/is'
import React from 'react'
import { MusicListCoverImage } from '@/pages/music-list/coverImage'
import { MusicListHeader } from '@/pages/music-list/components/Header'
import { useMusicListQuery } from '@/shared/swr/music-list'
import { MusicListPlaylist } from '@/pages/music-list/components/Playlist'

export default function MusicList() {
  const param = useParams()
  const navigate = useNavigate()

  const { data } = useMusicListQuery()

  useEffect(() => {
    if (!isNumber(parseInt(param.id!))) {
      navigate(-1)
    }
  }, [param])

  return (
    <div className={'w-screen h-screen overflow-hidden bg-black/10'}>
      <div>
        <MusicListCoverImage data={data} />
        <div className={'absolute top-0 z-2 w-screen  overflow-hidden'}>
          <MusicListHeader />
          <MusicListPlaylist />
        </div>
      </div>
    </div>
  )
}
