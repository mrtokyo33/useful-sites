import React from 'react'
import styles from './ThemeItem.module.css'
import { changeTheme } from '../utils/themeManager'

function ThemeItem({ theme }) {
    const handleClick = () => {
        changeTheme(theme)
    }

    return (
        <div className={styles.ThemeItem}>
            <h1 className={styles.Title}>{theme.name}</h1>
            <button className={styles.Button} onClick={handleClick}></button>
        </div>
    )
}

export default ThemeItem
