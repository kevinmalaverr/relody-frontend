const headerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return state
    case 'USER_FETCH_SUCCEEDED':
      console.log(action)
      return {
        ...state, user: action.userId
      }
    default:
      return state
  }
}

export default headerReducer
