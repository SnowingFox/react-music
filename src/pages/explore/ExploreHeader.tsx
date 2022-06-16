import { Box, Divider, IconButton, Skeleton } from '@mui/material'
import { useQuery } from 'react-query'
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RecommendPlayList } from '@/pages/explore/RecommendPlayList'
import { Search } from '@/pages/explore/Search'
import { getBannerRequest } from '@/service/api/explore'

import './style/pagniation.css'

const customPagination = {
  clickable: true,
  renderBullet(index: number, className: string) {
    return `<span class="${className}"></span>`
  },
}

export function Banner() {
  const { data, isError, isLoading } = useQuery('exploreBanner', getBannerRequest)

  return <>
    <Swiper
      className={'w-full !overflow-visible'}
      direction={'horizontal'}
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={50}
      pagination={customPagination}
    >
      {
        (isError || isLoading)
          ? <Box>
            <Skeleton
              variant="rectangular"
              className={'w-full rounded-lg'}
              height={140}
            />
          </Box>
          : data!.banners.map(item =>
            <SwiperSlide className={'center'} key={item.encodeId}>
              <img
                className={'rounded-lg h-[140px]'}
                src={item.imageUrl}
                alt={''}
              />
            </SwiperSlide>,
          )
      }
    </Swiper>
  </>
}

const Icons = [
  {
    icon: 'carbon:calendar',
    txt: '每日推荐',
  },
  {
    icon: 'carbon:radio',
    txt: '私人FM',
  },
  {
    icon: 'carbon:radio',
    txt: '私人FM1',
  },
  {
    icon: 'carbon:radio',
    txt: '私人FM2',
  },
  {
    icon: 'carbon:radio',
    txt: '私人FM3',
  },
  {
    icon: 'carbon:radio',
    txt: '私人FM4',
  },
]
export function ExploreHeaderIcons() {
  return <>
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="w-full !overflow-visible flex gap2"
    >
      {
        Icons.map(item =>
          <SwiperSlide
            className={'col gap2 text-center'}
            key={item.txt}
          >
            <Box className={'bg-red-500 h-[50px] w-[50px] center p1 rounded-full'}>
              <IconButton>
                <i className={`i-${item.icon} text-2xl text-white`} />
              </IconButton>
            </Box>
            <p className={'text-xs text-holder'}>{item.txt}</p>
          </SwiperSlide>,
        )
      }
    </Swiper>
  </>
}

export function ExploreHeader() {
  return <Box className="col gap4 py-3">
    <Search />
    <Banner />
    <ExploreHeaderIcons />
    <Divider />
    <RecommendPlayList />
  </Box>
}
