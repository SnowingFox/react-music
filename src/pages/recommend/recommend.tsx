import { RecommendBanner } from '@/pages/recommend/components/banner'
import { RecommendHeader } from '@/pages/recommend/components/header'
import { RecommendAlbum } from '@/pages/recommend/components/album'

const Recommend: React.FC = () => {
  return (
    <Stack spacing={2} className={'p2'}>
      <RecommendHeader />
      <RecommendBanner />
      <RecommendAlbum />
    </Stack>
  )
}

export default Recommend
