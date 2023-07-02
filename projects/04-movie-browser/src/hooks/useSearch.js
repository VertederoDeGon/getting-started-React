import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('It is not possible to search for an empty film.')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('It is not possible to search for a film by number.')
      return
    }

    if (search.length < 3) {
      setError('There should not be three blanks.')
      return
    }

    setError(null)
  }, [search])

  return { query: search, updateQuery: setSearch, queryError: error }
}
