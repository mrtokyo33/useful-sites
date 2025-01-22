import React from 'react'
import styles from './css/Item.module.css'

function Item({ id, title, link, category, subcategory, onDelete }) {
  return (
    <div className={styles.itemContainer}>
      <li>
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        <div className={styles.itemDetails}>
          <span>{category}</span><span>{subcategory}</span>
        </div>
        <button className={styles.deleteButton} onClick={onDelete}>
          <i className="fa fa-trash"></i>
        </button>
      </li>
    </div>
  )
}

export default Item
