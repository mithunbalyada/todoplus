import React from 'react'
import styles from './add-button.module.css'

export type AddButtonProps = {
  onClickHandler: (event: React.SyntheticEvent) => void
}

export const AddButton = (props: AddButtonProps) => {
  return (
    <>
      <div className={styles.todoAddButton}>
        {/* Ascii code for '+' symbol */}
        <a href="/#" onClick={props.onClickHandler}>
          {String.fromCharCode(43)}
        </a>
      </div>
    </>
  )
}
