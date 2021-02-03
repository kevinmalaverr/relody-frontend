import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import loginReducer from './loginReducer'
import tutorialsReducer from './tutorialsReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  login: loginReducer,
  tutorials: tutorialsReducer
})

export default rootReducer
