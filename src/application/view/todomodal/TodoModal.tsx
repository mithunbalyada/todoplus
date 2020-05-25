import React from 'react'
import { Modal } from '../modal/Modal'

export type TodoModalProps = {
  show: boolean
  closeHandler: (event: React.SyntheticEvent) => void
}

export const TodoModal = (props: TodoModalProps) => {
  return (
    <Modal
      show={props.show}
      closeHandler={props.closeHandler}
      title="Add a todo item"
    >
      <div>This is modal content</div>
    </Modal>
  )
}
