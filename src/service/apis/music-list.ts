import { request } from '@/service/request'

export function getMusicListRequest(id: number) {
  return request<IMusicListResponse>({
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}
