declare interface IRecommendAlbumResponse {
  hasTaste: boolean
  code: number
  category: number
  result: IRecommendAlbumResponseResult[]
}

declare interface IRecommendAlbumResponseResult {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}
