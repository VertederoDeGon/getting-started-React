import { useCart } from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './../Icons/Icons'
import './Products.css'
export default function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  console.log('PRODUCTS')

  const isItInCart = productId =>
    cart.some(productInCart => productInCart.id === productId)

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isAdded = isItInCart(product.id)
          // If I use <ProductItem/> component, the key id is duplicated
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.description} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={
                    isAdded ? { background: '#e22' } : { background: '#55f' }
                  }
                  onClick={() => {
                    isAdded ? removeFromCart(product.id) : addToCart(product)
                  }}
                >
                  {isAdded ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
