import { useAppSelector } from 'hooks/redux'
import { Navigate } from 'react-router-dom'

export default function PrivateAdmineRoute({ children }: any) {
  const token = useAppSelector((state) => state.auth.atoken)

  return token ? children : <Navigate to='/login/admin' />
}
