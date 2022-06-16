import { Box, Stack } from '@mui/material'

export default function Login() {
  return <>
    <Stack className="bg-[#DD2D20] w-screen h-screen">
      <Box className={'flex-1 center'}>
        <Box className={'w-[75px] h-[75px] center bg-[#F12A25] p2 rounded-full text-3xl'}>
          <i className={'i-ri:netease-cloud-music-line text-white'}/>
        </Box>
      </Box>
      <Box className={'flex-1'}>
        <Box className={'w-full h-full flex justify-center'} />
      </Box>
    </Stack>
  </>
}
