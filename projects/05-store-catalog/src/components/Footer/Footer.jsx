import { useCart } from '../../hooks/useCart'
import './Footer.css'
export default function Footer () {
  //show current states

  const { cart, itemsAdded } = useCart()
  console.log({ cart })
  console.log({ itemsAdded })
  return (
    <footer className='footer'>
      <span>Products added: {JSON.stringify(itemsAdded, null, 2)}</span>
    </footer>
  )
}
