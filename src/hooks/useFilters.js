import { useState, useCallback } from 'react'


export const useFilters = (products) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  //APRENDEEEEERRR!!
  const filteredProducts = useCallback((products) => {
    return products.filter(product => {
      return ((filters.category == 'all' || product.category === filters.category)
        && product.price >= filters.minPrice)
    })
  }, [filters])

  return {
    filteredProducts: filteredProducts(products),
    setFilters,
    filters
  }
}