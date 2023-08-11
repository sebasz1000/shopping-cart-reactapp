import { useCallback, useContext } from 'react'
import { FiltersContext } from '../context';
import json from '../mocks/products.json'

export const useFilters = () => {
  
  const context = useContext(FiltersContext);
  
  if(!context){
    throw new Error('useFilters hook should be within a context Provider')
  }
  
  const { filters, setFilters } = context
  
  // * IMPORTANT! Aprender filtro!!
  const filteredProducts = useCallback((products) => {
    return products.filter(product => {
      return ((filters.category === 'all' || product.category === filters.category)
        && product.price >= filters.minPrice)
    })
  }, [filters])

  return {
    filteredProducts: filteredProducts(json.products),
    setFilters,
    filters
  }
}