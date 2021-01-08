import { useEffect, useState } from 'react'

/**
 * fecth data from a url
 * @param {string} apiUrl
 * @param {*} defaultValue
 * @returns {*} fetched data
 */
export const useFetchData = (apiUrl, defaultValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    const controller = new AbortController()
    fetch(apiUrl, { signal: controller.signal })
      .then(res => res.json())
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setError(true)
      })
    return () => {
      controller.abort()
      setData(defaultValue)
    }
  }, [])

  return [error, loading, data]
}
