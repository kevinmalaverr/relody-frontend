import { createStore } from 'redux'
import reducer from './reducers'

/**
 * receive an object with initial state and returns the store
 * @param {object} initialState
 */
const getStore = (initialState) => {
  return createStore(reducer, initialState)
}

export default getStore
