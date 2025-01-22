import React from 'react'
import styles from './ThemeItem.module.css'

function ThemeItem({ theme, onSelectTheme, isSelected, onDelete, disableDelete }) {
  const handleClick = () => {
    onSelectTheme(theme.title)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    if (!disableDelete) {
      onDelete(theme.title)
    }
  }

  return (
    <div
      className={`${styles.ThemeItem} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer', borderColor: theme.colors.primaryColor }} 
    >
      <h1 className={styles.Title}>{theme.title}</h1>
      {!disableDelete && (
        <button onClick={handleDelete} className={styles.deleteButton}>
          <i className="fas fa-trash"></i>
        </button>
      )}
    </div>
  )
}

export default ThemeItem
