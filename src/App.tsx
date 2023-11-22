import { useState } from 'react'
import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import RouteList from 'features/router/Routes.List'

export default function App() {
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
