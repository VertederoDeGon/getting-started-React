import { CAT_FACT } from '../hooks/cat-facts-images/api/cat-img-fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_FACT)
    if (!res.ok) throw new Error('Error fetching fact')
    const data = await res.json()
    return data.fact
  } catch (petitionError) {
    console.warn(petitionError)
  }
}
