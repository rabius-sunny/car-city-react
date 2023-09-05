import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import Blog from 'components/home/Blog'
import Categories from 'components/home/Categories'
import Contact from 'components/home/Contact'
import Deal from 'components/home/Deal'
import { Faq } from 'components/home/Faq'
import Features from 'components/home/Features'
import FullCarousel from 'components/home/FullCarousel'
import NewArrivals from 'components/home/NewArrivals'
import ProductBrands from 'components/home/ProductBrands'
import Subscribe from 'components/home/Subscribe'
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
      <NewArrivals />
      <Blog />
      <Faq />
      <Contact />
      <Subscribe />
    </ColorSchemeProvider>
  )
}

export default App
