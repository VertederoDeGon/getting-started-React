const API_KEY = '942331f6'

export async function searchMovies ({ search }) {
  if (search === '') return null
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await res.json()
    const movies = json.Search

    return movies.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year
    }))
  } catch (e) {
    throw new Error('Error while fetching the movies')
  }
}
