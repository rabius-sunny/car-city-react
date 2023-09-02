import { Grid } from '@mantine/core'
import AppContainer from 'components/custom/AppContainer'
import Products from 'components/products/Products'

export default function NewArrivals() {
  return (
    <div>
      <Products title='top sale in the week' header='new arrivals' />
      <AppContainer className='pt-5 pb-10'>
        <Grid>
          <Grid.Col xs={12} sm={6}>
            <img
              width='100%'
              src='/images/others/new1.jpg'
              alt='new arrival card'
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            <img
              width='100%'
              src='/images/others/new2.jpg'
              alt='new arrival card'
            />
          </Grid.Col>
        </Grid>
      </AppContainer>
    </div>
  )
}
