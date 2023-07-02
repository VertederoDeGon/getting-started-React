import { useCart } from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
export default function ProductItem ({
  id,
  thumbnail,
  description,
  price,
  title
}) {
  const { cart, addToCart, removeFromCart } = useCart()

  const isItInCart = productId =>
    cart.some(productInCart => productInCart.id === productId)

  return (
    <li>
      <img src={thumbnail} alt={description} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <div>
        <button
          style={
            isItInCart(id) ? { background: '#e22' } : { background: '#55f' }
          }
          onClick={() => {
            isItInCart(id) ? removeFromCart(id) : addToCart(id)
          }}
        >
          {isItInCart(id) ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  )
}
