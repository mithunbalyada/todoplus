import { Action } from 'redux'

export type TodoType = {
  title: string
  id: number
  completed: boolean
}

export type TodoStateType = Array<TodoType>

export enum TodoActionType {
  ADD = 'ADD',
  DELETE = 'DELTE',
  DONE = 'DONE',
  LOAD = 'LOAD'
}

export interface IAddTodoAction extends Action {
  type: TodoActionType.ADD
  payload: TodoType
}

export interface IDeleteTodoAction extends Action {
  type: TodoActionType.DELETE
  payload: TodoType
}

export interface IDoneTodoAction extends Action {
  type: TodoActionType.DONE
  payload: TodoType
}

export interface ILoadTodoAction extends Action {
  type: TodoActionType.LOAD
  payload: Array<TodoType>
}

export type TodoActions =
  | IAddTodoAction
  | IDeleteTodoAction
  | IDoneTodoAction
  | ILoadTodoAction
