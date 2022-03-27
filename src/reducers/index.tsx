import { combineReducers }  from 'redux'
import { reducerFirst }     from './saveData'

const rootReducer = combineReducers({
  auth: reducerFirst
})

export default rootReducer