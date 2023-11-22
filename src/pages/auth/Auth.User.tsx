import {
  TextInput,
  Button,
  Box,
  Title,
  Space,
  Loader,
  createStyles,
  rem,
  Badge
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconAlertOctagon, IconUserCircle } from '@tabler/icons-react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  resetAuthStatus,
  signinUser,
  signupUser
} from 'features/states/authSlice'
import { removeFrom } from 'features/states/utilSlice'

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)'
  },
  form: {
    height: '100vh',
    maxWidth: rem(450),
    background: 'white',
    padding: '5rem 1rem 2rem 1rem',
    overflowY: 'scroll',

    [theme.fn.smallerThan(992)]: {
      maxWidth: '100%'
    }
  },
  box: {
    [theme.fn.smallerThan(992)]: {
      maxWidth: rem(400),
      margin: 'auto'
    }
  }
}))

export default function AuthUser() {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  interface signupData {
    name: string
    email: string
    phone: string
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
      phone: '',
      phone2: '',
      address: '',
      password: ''
    },
    validate: {
      name: (value) => (value.length < 2 ? 'name is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (value.length < 5 ? 'phone is required' : null),
      phone2: (value) =>
        value.length < 5 ? 'additional phone is required' : null,
      address: (value) => (value.length < 2 ? 'address is required' : null),
      password: (value) =>
        value.length < 4 ? 'length must be 4 or larger' : null
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
        value.length > 4 ? null : 'length must be 4 or larger'
    }
  })
  const handleLogin = (values: loginData) => dispatch(signinUser(values))
  const handleSignup = (values: signupData) => dispatch(signupUser(values))

  useEffect(() => {
    dispatch(resetAuthStatus())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    state.auth.authStatus === 'error' &&
      showNotification({
        id: 'hello-there',
        autoClose: 5000,
        title: 'Error',
        message: 'Error in authenticating, try again',
        color: 'red',
        icon: <IconAlertOctagon />,
        className: 'my-notification-class',
        sx: { backgroundColor: '#ffb0b0' },
        loading: false
      })
    if (state.util.from && state.auth.utoken) {
      navigate(state.util.from)
      dispatch(removeFrom())
    } else if (!state.util.from && state.auth.utoken) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.auth.authStatus])

  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        {isLogin ? (
          <Title order={1} mb={20} align='center' color='red'>
            Sign in User
          </Title>
        ) : (
          <Title order={1} mb={20} align='center' color='red'>
            Sign up User
          </Title>
        )}
        {isLogin ? (
          <Box className={classes.box}>
            <form
              onSubmit={signinForm.onSubmit((values) => handleLogin(values))}
            >
              <TextInput
                withAsterisk
                label='Email'
                placeholder='you@email.com'
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
                {state.auth.authStatus === 'pending' ? (
                  <Loader size='xs' color='white' />
                ) : (
                  'Log in'
                )}
              </Button>
            </form>
            <div className='mt-8 text-center'>
              <Badge
                component='button'
                onClick={() => setIsLogin(false)}
                leftSection={<IconUserCircle />}
                styles={{
                  root: { cursor: 'pointer' },
                  leftSection: { height: '80%' }
                }}
                color='red'
                size='xl'
                radius='sm'
              >
                Hey! New here? Sign Up
              </Badge>
            </div>
          </Box>
        ) : (
          <Box className={classes.box}>
            <form
              onSubmit={signupForm.onSubmit((values) => handleSignup(values))}
            >
              <TextInput
                withAsterisk
                label='Your Name'
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
                label='Location'
                placeholder='street, zip, state, country'
                {...signupForm.getInputProps('address')}
              />

              <Button mt={20} type='submit'>
                {state.auth.authStatus === 'pending' ? (
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
              <Badge
                component='button'
                onClick={() => setIsLogin(true)}
                leftSection={<IconUserCircle />}
                styles={{
                  root: { cursor: 'pointer' },
                  leftSection: { height: '80%' }
                }}
                color='red'
                size='xl'
                radius='sm'
              >
                Login to yours
              </Badge>
            </div>
          </Box>
        )}
      </div>
    </div>
  )
}
