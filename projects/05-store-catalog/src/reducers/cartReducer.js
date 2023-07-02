export const initialCartState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = (cart = []) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export function cartReducer (cart, action) {
  //product = action.payload
  switch (action.type) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { product } = action
      const productInCartIndex = productIdToSearch =>
        cart.findIndex(item => item.id === productIdToSearch)
      const newCart = []

      if (productInCartIndex(product.id) >= 0) {
        newCart = structuredClone(cart)
        newCart[productInCartIndex(product.id)].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      } else {
        // If the product is not in the cart
        newCart = [
          ...cart,
          {
            ...product,
            quantity: 1
          }
        ]
        updateLocalStorage(newCart)
        return newCart
      }
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = action

      if (cart.findIndex(item => item.id === id) >= 0) {
        const newCart = cart.filter(item => item.id !== id)
        updateLocalStorage(newCart)
        return newCart
      }

      break
    }

    case CART_ACTIONS_TYPES.CLEAR_CART:
      updateLocalStorage(initialCartState)
      return initialCartState
  }

  return cart
}
