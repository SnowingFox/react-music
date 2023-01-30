import { useQuery } from 'react-query'
import { getMusicListRequest } from '@/service/apis/music-list'
import { useParams } from 'react-router'

export function useMusicListQuery() {
  const param = useParams()

  return useQuery(['music-list', param.id], () => getMusicListRequest(+param.id!))
}
