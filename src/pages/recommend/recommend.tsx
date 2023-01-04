import { MenuIcon, SearchIcon } from '@/components/Icons/Icons'
import { RecommendBanner } from '@/pages/recommend/components/banner'

function Header() {
  return (
    <div className={'w-full flex justify-between gap3'}>
      <IconButton className={'!text-xl'}>
        <MenuIcon />
      </IconButton>
      <div
        bg-white
        rounded-full
        px3
        y-center
        gap2
        text-gray-400
        w-full
        text-xs
      >
        <SearchIcon />
        <p>曾经收藏: 7% - XM</p>
      </div>
      <IconButton className={'!text-xl'}>
        <SearchIcon />
      </IconButton>
    </div>
  )
}

const Recommend: React.FC = () => {
  return (
  <Stack spacing={2}>
    <Header />
    <RecommendBanner />
  </Stack>
  )
}

export default Recommend
