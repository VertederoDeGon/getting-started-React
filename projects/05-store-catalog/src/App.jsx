import './App.css'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { IS_DEVELOPMENT } from './config'
import CartProvider from './contexts/CartsProvider'
import { useFilters } from './hooks/useFilters'
import json from './mocks/products.json'
function App () {
  const initialProducts = structuredClone(json.products)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  )
}

export default App
