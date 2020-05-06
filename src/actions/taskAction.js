import {CREATE_TASK, UPDATE_TASK, DELETE_TASK, PRIORITY_FILTER_SET, SEARCH_TEXT_SET} from './actionsTypes'
export const setPriorityFilter = (str) => {
  return {
    type: PRIORITY_FILTER_SET,
    payload: str
  }
}

export const setSearchText = (str) => {
  return {
    type: SEARCH_TEXT_SET,
    payload: str
  }
}
