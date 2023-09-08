import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './authSlice'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const state = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(state)
export default state
