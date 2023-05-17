
import { useState } from 'react'
//import { useFilters } from '../hooks/useFilters'
import { FiltersContext } from "./filtersContext";


export function FiltersContextProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  //const { filteredProducts, setFilters, filters } = useFilters(products)

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>

  )
}