import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const AuthAdmin = lazy(() => import('pages/auth/Auth.Admin'))
const AuthUser = lazy(() => import('pages/auth/Auth.User'))

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login/user' index element={<AuthUser />} />
        <Route path='/login/admin' index element={<AuthAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}
