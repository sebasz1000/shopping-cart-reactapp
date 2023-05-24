import { useContext } from 'react'
import  { CartContext } from '../context'



export const useCart = () => {
   const context = useContext(CartContext);
   const { 
      state,
      addToCart,
      removeProductFromCart,
      minusFromCart,
      clearCart,
      showCart,
      setShowCart 
   }  = context

   if(context === undefined)
    throw new Error('useCart must be used within a CartProvider')
    
  const checkProductInCart = (item) => state.some( product => product.id === item.id )

  const getQuantityProductInCart = (item) => {
    const product = state.find( product => product.id === item.id )
    return product.quantity
  }
    
  return{
    cart: state,
    showCart,
    setShowCart,
    clearCart,
    checkProductInCart,
    addToCart,
    removeProductFromCart,
    getQuantityProductInCart,
    minusFromCart
  }
}