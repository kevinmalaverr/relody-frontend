import { useEffect, useState } from 'react'

/**
 * fecth data from a url
 * @param {string} apiUrl
 * @param {*} defaultValue
 * @returns {*} fetched data
 */
export const useFetchData = (apiUrl, defaultValue, timeout = 100) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    const controller = new AbortController()
    const id = setTimeout(() => {
      controller.abort()
      console.error('time exceded')
    }, timeout)

    async function fg () {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal })
        clearTimeout(id)
        const { data } = await response.json()
        setLoading(false)
        setData(data)
      } catch (error) {
        console.error(error)
        setError(true)
      }
    }

    fg()

    return () => {
      controller.abort()
    }
  }, [])

  return [error, loading, data]
}
