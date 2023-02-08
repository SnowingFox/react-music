import { useAllMusicListQuery } from '@/shared/swr/music-list'
import { Loading } from '@/components/Loading'
import { formatAlbumAuthorNames } from '@/shared/utils/utils'

const Playlist = () => {
  const { data } = useAllMusicListQuery()

  console.log(data)

  return (
    <List>
      {data?.songs.map((item, index) => (
        <ListItem key={item.id} className={'!pl0 flex'}>
          <div className={'min-w-40px text-center text-black/50'}>{index + 1}</div>
          <ListItemText className={'ellipsis'} secondary={`${formatAlbumAuthorNames(item.ar)} - ${item.al.name}`}>
            {item.name}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export function MusicListPlaylist() {
  const { isLoading } = useAllMusicListQuery()

  return <div className={'bg-white rounded-t-lg mt5'}>{isLoading ? <Loading /> : <Playlist />}</div>
}
