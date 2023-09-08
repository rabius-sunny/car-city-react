import { useState } from 'react'
import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import RouteList from 'features/router/Routes.List'

export default function App() {
  // eslint-disable-next-line no-undef
  console.log('env file', process.env.REACT_APP_IMG_API)
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <RouteList />
    </ColorSchemeProvider>
  )
}
