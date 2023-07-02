import debounce from 'just-debounce-it'
import { useCallback, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
// import rejMovies from './mocks/no-results.json'

function App () {
  const [sorted, setSorted] = useState(false)
  const { query, updateQuery, queryError } = useSearch()
  const { movies, getMovies, isLoading } = useMovies({
    search: query,
    sort: sorted
  })

  const searchMoviesDebounce = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300),
    []
  )

  const handleSubmit = event => {
    event.preventDefault()

    // UNCONTROLLED way is to handle it with the DOM tree
    // It is avoided using: useState()[query, setQuery]
    // const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log({ query })
    getMovies({ search: query })
  }
  const handleChange = event => {
    if (event.target.value.startsWith(' ')) return
    updateQuery(event.target.value)
    searchMoviesDebounce(event.target.value)
  }
  const handleSort = () => {
    setSorted(!sorted)
  }
  console.log({ 'Rendering App': movies })
  return (
    <div className='page'>
      <h1>Movie Browser</h1>
      <header>
        <span>
          {queryError && <p style={{ color: '#ee0000' }}>{queryError}</p>}
        </span>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name='query'
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <label>
            <span>Sort</span>
            <input type='checkbox' onChange={handleSort} checked={sorted} />
          </label>
          <button type='submit'>🔍</button>
        </form>
      </header>
      <main className='main'>
        <h2>Results</h2>
        {isLoading ? <h3>LOADING ❗</h3> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
