import React from 'react'
import styles from './close-button.module.css'

export type CloseButtonProps = {
  onClickHandler: (event: React.SyntheticEvent) => void
}

export const CloseButton = (props: CloseButtonProps) => {
  return (
    <a href="/#" className={styles.closeButton} onClick={props.onClickHandler}>
      X
    </a>
  )
}
