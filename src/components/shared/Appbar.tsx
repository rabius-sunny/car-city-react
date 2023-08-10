import { Button, TextInput } from '@mantine/core'
import { IconHeart, IconSearch, IconShoppingCart } from '@tabler/icons-react'
import AppContainer from 'components/custom/AppContainer'

export default function Appbar({ dark }: { dark?: boolean }) {
  return (
    <div>
      <div className='line-10'>
        <AppContainer>
          <div
            className={`items-center h-8 justify-between ${
              dark ? 'text-white' : 'text-black'
            }`}
          >
            <div className='items-center justify-between gap-6'>
              <div className='items-center gap-2'>
                <p>logo</p>
                <p>logo</p>
                <p>logo</p>
                <p>logo</p>
              </div>
              <div>
                <p>$ US DOLLOR</p>
              </div>
            </div>
            <div className='items-center'>
              <p>LOGIN / </p>
              <p> REGISTER</p>
            </div>
          </div>
          <div className='items-center justify-between gap-10 h-15'>
            <div>
              <img
                src={dark ? '/images/logo-white.png' : '/images/logo.png'}
                alt='logo'
              />
            </div>
            <div className='items-center gap-4' style={{ flexGrow: 1 }}>
              <TextInput
                style={{ flexGrow: 1 }}
                placeholder='search product here'
                icon={<IconSearch stroke={1.5} size={18} />}
              />
              <Button variant='outline' color='red'>
                <IconHeart fill='red' color={dark ? 'white' : 'red'} />
              </Button>
              <Button variant='outline' color='red'>
                <IconShoppingCart
                  fill='red'
                  color={`${dark ? 'white' : 'red'}`}
                />
              </Button>
            </div>
          </div>
        </AppContainer>
        <div className='bg-red text-white'>
          <AppContainer>
            <div className='items-center gap-4'>
              <p className='bg-black text-white ps-6 pe-6'>ALL CATEGORIES</p>
              <p className='text-white'>HOME</p>
              <p className='text-white'>FEATURES</p>
              <p className='text-white'>PAGES</p>
              <p className='text-white'>CATEGORIES</p>
              <p className='text-white'>ACCESSORIES</p>
              <p className='text-white'>BLOG</p>
            </div>
          </AppContainer>
        </div>
      </div>
    </div>
  )
}
