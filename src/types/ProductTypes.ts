export interface IProduct {
  id: string
  title: string
  price: number
  category: string
  description: string
  image: string
}

export interface ICartItem {
  id: string
  title: string
  price: number
  category: string
  image: string
  quantity: number
}

export interface IAllCartItems {
  items: ICartItem[]
}
export interface RootState {
  cart: IAllCartItems
}
