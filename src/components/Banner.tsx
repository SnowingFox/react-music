import { Swiper, SwiperProps } from 'swiper/react'
import React, { ReactNode } from 'react'
import { Autoplay } from 'swiper'

type Props = {
  children: ReactNode
} & SwiperProps

export const LoopBanner: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Swiper loop={true} autoplay={{ delay: 3000 }} modules={[Autoplay]} {...props}>
      {children}
    </Swiper>
  )
}
