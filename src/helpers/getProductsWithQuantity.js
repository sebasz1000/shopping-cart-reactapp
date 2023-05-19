/**
 * 
 * @param {Object} product  product to add within the products array
 * @param {Object<[]>} productsArray array of products to look repeated item
 * @returns 
 */

export const getProductsWithQuantity = (product, productsArray ) => {
  const productInCartIndex = productsArray.findIndex(item => item.id === product.id)
  if(productInCartIndex >= 0){
    const newCart = structuredClone(productsArray)
    newCart[productInCartIndex].quantity += 1
    return newCart
  } 
  return [...productsArray, { ...product, quantity: 1 }]
}