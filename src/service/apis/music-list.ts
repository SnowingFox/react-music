import { request } from '@/service/request'

export function getMusicListRequest(id: number) {
  return request<IMusicListResponse>({
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}

export function getAllMusicPlaylist(id: number) {
  return request<IPlaylistAllResponse>({
    url: '/playlist/track/all',
    params: {
      id,
    },
  })
}
