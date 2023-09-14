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
import { IconAlertOctagon } from '@tabler/icons-react'
import { showNotification } from '@mantine/notifications'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetAuthStatus, signinAdmin } from 'features/states/authSlice'

export default function AuthAdmin() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  interface loginData {
    email: string
    password: string
  }
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
  const handleLogin = (values: loginData) => dispatch(signinAdmin(values))

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
        message: 'wrong credtials, try again',
        color: 'red',
        icon: <IconAlertOctagon />,
        className: 'my-notification-class',
        sx: { backgroundColor: '#ffb0b0' },
        loading: false
      })
    state.auth.atoken && navigate('/dashboard/supplier')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.auth.authStatus])

  return (
    <Container size='sm'>
      <div className='border-2 py-12 px-4 mt-8 rounded-lg'>
        <Title order={1} mb={20} align='center' color='blue'>
          Sign in Admin
        </Title>

        <Box sx={{ maxWidth: 300 }} mx='auto'>
          <form onSubmit={signinForm.onSubmit((values) => handleLogin(values))}>
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
              {state.auth.authStatus === 'pending' ? (
                <Loader size='xs' color='white' />
              ) : (
                'Log in'
              )}
            </Button>
          </form>
        </Box>
      </div>
    </Container>
  )
}
