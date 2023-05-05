import { useCatImg } from '../hooks/cat-facts-images/useCatImg'

export function CatFact ({ fact, alt = '' }) {
  const { catImgUrl } = useCatImg({ fact })

  return <>{catImgUrl && <img src={catImgUrl} alt={alt} />}</>
}
