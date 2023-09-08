import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from 'services/http'

interface userState {
  stoken?: string
  utoken?: string
  authLoading?: 'pending' | 'error' | 'idle'
}

const initialState = {
  stoken: '',
  utoken: '',
  authLoading: 'idle'
} as userState

export const signupSeller = createAsyncThunk(
  'seller/signup',
  async (body: object) => {
    const response = await requests.post('/auth/signup-seller', body)
    return { token: response.token, name: response.name }
  }
)
export const signinSeller = createAsyncThunk(
  'seller/signin',
  async (body: object) => {
    const response = await requests.post('/auth/login-seller', body)
    return { token: response.token, name: response.name }
  }
)
export const signupUser = createAsyncThunk(
  'user/signup',
  async (body: object) => {
    const response = await requests.post('/auth/signup-user', body)
    return { token: response.token, name: response.name }
  }
)
export const signinUser = createAsyncThunk(
  'user/signin',
  async (body: object) => {
    const response = await requests.post('/auth/login-user', body)
    return { token: response.token, name: response.name }
  }
)

const authSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout(state) {
      delete state?.stoken
      delete state?.utoken
      window.location.reload()
    },
    resetAuthLoading(state) {
      state.authLoading = 'idle'
    }
  },
  extraReducers(builder) {
    // seller Sign up
    builder.addCase(signupSeller.fulfilled, (state, action) => {
      state.stoken = action.payload.token
      state.authLoading = 'idle'
    }),
      builder.addCase(signupSeller.pending, (state) => {
        state.authLoading = 'pending'
      }),
      builder.addCase(signupSeller.rejected, (state) => {
        state.authLoading = 'error'
      }),
      // seller Sign in
      builder.addCase(signinSeller.fulfilled, (state, action) => {
        state.stoken = action.payload.token
        state.authLoading = 'idle'
      }),
      builder.addCase(signinSeller.pending, (state) => {
        state.authLoading = 'pending'
      }),
      builder.addCase(signinSeller.rejected, (state) => {
        state.authLoading = 'error'
      }),
      // User Sign in
      builder.addCase(signinUser.fulfilled, (state, action) => {
        state.utoken = action.payload.token
        state.authLoading = 'idle'
      }),
      builder.addCase(signinUser.pending, (state) => {
        state.authLoading = 'pending'
      }),
      builder.addCase(signinUser.rejected, (state) => {
        state.authLoading = 'error'
      }),
      // User Sign up
      builder.addCase(signupUser.fulfilled, (state, action) => {
        state.utoken = action.payload.token
        state.authLoading = 'idle'
      }),
      builder.addCase(signupUser.pending, (state) => {
        state.authLoading = 'pending'
      }),
      builder.addCase(signupUser.rejected, (state) => {
        state.authLoading = 'error'
      })
  }
})

export const { logout, resetAuthLoading } = authSlice.actions
export default authSlice.reducer
