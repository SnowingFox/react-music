import React from 'react'

export const MusicListCoverImage: React.FC<{ data?: IMusicListResponse }> = ({ data }) => {
  return (
    <div className={'z-1'}>
      <div className={'absolute w-screen h-screen bg-black/50 z-2'} />
      <LazyLoadImage
        className={'absolute w-screen h-screen object-cover z-1 blur-2xl'}
        src={data?.playlist?.coverImgUrl}
      />
    </div>
  )
}
