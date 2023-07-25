import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
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
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            // override dark colors to change them for all components
            'my-color': [
              'black',
              'skyblue',
              'green',
              'yellow',
              'aqua',
              'darkblue',
              'orange',
              'red',
              'aqua',
              'blue'
            ],
            dark: [
              '#009dff',
              '#acaebf',
              '#8c8fa3',
              '#666980',
              '#4d4f66',
              '#34354a',
              '#2b2c3d',
              '#101936',
              '#0c0d21',
              '#01010a'
            ]
          }
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div>
          Init <button onClick={() => toggleColorScheme()}>toggle</button>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
