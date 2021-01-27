import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  login: loginReducer
})

export default rootReducer
