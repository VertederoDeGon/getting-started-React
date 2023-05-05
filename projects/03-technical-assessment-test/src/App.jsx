/* Prueba técnica para Juniors y Trainees de React en Live Coding.
  +++++++++++++++++++
  Playwright testing

APIs:
- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Mostrar una imagen de un gato con la primera palabra */
import './App.css'
import { useCatFact } from './hooks/cat-facts-images/useCatFact'
import { CatFact } from './components/CatFact'

export default function App () {
  const { fact, refreshFact } = useCatFact()

  const onClickNextFact = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Kitty App</h1>
      <button onClick={onClickNextFact}>Next fact</button>
      <section>
        {fact && <p>{fact}</p>}
        <CatFact fact={fact} alt='Failed fetched cat image' />
      </section>
    </main>
  )
}
