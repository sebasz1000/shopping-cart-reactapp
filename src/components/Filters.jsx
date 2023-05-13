import '../styles/filters.css'
import { useState, useId } from 'react';

export function Filters({ onChangeFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChange = ({ target }) => {
    setMinPrice(target.value)
    onChangeFilters(prevState => ({ ...prevState, [target.name]: target.value }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Above Price</label>
        <input type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChange}
          value={minPrice}
          name="minPrice" />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>
          Category
        </label>
        <select id={categoryFilterId} name="category" onChange={handleChange}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  )
}