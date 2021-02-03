const tutorialsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TUTORIALS_FETCH':
      return action.payload
    default:
      return state
  }
}

export default tutorialsReducer
