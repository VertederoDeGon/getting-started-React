import { createContext, useMemo, useState } from 'react'

//To consume
export const FiltersContext = createContext()

//To manage (provide) the access to the context
export default function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const contextValue = useMemo(() => {
    return { filters, setFilters }
  }, [filters, setFilters])

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  )
}
