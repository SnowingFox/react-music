import { request } from '@/service/request'

export function getRecommendBanner() {
  return request<IRecommendBannersResponse>({
    url: '/banner',
    params: {
      type: 2,
    },
  })
}

export function getSearchHotRequest() {
  return request<ISearchHotWordsResponse>({
    url: '/search/hot',
  })
}

export function getRecommendAlbumListRequest() {
  return request<IRecommendAlbumResponse>({
    url: '/personalized',
    params: {
      limit: 6,
    },
  })
}
