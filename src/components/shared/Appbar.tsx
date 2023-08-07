import { Button, TextInput } from '@mantine/core'
import { IconHeart, IconSearch, IconShoppingCart } from '@tabler/icons-react'
import AppContainer from 'components/custom/AppContainer'

export default function Appbar() {
  return (
    <div>
      <div className='text-white h-5 line-5 bg-black'>
        <AppContainer>
          <div className='items-center justify-between'>
            <div className='items-center justify-between gap-3'>
              <div className='items-center gap-1'>
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
          <div className='items-center justify-between gap-5 h-10'>
            <div>
              <img src='/images/logo.png' alt='logo' />
            </div>
            <div className='items-center gap-2' style={{ flexGrow: 1 }}>
              <TextInput
                style={{ flexGrow: 1 }}
                placeholder='search product here'
                icon={<IconSearch stroke={1.5} size={18} />}
              />
              <Button variant='outline' color='gray'>
                <IconHeart fill='black' color='black' />
              </Button>
              <Button variant='outline' color='gray'>
                <IconShoppingCart fill='black' color='black' />
              </Button>
            </div>
          </div>
        </AppContainer>
        <div className='bg-red'>
          <AppContainer>
            <div className='items-center gap-4'>
              <p className='bg-black text-white ps-3 pe-3'>ALL CATEGORIES</p>
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
