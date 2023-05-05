import { useEffect, useState } from 'react'
import { PREFIX_RANDOM_CAT_IMAGE } from './api/cat-img-fact'

export function useCatImg ({ fact }) {
  const [catImgUrl, setCatImgUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const getCatImage = async newFact => {
      try {
        const res = await fetch(
          `https://cataas.com/cat/says/${newFact
            .split(' ', 3)
            .join(' ')}?size=50&color=red&json=true`
        )

        if (!res.ok) throw new Error('ERROR WHILE FETCHING THE CAT FACT')

        const data = await res.json()

        console.log({ 'LOADED IMAGE': data.url })
        setCatImgUrl(data.url)
      } catch (err) {
        console.warn(err)
      }
    }

    getCatImage(fact)
  }, [fact])

  // avoid returning the setter
  return { catImgUrl: `${PREFIX_RANDOM_CAT_IMAGE}${catImgUrl}` }
}
