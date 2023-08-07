import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import Appbar from 'components/shared/Appbar'
import { useState } from 'react'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <Appbar />
    </ColorSchemeProvider>
  )
}

export default App
