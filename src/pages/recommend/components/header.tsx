import { MenuIcon, SearchIcon } from '@/components/Icons/Icons'
import { useRecommendSearchHotQuery } from '@/shared/swr/recommend'
import { SwiperSlide } from 'swiper/react'
import { LoopBanner } from '@/components/Banner'

export function SearchWordsBanner(props: { data: ISearchHotWordsResponse }) {
  return (
    <LoopBanner slidesPerView={1} direction={'vertical'} className={'max-h-36px !m0'}>
      {props.data?.result?.hots?.map((i) => (
        <SwiperSlide key={i.first} className={'y-center'}>
          <p>{i.first}</p>
        </SwiperSlide>
      ))}
    </LoopBanner>
  )
}

export function RecommendHeader() {
  const { data } = useRecommendSearchHotQuery()

  return (
    <div className={'w-full flex justify-between gap3'}>
      <IconButton className={'!text-xl'}>
        <MenuIcon />
      </IconButton>
      <div className={'bg-white rounded-full y-center gap2 px3  text-gray-400 w-full text-xs overflow-hidden'}>
        <SearchIcon />
        {data ? <SearchWordsBanner data={data} /> : <p>音乐</p>}
      </div>
      <IconButton className={'!text-xl'}>
        <SearchIcon />
      </IconButton>
    </div>
  )
}
