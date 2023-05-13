
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
import json from './mocks/products.json'
import { useState } from 'react'
import { Products, Header, Footer } from './components'
import { useFilters } from './hooks/useFilters'

export function App() {

  const [products] = useState(json.products);
  const { filteredProducts, setFilters, filters } = useFilters(products)

  return (
    <div className='page'>
      <Header onChangeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer currentFilters={filters} />
    </div>
  )
}