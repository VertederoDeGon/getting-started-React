import { useEffect, useState } from 'react'
import { getRandomFact } from '../../services/fact'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // get the fact on page reload
  useEffect(refreshFact, [])

  return {
    fact,
    refreshFact
  }
}
