import { useAppSelector } from 'hooks/redux'
import { Navigate } from 'react-router-dom'

export default function PrivateSellerRoute({ children }: any) {
  const token = useAppSelector((state) => state.auth.stoken)

  return token ? children : <Navigate to='/login/user' />
}
