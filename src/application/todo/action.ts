import { TodoActions, TodoActionType, TodoType } from './types'
import { Dispatch } from 'redux'
import axios from '../../axios'

export const addTodoAction = (todo: TodoType): TodoActions => {
  return {
    type: TodoActionType.ADD,
    payload: todo
  }
}

export const doneTodoAction = (todo: TodoType): TodoActions => {
  return {
    type: TodoActionType.DONE,
    payload: todo
  }
}

export const deleteTodoAction = (todo: TodoType): TodoActions => {
  return {
    type: TodoActionType.DELETE,
    payload: todo
  }
}

export const loadTodoAction = (todos: Array<TodoType>): TodoActions => {
  return {
    type: TodoActionType.LOAD,
    payload: todos
  }
}

export const loadTodos = () => {
  return (dispatch: Dispatch<TodoActions>) => {
    /* load todos here using rest fetch */
    axios.get('/todos').then((response) => {
      dispatch(loadTodoAction(response.data))
    })
  }
}
