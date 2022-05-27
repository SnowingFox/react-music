import { Box } from '@mui/material'
import { RootRouter } from './route'

function App() {
  return <>
    <div id={'app'} className={'w-screen h-screen'}>
      <Box>
        <RootRouter />
      </Box>
    </div>

  </>
}

export default App
