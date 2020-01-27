import { useEffect } from 'react'

export function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `the count is ${count}`
  }, [count])
}
