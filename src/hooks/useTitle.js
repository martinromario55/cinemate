import { useEffect } from 'react'

export const useTitle = (title) => {
  // Add Page Title
  useEffect(() => {
    document.title = `${title} | Cinemate`
  })
  return null
}
