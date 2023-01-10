import { useQuery, UseQueryOptions } from 'react-query'
import { cacheKey } from '@/shared/swr/keys'
import { getRecommendAlbumListRequest, getRecommendBanner, getSearchHotRequest } from '@/service/apis/recommend'

export function useRecommendBannerQuery() {
  const result = useQuery(cacheKey.recommend.banner, getRecommendBanner)

  return result
}

export function useRecommendSearchHotQuery() {
  const result = useQuery(cacheKey.recommend.searchHot, getSearchHotRequest)

  return result
}

export function useRecommendAlbum() {
  return useQuery(cacheKey.recommend.album, getRecommendAlbumListRequest)
}
