import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import Categories from 'components/home/Categories'
import Deal from 'components/home/Deal'
import Features from 'components/home/Features'
import FullCarousel from 'components/home/FullCarousel'
import ProductBrands from 'components/home/ProductBrands'
import Products from 'components/products/Products'
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
      <Products title='top sale in the week' header='best seller' />
      <ProductBrands />
      <Deal />
      <Products title='top sale in the week' header='new arrivals' />
    </ColorSchemeProvider>
  )
}

export default App
