import { useContext } from 'react'
import  { CartContext } from '../context'
import { getProductsWithQuantity } from '../helpers/getProductsWithQuantity';

export const useCart = () => {
   const context = useContext(CartContext);
   const {cart, setCart, showCart, setShowCart }  = context
   
   if(context === undefined)
    throw new Error('useCart must be used within a CartProvider')
    
  const checkProductInCart = (item) => cart.some( product => product.id === item.id )
  
  const addToCart = (item) => setCart(prevState => getProductsWithQuantity(item, prevState))
  
  const removeProductFromCart = (item) => {
    setCart( prevStatus => prevStatus.filter( product => product.id !== item.id ))
  }
  
  
  const clearCart = () => setCart([])
  
  return{
    cart,
    showCart,
    setShowCart,
    setCart, 
    clearCart,
    checkProductInCart,
    addToCart,
    removeProductFromCart
  }
}