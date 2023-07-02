import { createContext, useMemo } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export default function CartProvider ({ children }) {
  const { cart, addToCart, clearCart, removeFromCart } = useCartReducer()

  const cartContextValue = useMemo(
    () => ({
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }),
    [cart]
  )

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}
