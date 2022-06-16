import { Box, IconButton } from '@mui/material'
import { SearchSong } from '@/components/SearchSong/SearchSong'

export function Search() {
  return <>
    <Box className="flex justify-between text-sm gap1">
      <IconButton>
        <i className="i-heroicons-outline:menu-alt-1 text-2xl" />
      </IconButton>
      <SearchSong />
      <IconButton>
        <i className="i-carbon:microphone-filled" />
      </IconButton>
    </Box>
  </>
}

