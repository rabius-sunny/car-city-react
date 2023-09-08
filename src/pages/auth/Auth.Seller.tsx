import {
  TextInput,
  Button,
  Box,
  Container,
  Title,
  Space,
  Loader
} from '@mantine/core'
import { useForm } from '@mantine/form'
import {
  IconTrademark,
  IconUser,
  IconUserCircle,
  IconAlertOctagon
} from '@tabler/icons-react'
import { showNotification } from '@mantine/notifications'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  resetAuthLoading,
  signinSeller,
  signupSeller
} from 'features/states/authSlice'
import DropZone from 'lib/DropZone'

export default function AuthSeller() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const dispatch = useAppDispatch()
  const [brandImage, setBrandImage] = useState<any>(null)
  const [imageLoading, setImageLoading] = useState(false)
  const state = useAppSelector((state) => state)
  interface formData {
    name: string
    email: string
    password: string
    phone: string
    phone2: string
    address: string
  }
  interface loginData {
    email: string
    password: string
  }
  const signupForm = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      phone2: '',
      address: ''
    },
    validate: {
      name: (value) => (value.length < 2 ? 'name is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 4 ? 'length must be 4 or larger' : null,
      phone: (value) => (value.length < 5 ? 'phone is required' : null),
      phone2: (value) =>
        value.length < 5 ? 'additional phone is required' : null,
      address: (value) => (value.length < 2 ? 'address is required' : null)
    }
  })
  const signinForm = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 4 ? 'length must be 4 or larger' : null
    }
  })
  const handleLogin = (values: loginData) => dispatch(signinSeller(values))
  const handleSignup = (values: formData) =>
    dispatch(signupSeller({ ...values, brand: brandImage }))

  useEffect(() => {
    dispatch(resetAuthLoading())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    state.auth.authLoading === 'error' &&
      showNotification({
        id: 'hello-there',
        autoClose: 5000,
        title: 'Error',
        message: 'error accured while authenticate, try again',
        color: 'red',
        icon: <IconAlertOctagon />,
        className: 'my-notification-class',
        sx: { backgroundColor: '#ffb0b0' },
        loading: false
      })
    state.auth.stoken && navigate('/dashboard/supplier')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.auth.authLoading])

  return (
    <Container size='sm'>
      <div className='border-2 py-12 px-4 mt-8 rounded-lg'>
        {isLogin ? (
          <Title order={1} mb={20} align='center' color='blue'>
            Sign in Supplier
          </Title>
        ) : (
          <Title order={1} mb={20} align='center' color='blue'>
            Sign up Supplier
          </Title>
        )}
        {isLogin ? (
          <Box sx={{ maxWidth: 300 }} mx='auto'>
            <form
              onSubmit={signinForm.onSubmit((values) => handleLogin(values))}
            >
              <TextInput
                withAsterisk
                label='Email'
                {...signinForm.getInputProps('email')}
              />
              <Space h='lg' />
              <TextInput
                withAsterisk
                label='Password'
                type='password'
                placeholder='********'
                {...signinForm.getInputProps('password')}
              />

              <Button mt={20} type='submit'>
                {state.auth.authLoading === 'pending' ? (
                  <Loader size='xs' color='white' />
                ) : (
                  'Log in'
                )}
              </Button>
            </form>
            <div className='flex mt-6 items-center justify-center'>
              <div className='bg-gray-600 h-[1px] w-24 mr-1'></div>
              or
              <div className='bg-gray-600 h-[1px] w-24 ml-1'></div>
            </div>
            <div className='mt-8 flex justify-center'>
              <button
                onClick={() => setIsLogin(false)}
                className='text-primary bg-lite hover:bg-indigo-200 text-lg flex items-center justify-center gap-4 rounded-3xl p-2 pr-3'
              >
                <IconUserCircle />
                <span>Create an account</span>
              </button>
            </div>
            <div className='mt-4 flex justify-center'>
              <button
                onClick={() => navigate('/login/user')}
                className='text-primary bg-lite hover:bg-indigo-200 text-lg flex items-center justify-center gap-4 rounded-3xl p-2 pr-3'
              >
                <IconTrademark />
                <span>Are you an user?</span>
              </button>
            </div>
          </Box>
        ) : (
          <Box sx={{ maxWidth: 300 }} mx='auto'>
            <form
              onSubmit={signupForm.onSubmit((values) => handleSignup(values))}
            >
              <TextInput
                withAsterisk
                label='Company Name'
                {...signupForm.getInputProps('name')}
              />
              <Space h='lg' />
              <TextInput
                withAsterisk
                label='Email'
                placeholder='you@email.com'
                {...signupForm.getInputProps('email')}
              />
              <Space h='lg' />
              <TextInput
                withAsterisk
                label='Password'
                {...signupForm.getInputProps('password')}
              />
              <Space h='lg' />
              <TextInput
                withAsterisk
                label='Phone no.'
                {...signupForm.getInputProps('phone')}
              />
              <Space h='lg' />
              <TextInput
                withAsterisk
                label='Add. Phone no.'
                {...signupForm.getInputProps('phone2')}
              />
              <Space h='lg' />
              <TextInput
                withAsterisk
                label='Address'
                placeholder='street, zip, state, country'
                {...signupForm.getInputProps('address')}
              />
              <Space h='lg' />

              <p className='mt-3 font-bold'>
                Brand logo <span className='text-red-500'>*</span>
              </p>
              <DropZone
                setImage={setBrandImage}
                imageLoading={imageLoading}
                setImageLoading={setImageLoading}
              />

              <Button
                mt={20}
                type='submit'
                className={
                  state.auth.authLoading === 'pending'
                    ? 'pointer-events-none'
                    : ''
                }
              >
                {state.auth.authLoading === 'pending' ? (
                  <Loader size='xs' color='white' />
                ) : (
                  'Sign up'
                )}
              </Button>
            </form>
            <div className='flex mt-6 items-center justify-center'>
              <div className='bg-gray-600 h-[1px] w-24 mr-1'></div>
              or
              <div className='bg-gray-600 h-[1px] w-24 ml-1'></div>
            </div>
            <div className='mt-8 flex justify-center'>
              <button
                onClick={() => setIsLogin(true)}
                className='text-primary bg-lite hover:bg-indigo-200 text-lg flex items-center justify-center gap-4 rounded-3xl p-2 pr-3'
              >
                <IconUser />
                <span>Login to yours</span>
              </button>
            </div>
            <div className='mt-4 flex justify-center'>
              <button
                onClick={() => navigate('/login/user')}
                className='text-primary bg-lite hover:bg-indigo-200 text-lg flex items-center justify-center gap-4 rounded-3xl p-2 pr-3'
              >
                <IconTrademark />
                <span>Are you an user?</span>
              </button>
            </div>
          </Box>
        )}
      </div>
    </Container>
  )
}
