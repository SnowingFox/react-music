import { useRecommendAlbum } from '@/shared/swr/recommend'

function AlbumList() {
  const { data, isLoading } = useRecommendAlbum()
  return <div>{isLoading ? <p>loading...</p> : data!.result.map((i) => <p key={i.id}>{i.name}</p>)}</div>
}

export function RecommendAlbum() {
  return (
    <Stack spacing={3}>
      <h2 font-bold>推荐歌单</h2>
      <AlbumList />
    </Stack>
  )
}
