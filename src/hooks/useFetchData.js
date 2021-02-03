import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/**
 * fecth data from a url
 * @param {string} apiUrl
 * @param {*} defaultValue
 * @returns {*} fetched data
 */
export const useFetchData = ({ apiUrl, defaultValue, selector, reducer, timeout = 10000 }) => {
  const status = useSelector(selector)
  const dispatch = useDispatch()

  useEffect(() => {
    const controller = new AbortController()
    const id = setTimeout(() => {
      controller.abort()
      dispatch({ type: reducer, payload: { loading: false, error: true } })
    }, timeout)

    async function f () {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal })
        clearTimeout(id)
        const { data } = await response.json()
        dispatch({ type: reducer, payload: { loading: false, data } })
      } catch (error) {
        console.error(error)
        clearTimeout(id)
        dispatch({ type: reducer, payload: { loading: false, error } })
      }
    }
    f()

    return () => {
      controller.abort()
    }
  }, [])

  return status
}
