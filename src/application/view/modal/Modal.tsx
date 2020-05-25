import React, { ReactNode } from 'react'
import styles from './modal.module.css'
import { CloseButton } from '../button/CloseButton'

export type ModalProps = {
  show: boolean
  title: string
  closeHandler: (event: React.SyntheticEvent) => void
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  const modalTag = (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderTitle}>{props.title}</div>
          <div>
            <CloseButton onClickHandler={props.closeHandler} />
          </div>
        </div>
        <div className={styles.modalBody}>{props.children}</div>
      </div>
    </div>
  )

  if (props.show) return modalTag
  else return <></>
}
