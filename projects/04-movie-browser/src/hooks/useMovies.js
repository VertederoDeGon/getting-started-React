import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)

  const sortedMovies = useMemo(() => {
    console.log({ sort: 'HAS CHANGED', movies: 'HAS CHANGED' })
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : structuredClone(movies)
  }, [sort, movies])

  const updateMoviesSearch = useCallback(
    async ({ search }) => {
      if (prevSearch.current === search) return

      try {
        setIsLoading(true)
        const newMovies = await searchMovies({ search })
        prevSearch.current = search
        setMovies(newMovies)
        setError(null)
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    },
    [search]
  )

  return { movies: sortedMovies, getMovies: updateMoviesSearch, isLoading }
}
