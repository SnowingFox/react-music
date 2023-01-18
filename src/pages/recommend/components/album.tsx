import { useRecommendAlbum } from '@/shared/swr/recommend'
import { LoopBanner } from '@/components/Banner'
import { SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import React from 'react'

const AlbumItem: React.FC<{ data: IRecommendAlbumResponseResult }> = ({ data }) => {
  return (
    <Stack spacing={1}>
      <LazyLoadImage src={data?.picUrl} className={'w-120px h-120px rounded-lg'}></LazyLoadImage>
      <p className={'line-clamp-2 text-xs text-ellipsis overflow-hidden'}>{data.name}</p>
    </Stack>
  )
}

function AlbumList() {
  const { data } = useRecommendAlbum()
  return (
    <LoopBanner
      direction={'horizontal'}
      slidesPerView={3}
      spaceBetween={5}
      loop={false}
      modules={[FreeMode]}
      freeMode={true}
    >
      {data?.result.map((item) => (
        <SwiperSlide key={item.id}>
          <AlbumItem data={item} />
        </SwiperSlide>
      ))}
    </LoopBanner>
  )
}

export function RecommendAlbum() {
  return (
    <Stack spacing={1}>
      <h2 font-bold>推荐歌单</h2>
      <AlbumList />
    </Stack>
  )
}
