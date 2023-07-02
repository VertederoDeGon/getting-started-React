import { useContext, useMemo } from 'react'
import { CartContext } from '../contexts/CartsProvider'

export function useCart () {
  const cartContext = useContext(CartContext)
  const { cart, addToCart, clearCart, removeFromCart } = cartContext

  if (cartContext === undefined)
    throw new Error('useCart must be within a CartProvider')

  const itemsAdded = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  )

  return { cart, itemsAdded, addToCart, clearCart, removeFromCart }
}
