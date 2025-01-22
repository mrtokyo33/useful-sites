import React from 'react'
import styles from './ConfigItem.module.css'

function ConfigItem({ icon, text, configKey, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(configKey)
  }

  return (
    <div className={`${styles.ConfigurationItem} ${isSelected ? styles.selected : ''}`}onClick={handleClick}>
      <li className={styles.text}>{text}</li>
      <i className={`fa ${icon} ${styles.icon}`}></i>
    </div>
  )
}

export default ConfigItem
