import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { useRecommendBannerQuery } from '@/shared/swr/recommend'
import { LoopBanner } from '@/components/Banner'

const Banners: React.FC<{ data: IRecommendBannersResponse }> = ({ data }) => {
  return (
    <LoopBanner spaceBetween={50} slidesPerView={1} className={'w-full center'}>
      {data.banners.map((item) => (
        <SwiperSlide key={item.pic}>
          <Link href={item.url} className={'center'}>
            <LazyLoadImage src={item.pic} className={'rounded-lg'} />
          </Link>
        </SwiperSlide>
      ))}
    </LoopBanner>
  )
}

const BannerSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" width="100%" className={'pt-38.88%'} />
    </Box>
  )
}

export function RecommendBanner() {
  const { data, isLoading } = useRecommendBannerQuery()

  return <div>{isLoading ? <BannerSkeleton /> : <Banners data={data!} />}</div>
}
