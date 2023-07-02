import { useContext, useId } from 'react'
import { CartContext } from '../../contexts/CartsProvider'
import { CartIcon, ClearCartIcon } from '../Icons/Icons'
import './Cart.css'
import CartItem from './CartItem'

export default function Cart () {
  const { cart, addToCart, clearCart } = useContext(CartContext)
  const cartCheckBoxId = useId()

  const handleClickRemoveCart = event => {
    clearCart()
  }

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => {
                addToCart(product)
              }}
              {...product}
            />
          ))}
        </ul>

        <button className='clear-button' onClick={handleClickRemoveCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
