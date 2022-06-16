import { Box } from '@mui/material'

export function RecommendPlayList() {
  return <>
    <Box>
      <Box className="y-center justify-between">
        <h2 className="font-semibold text-lg">推荐歌单</h2>
        <Box className={'mdui-ripple text-xs text-holder h-6 flex center b-1 rounded-full px2 b-gray-500/50'}>
          <p>更多</p>
          <i className={'i-ic:baseline-chevron-right text-xs'}/>
        </Box>
      </Box>
    </Box>
  </>
}
