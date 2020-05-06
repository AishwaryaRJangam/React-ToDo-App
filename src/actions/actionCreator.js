import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionsTypes'

let TodoId = 2

export const addTodo = (text , description, priority, duedate) => ({
    type: ADD_TODO,
    id: TodoId++,
    text,
    description,
    priority,
    duedate,
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
