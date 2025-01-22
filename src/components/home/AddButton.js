import React, { useState } from 'react'
import Panel from './Panel'
import styles from './css/AddButton.module.css'

function AddButton({ onAdd }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(true)

  function showPanel() {
    setIsPanelVisible(true)
    setIsButtonVisible(false)
  }

  function closePanel() {
    setIsPanelVisible(false)
    setIsButtonVisible(true)
  }

  return (
    <>
      {isButtonVisible && (
        <span className={styles.AddButtonContainer}>
          <button type="button" onClick={showPanel}>
            +
          </button>
        </span>
      )}
      {isPanelVisible && <Panel event={closePanel} onAdd={onAdd} />}
    </>
  )
}

export default AddButton
