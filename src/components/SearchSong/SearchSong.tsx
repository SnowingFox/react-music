import { Box, IconButton } from '@mui/material'
import { useQuery } from 'react-query'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getSearchHotRequest } from '@/service/api/explore'

export function SearchSong() {
  const { isLoading, isError, data } = useQuery('searchHotWords', getSearchHotRequest)

  return <>
    <Box className="center flex-[5] bg-white rounded-full px2">
      <IconButton>
        <i className="i-carbon:search"/>
      </IconButton>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        className="max-h-5 text-holder"
        loop={true}
        modules={[Autoplay]}
      >
        {
          (isLoading || isError)
            ? <p>搜索...</p>
            : data && data?.result?.hots.map(item =>
            <SwiperSlide key={item.first}>{item.first}</SwiperSlide>)
        }
      </Swiper>
    </Box>
  </>
}
