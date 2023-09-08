import { authState } from './AuthTypes'
import { IAllCartItems } from './ProductTypes'
import { utilState } from './UtilTypes'

export interface RootState {
  cart: IAllCartItems
  auth: authState
  util: utilState
}
