import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* Create an app to browse movies
API todo:
- https://www.omdbapi.com/
- API_KEY: 942331f6 <- Unique

Requirements:
- Show an input to find the movie and a search button ✅
- List find movies and show title, year and poster
- Use responsive grid to show the movies

- Avoid user search the same movie
- Do an autocomplete input while typing
- Avoid browsing  while typing (debounce) https://www.freecodecamp.org/news/javascript-debounce-example/
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
