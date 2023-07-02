import Filters from '../Filters/Filters'

export default function Header () {
  console.log('HEADER')
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters />
    </header>
  )
}
