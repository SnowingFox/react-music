import React from 'react'
import { useMusicListQuery } from '@/shared/swr/music-list'
import { IconButton, Typography } from '@mui/material'
import { RightIcon } from '@/components/Icons/Icons'

const Description: React.FC<{ desc: string }> = ({ desc }) => {
  return (
    <div className={'w-full flex items-center'}>
      <div className={'max-w-90vw text-white/65 text-xs ellipsis'}>{desc}</div>
      <IconButton className={'!p0 !text-white/75'}>
        <RightIcon />
      </IconButton>
    </div>
  )
}

const UserInfo = () => {
  const { data } = useMusicListQuery()

  return (
    <div className={'ml16px flex1'}>
      <Typography variant={'subtitle1'} className={'text-white pb-2'}>
        {data?.playlist.name}
      </Typography>
      <div className={'y-center'}>
        <div className={'w-20px h-20px rounded-full bg-gray/50 overflow-hidden'}>
          <LazyLoadImage src={data?.playlist.creator.avatarUrl} />
        </div>
        <p className={'text-xs text-white/65 pl2'}>{data?.playlist.creator.nickname}</p>
      </div>
    </div>
  )
}

const CoverImage: React.FC<{ url?: string }> = ({ url }) => {
  return (
    <div className={'flex1'}>
      <div className={'w-120px h-120px rounded-lg bg-gray/50 overflow-hidden'}>
        <LazyLoadImage src={url} />
      </div>
    </div>
  )
}

const ShareButtonGroups = () => {
  const { data, isLoading } = useMusicListQuery()

  return (
    <div className={'flex justify-around'}>
      <Button variant="outlined" className={'flex1'}>
        Share
      </Button>
      <Button variant="outlined" className={'flex1'}>
        Comments
      </Button>
      <Button variant="outlined" className={'flex1'}>
        Collect
      </Button>
    </div>
  )
}

export function MusicListHeaderInfo() {
  const { data, isSuccess } = useMusicListQuery()

  return (
    <div className={'grid gap3'}>
      <div className={'flex relative'}>
        <CoverImage url={data?.playlist?.coverImgUrl} />
        <UserInfo />
      </div>
      {isSuccess && <Description desc={data?.playlist?.description} />}
      <ShareButtonGroups />
    </div>
  )
}
