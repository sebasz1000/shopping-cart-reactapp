import { useFilters } from '../hooks/useFilters';
import '../styles/filters.css'
import { useId } from 'react';
export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChange = ({ target }) => setFilters(prevState => ({ ...prevState, [target.name]: target.value }))

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Above Price</label>
        <input type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChange}
          value={filters.minPrice}
          name="minPrice" />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>
          Category
        </label>
        <select id={categoryFilterId} name="category" value={filters.category} onChange={handleChange}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  )
}