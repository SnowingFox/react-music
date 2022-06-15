import { Box, IconButton } from '@mui/material'

export function ExploreSearch() {
  return <>
    <Box className="flex justify-between text-sm gap1">
      <IconButton>
        <i className="i-heroicons-outline:menu-alt-1 text-2xl" />
      </IconButton>
      <Box className="flex flex-[5] bg-white rounded-full px2">
        <IconButton>
          <i className="i-carbon:search"/>
        </IconButton>
        <p className="text-holder y-center">111</p>
      </Box>
      <IconButton>
        <i className="i-carbon:microphone-filled" />
      </IconButton>
    </Box>
  </>
}

