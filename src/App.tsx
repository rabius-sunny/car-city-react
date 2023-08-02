import {
  Button,
  ColorScheme,
  ColorSchemeProvider,
} from '@mantine/core'
import { useState } from 'react'
import { IconHeart } from '@tabler/icons-react'
import AppContainer from 'components/custom/AppContainer'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <AppContainer>
        <Button onClick={() => toggleColorScheme()}>
          <IconHeart />
        </Button>
      </AppContainer>
    </ColorSchemeProvider>
  )
}

export default App
