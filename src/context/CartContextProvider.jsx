import { useState, useReducer, useEffect } from 'react'
import { CartContext } from "./cartContext"
import { cartReducer } from '../reducers/cartReducer'
import { CART_ACTION_TYPES } from '../types/cart.types'


const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initState())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state]);

  const addToCart = (product) => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeProductFromCart = (product) => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const minusFromCart = (product) => dispatch({
    type: CART_ACTION_TYPES.MINUS_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })
  return { state, addToCart, removeProductFromCart, minusFromCart, clearCart }
}

const initState = () => {
  return JSON.parse(localStorage.getItem('cart')) || []
}

export function CartContextProvider({ children }) {

  const { state, addToCart, removeProductFromCart, minusFromCart, clearCart } = useCartReducer()

  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={
      {
        state,
        addToCart,
        removeProductFromCart,
        minusFromCart,
        clearCart,
        showCart,
        setShowCart
      }}>
      {children}
    </CartContext.Provider>)
} 