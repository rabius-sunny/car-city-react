import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './authSlice'
import cartSlice from './cartSlice'
import utilSlice from './utilSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  util: utilSlice
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart', 'util']
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
