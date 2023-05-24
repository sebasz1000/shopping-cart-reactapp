import { getProductsWithQuantity } from '../helpers/getProductsWithQuantity';
import { CART_ACTION_TYPES } from '../types/cart.types';

export const cartReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return getProductsWithQuantity(payload, state)
      break;
    case CART_ACTION_TYPES.MINUS_FROM_CART:
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
    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return state.filter(product => product.id !== payload.id)
      break
    case CART_ACTION_TYPES.CLEAR_CART:
      return []
    default:
      return state
      break;
  }
  return state
}