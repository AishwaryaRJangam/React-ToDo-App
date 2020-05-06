import { combineReducers } from 'redux'
import todos from './TodoReducer'
import visibilityFilter from './FilterReducer'
import TaskReducer from './TaskReducer'

export default combineReducers({
  todos,
  visibilityFilter,
  task: TaskReducer

})  