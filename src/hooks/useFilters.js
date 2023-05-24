import { useCallback, useContext } from 'react'
import { FiltersContext } from '../context';
import json from '../mocks/products.json'

export const useFilters = () => {
  
  const { filters, setFilters } = useContext(FiltersContext);

  //APRENDEEEEERRR!!
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