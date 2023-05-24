import { getProductsWithQuantity } from '../helpers/getProductsWithQuantity';


export const cartReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'ADD_TO_CART':
      return getProductsWithQuantity(payload, state)
      break;
    case 'MINUS_FROM_CART':
      const productInCartIndex = state.findIndex(product => product.id === payload.id)
      if (productInCartIndex < 0)
        return state
      const newCart = structuredClone(state)
      const product = newCart[productInCartIndex]
      if (product.quantity > 1) {
        product.quantity -= 1;
        return newCart
      } else {
        return state.filter(product => product.id !== payload.id)
      }
      break;
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== payload.id)
      break
    case 'CLEAR_CART':
      return []
    default:
      break;
  }
  return state
}