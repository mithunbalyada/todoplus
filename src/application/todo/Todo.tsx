import React, { useState, useEffect } from 'react'
import { AddButton } from '../view/button/AddButton'
import { TodoModal } from '../view/todomodal/TodoModal'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodos } from './action'
import { StateType } from '../../store/state'

export const Todo: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const todos = useSelector((state: StateType) => state.todo)

  const disptach = useDispatch()

  //const todos: Array<TodoType> = useSelector((state: StateType) => state.todo)

  const addButtonHandler = (event: React.SyntheticEvent) => {
    setShowModal(true)
  }

  const modalCloseHandler = (event: React.SyntheticEvent) => {
    setShowModal(false)
  }

  useEffect(() => {
    disptach(loadTodos())
  }, []) //eslint-disable-line

  return (
    <>
      <div>
        <AddButton onClickHandler={addButtonHandler} />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <TodoModal show={showModal} closeHandler={modalCloseHandler} />
    </>
  )
}
