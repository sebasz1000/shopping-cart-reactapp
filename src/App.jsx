
/*
  1. Ecommerce
  -  Show a product list from a JSON file
  - Add a filter by category
  - Add a filte by price
  
  Use useContext to avoid passing unnecesary props
  
  2. Shopping Cart
  
  - Make add products intro a car
  - Make delete products from the car available
  - Make modifying products quantity from the car available
  - Syncronize car changes with the products list
  - Save the car into localStorange to fetch this state on page reload


*/


import { Products, Header, Footer, Cart } from './components'
import { CartContextProvider } from './context'


export function App() {


  return (
    <div className='page'>
      <CartContextProvider>
        <Header />
        <Cart />
        <Products />
        <Footer />
      </CartContextProvider>
    </div>
  )
}
