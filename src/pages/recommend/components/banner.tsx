import { useQuery } from 'react-query'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cacheKey } from '@/shared/swr/keys'
import { getRecommendBanner } from '@/service/apis/recommend'

const Banners: React.FC<{ data: IGETBannerResponseType }> = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className={'!px2 w-full'}
      loop={true}
      autoplay={true}
    >
      {data.banners.map(item => (
        <SwiperSlide key={item.pic}>
          <Link href={item.url}>
            <LazyLoadImage src={item.pic} className={'rounded-lg'}/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const BannerSkeleton = () => {
  return <Box className={'px2 h-120px'}>
    <Skeleton variant="rectangular" width="100%" />
  </Box>
}

export function RecommendBanner() {
  const { data, isLoading } = useQuery(cacheKey.recommend.banner, getRecommendBanner)

  return (
    <div>
      {isLoading
        ? <BannerSkeleton />
        : <Banners data={data.data} />
      }
    </div>
  )
}
