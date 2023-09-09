import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from 'services/http'
import { authState } from 'types/AuthTypes'

const initialState = {
  atoken: '',
  utoken: '',
  authLoading: 'idle'
} as authState

export const signupUser = createAsyncThunk(
  'user/signup',
  async (body: object) => {
    const response = await requests.post('/auth/signup-user', body)
    return { token: response.token }
  }
)
export const signinUser = createAsyncThunk(
  'user/signin',
  async (body: object) => {
    const response = await requests.post('/auth/login-user', body)
    return { token: response.token }
  }
)
export const signinAdmin = createAsyncThunk(
  'admin/signin',
  async (body: object) => {
    const response = await requests.post('/auth/login-admin', body)
    return { token: response.token }
  }
)

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      delete state?.atoken
      delete state?.utoken
      window.location.reload()
    },
    resetAuthLoading(state) {
      state.authLoading = 'idle'
    }
  },
  extraReducers(builder) {
    // Admin Sign in
    builder.addCase(signinAdmin.fulfilled, (state, action) => {
      state.atoken = action.payload.token
      state.authLoading = 'idle'
    }),
      builder.addCase(signinAdmin.pending, (state) => {
        state.authLoading = 'pending'
      }),
      builder.addCase(signinAdmin.rejected, (state) => {
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
