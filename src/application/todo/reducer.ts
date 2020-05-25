import { TodoActions, TodoActionType, TodoStateType } from './types'

const initialTodoState: TodoStateType = []

export const todoReducer = (
  state: TodoStateType = initialTodoState,
  action: TodoActions
): TodoStateType => {
  switch (action.type) {
    case TodoActionType.ADD:
      const todos = state
      todos.concat(action.payload)
      return todos

    case TodoActionType.LOAD:
      return action.payload

    default:
      return state
  }
}
