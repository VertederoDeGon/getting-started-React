import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'
export default function Filters () {
  const { filters, changeFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  console.log('FILTERS')

  const handleChangeMinPrice = event => {
    changeFilters({ minPrice: event.target.value })
  }

  const handleChangeCategory = event => {
    changeFilters({ category: event.target.value })
  }

  return (
    <div className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price: </label>
        <input
          id={minPriceFilterId}
          type='range'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category: </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops 💻</option>
          <option value='smartphones'>Smartphones 📱</option>
          <option value='home-decoration'>Home decoration 🏠</option>
          <option value='fragrances'>Fragrances 🌼</option>
          <option value='skincare'>Skincare 😊</option>
          <option value='groceries'>Groceries 🏪</option>
        </select>
      </div>
    </div>
  )
}
