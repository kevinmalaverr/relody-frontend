import { useEffect, useState } from 'react'

/**
 * @returns {boolean}
 */
export const useisSsr = () => {
  const [isSsr, setIsSsr] = useState(true)

  useEffect(() => {
    // `useEffect` never runs on the server, so we must be on the client if
    // we hit this block
    setIsSsr(false)
  }, [])

  return isSsr
}
