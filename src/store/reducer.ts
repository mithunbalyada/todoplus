import { combineReducers } from 'redux'
import { todoReducer } from '../application/todo/reducer'

const reducer = combineReducers({
  todo: todoReducer
})

export default reducer
