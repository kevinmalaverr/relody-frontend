import { useEffect, useRef } from 'react'

/**
 * execute a function whe detect a click outside of ref
 * @param {*} cb callback function
 * @returns reference ot the object
 */
export const useOutsideClick = (cb) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return ref
}
