import { useQuery } from 'react-query'
import { getAllMusicPlaylist, getMusicListRequest } from '@/service/apis/music-list'
import { useParams } from 'react-router'

export function useMusicListQuery() {
  const param = useParams()

  return useQuery(['music-list', param.id], () => getMusicListRequest(+param.id!))
}

export function useAllMusicListQuery() {
  const param = useParams()

  return useQuery(['playlist-all', param.id], () => getAllMusicPlaylist(+param.id!))
}
