import { useEffect, useRef, useState } from 'react'

export default function useDebounce<T> (value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const timer = useRef(0)
  // Reference code under the MIT license from repository github-repositories-explorer
  // const setDebouncedValue: (value: React.SetStateAction<T>) => void
  useEffect(() => {
    timer.current = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(timer.current)
    }
  }, [value, delay])

  return debouncedValue
}
