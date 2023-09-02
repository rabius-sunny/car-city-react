import { Grid } from '@mantine/core'
import AppContainer from 'components/custom/AppContainer'
import SectionHeader from 'components/shared/SectionHeader'
import { IProduct } from 'types/ProductTypes'
import ProductCard from './ProductCard'

export default function Products({
  products,
  title,
  header
}: {
  products?: IProduct[]
  title: string
  header: string
}) {
  console.log('products', products)
  return (
    <AppContainer className='mt-10 mb-5'>
      <SectionHeader className='mb-10' title={title} header={header} />
      <Grid>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid.Col xs={12} sm={6} md={4} lg={3} key={item}>
            <ProductCard />
          </Grid.Col>
        ))}
      </Grid>
    </AppContainer>
  )
}
