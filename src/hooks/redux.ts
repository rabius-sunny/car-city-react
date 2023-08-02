import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import state from 'features/states'
import { RootState } from 'types/ProductTypes'

type AppDispatch = typeof state.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
