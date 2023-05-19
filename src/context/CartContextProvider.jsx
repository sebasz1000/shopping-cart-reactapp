import { useState } from 'react'
import { CartContext } from "./cartContext"

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>)
} 