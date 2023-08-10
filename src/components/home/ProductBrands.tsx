import { Carousel } from '@mantine/carousel'
import brands from 'assets/fakedata/brands'
import AppContainer from 'components/custom/AppContainer'
import SectionHeader from 'components/shared/SectionHeader'

export default function ProductBrands() {
  return (
    <AppContainer className='pt-10 pb-10'>
      <SectionHeader
        className='mb-5'
        title='top quality partners'
        header='shop by brands'
      />
      <Carousel
        loop
        align='start'
        slideGap='xl'
        controlSize={40}
        styles={{
          control: {
            backgroundColor: 'red',
            color: 'white'
          }
        }}
      >
        {brands.map((item: string, idx: number) => (
          <div
            style={{ border: '1px solid #e5e5e5' }}
            className='carousel'
            key={idx}
          >
            <img src={item} alt='brand logo' />
          </div>
        ))}
      </Carousel>
    </AppContainer>
  )
}
