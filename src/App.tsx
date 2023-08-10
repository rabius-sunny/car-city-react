import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import Categories from 'components/home/Categories'
import Features from 'components/home/Features'
import FullCarousel from 'components/home/FullCarousel'
import ProductBrands from 'components/home/ProductBrands'
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
      <FullCarousel />
      <Features />
      <Categories />
      <ProductBrands />
    </ColorSchemeProvider>
  )
}

export default App
