import { useReducer } from 'react'
import {
  CART_ACTIONS_TYPES,
  cartReducer,
  initialCartState as initialCart
} from '../reducers/cartReducer'

export function useCartReducer () {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  const addToCart = product => {
    dispatch({
      type: CART_ACTIONS_TYPES.ADD_TO_CART,
      product: product
    })
  }
  const removeFromCart = productId => {
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
      id: productId
    })
  }

  const clearCart = () => {
    dispatch({
      type: CART_ACTIONS_TYPES.CLEAR_CART
    })
  }

  return { cart, addToCart, removeFromCart, clearCart }
}
