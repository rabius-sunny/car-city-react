import { Carousel } from '@mantine/carousel'
import Appbar from 'components/shared/Appbar'

export default function FullCarousel() {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', zIndex: 999, width: '100%' }}>
        <Appbar dark />
      </div>
      <Carousel
        controlSize={40}
        controlsOffset='xl'
        loop
        styles={{
          control: {
            backgroundColor: 'red',
            color: 'white'
          }
        }}
      >
        <img
          style={{ width: '100%', height: '100%' }}
          src='/images/slides/slide1.jpg'
          alt='Slide 1'
        />
        <img
          style={{ width: '100%', height: '100%' }}
          src='/images/slides/slide2.jpg'
          alt='Slide 2'
        />
        <img
          style={{ width: '100%', height: '100%' }}
          src='/images/slides/slide3.jpg'
          alt='Slide 3'
        />
      </Carousel>
    </div>
  )
}
