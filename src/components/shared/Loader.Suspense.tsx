import { Loader } from '@mantine/core'

export default function LoaderSuspense() {
  return (
    <div className='items-center justify-center' style={{ height: '100vh' }}>
      <Loader size='xl' variant='bars' color='red' />
    </div>
  )
}
