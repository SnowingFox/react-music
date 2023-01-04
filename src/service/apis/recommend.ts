import { request } from '@/service/request'

export function getRecommendBanner() {
  return request<IGETBannerResponseType>({
    url: '/banner',
    params: {
      type: 2,
    },
  })
}
