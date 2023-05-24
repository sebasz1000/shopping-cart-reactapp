import { useState, useReducer } from 'react'
import { CartContext } from "./cartContext"
import { cartReducer } from '../reducers/cartReducer'

const initState = []


export function CartContextProvider({ children }) {
  //const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, initState)
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeProductFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const minusFromCart = (product) => dispatch({
    type: 'MINUS_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

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