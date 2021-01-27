import { useEffect, useState } from 'react'

/**
 * fecth data from a url
 * @param {string} apiUrl
 * @param {*} defaultValue
 * @returns {*} fetched data
 */
export const useFetchData = ({ apiUrl, defaultValue, timeout = 10000 }) => {
  const [status, setStatus] = useState({ data: defaultValue, error: false, loading: true })

  useEffect(() => {
    const controller = new AbortController()
    const id = setTimeout(() => {
      controller.abort()
      console.error('time exceded')
    }, timeout)

    async function f () {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal })
        clearTimeout(id)
        const { data } = await response.json()
        setStatus({ ...status, loading: false, data })
      } catch (error) {
        console.error(error)
        clearTimeout(id)
        setStatus({ ...status, loading: false, error })
      }
    }
    f()

    return () => {
      controller.abort()
    }
  }, [])

  return status
}
