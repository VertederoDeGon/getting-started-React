import { useContext } from 'react'
import { FiltersContext } from '../contexts/FiltersProvider'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  //for small apps:
  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  const changeFilters = ({ minPrice, category }) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: minPrice ?? prevFilters.minPrice,
      category: category ?? prevFilters.category
    }))
  }

  //todo to compare
  // const filterProducts = useCallback(
  //   products => {
  //     return products.filter(product => {
  //       return (
  //         product.price >= filters.minPrice &&
  //         (filters.category === 'all' || product.category === filters.category)
  //       )
  //     })
  //   },
  //   [filters.minPrice, filters.category]
  // )

  // const changeFilters = useCallback(
  //   ({ minPrice, category }) => {
  //     setFilters(prevFilters => ({
  //       ...prevFilters,
  //       minPrice: minPrice ?? prevFilters.minPrice,
  //       category: category ?? prevFilters.category
  //     }))
  //   },
  //   [filters.minPrice, filters.category]
  // )

  return { filters, changeFilters, filterProducts }
}
