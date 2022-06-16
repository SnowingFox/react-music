import { Box } from '@mui/material'
import { RootRouter } from './route'

function App() {
  return <>
    <div id={'app'} className={'w-screen min-h-screen overflow-hidden'}>
      <Box>
        <RootRouter />
      </Box>
    </div>

  </>
}

export default App
