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
  
  //const addToCart = (item) => setCart(prevState => getProductsWithQuantity(item, prevState))
  

  //const removeProductFromCart = (item) => setCart( prevState => prevState.filter( product => product.id !== item.id ))

    
  /*const minusFromCart = (item) => setCart(prevState => {
    const productInCartIndex = prevState.findIndex( product => product.id === item.id )
    if(productInCartIndex < 0)
      return
    const newCart = structuredClone(prevState)
    const product =  newCart[productInCartIndex]
    if( product.quantity > 1){
      product.quantity -= 1;  
      return newCart
    }else{
      return prevState.filter( product => product.id !== item.id)
    }
  }) */
  
  const getQuantityProductInCart = (item) => {
    const product = state.find( product => product.id === item.id )
    return product.quantity
  }
  //const clearCart = () => setCart([])

  
  return{
    cart: state,
    showCart,
    setShowCart,
    //setCart, 
    clearCart,
    checkProductInCart,
    addToCart,
    removeProductFromCart,
    getQuantityProductInCart,
    minusFromCart
  }
}