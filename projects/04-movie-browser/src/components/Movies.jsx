import noMoviesResulst from './../assets/woocommerce-placeholder.png/'

export default function Movies ({ movies }) {
  const hasMovies = movies.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResulsts />
}

export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <h3 className='movie-title'>{movie.title}</h3>
          <p className='movie-year'>{movie.year}</p>
          <img
            className='movie-img'
            src={movie.poster === 'N/A' ? noMoviesResulst : movie.poster}
            alt={movie.title}
          />
        </li>
      ))}
    </ul>
  )
}

export function NoMoviesResulsts () {
  return <p>There is no movie for this search</p>
}
