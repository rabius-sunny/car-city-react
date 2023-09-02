import { Button, Grid } from '@mantine/core'
import { IconHeart } from '@tabler/icons-react'
import AppContainer from 'components/custom/AppContainer'

export default function Deal() {
  return (
    <AppContainer className='wrapper'>
      <div className='mt-15 mb-15'>
        <Grid>
          <Grid.Col span={9}>
            <div className='items-stretch bg-white pt-10 pb-8 ps-3 pe-3'>
              <img
                height='400px'
                src='/images/categories/tires.jpg'
                alt='tires'
              />
              <div>
                <h2>SUNT IN CULPA BACK WHEEL</h2>
                <h1 className='text-red mt-5 fs-5'>
                  $50.00 <del className='text-darkgray ms-1 fs-4'>$55.00</del>
                </h1>
                <p className='fs-4 mt-8 text-darktext'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  commodi doloribus eos odio, nihil hic repellendus molestiae
                  vel architecto repellat.
                </p>
                <div className='mt-8 items-center gap-3'>
                  <Button color='red'>Add to cart</Button>
                  <Button variant='outline' color='red'>
                    <IconHeart fill='red' color='white' />
                  </Button>
                </div>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={3}>
            <div className=''>
              <img src='/images/others/sideDeal.jpg' alt='deal' />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </AppContainer>
  )
}
