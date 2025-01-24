import { useState, useRef } from 'react'
import styles from './CreateTheme.module.css'

function CreateTheme({ event, onCreateTheme }) {
    const [warning, setWarning] = useState()
    const [colors, setColors] = useState({
        primaryColor: '#ff00ff',
        backgroundColor: '#121212',
        textColor: '#e0e0e0',
    })

    const titleRef = useRef()

    function CleanInputs() {
        titleRef.current.value = ''
    }

    function handleColorChange(e) {
        const { name, value } = e.target
        setColors({ ...colors, [name]: value })
    }

    function CreateThemeHandler(e) {
        e.preventDefault()

        const title = titleRef.current.value

        if (title) {
            onCreateTheme(title, colors)
            setWarning(null)
            CleanInputs()
        } else {
            setWarning('You must enter the title!')
        }
    }

    return (
        <div className={styles.panelContainer}>
            <div className={styles.header}>
                <h1>Create A Theme</h1>
                <button type="button" className={styles.closeButton} onClick={event}>X</button>
            </div>

            <form onSubmit={CreateThemeHandler}>
                <div className={styles.titleField}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Theme Title" ref={titleRef} />
                </div>

                <div className={styles.fields}>
                    <label htmlFor="primaryColor">Primary Color</label>
                    <input
                        type="color"
                        id="primaryColor"
                        name="primaryColor"
                        value={colors.primaryColor}
                        onChange={handleColorChange}
                    />
                </div>

                <div className={styles.fields}>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input
                        type="color"
                        id="backgroundColor"
                        name="backgroundColor"
                        value={colors.backgroundColor}
                        onChange={handleColorChange}
                    />
                </div>

                <div className={styles.fields}>
                    <label htmlFor="textColor">Text Color</label>
                    <input
                        type="color"
                        id="textColor"
                        name="textColor"
                        value={colors.textColor}
                        onChange={handleColorChange}
                    />
                </div>

                <span className={styles.warning}>
                    {warning}
                </span>

                <div className={styles.submitField}>
                    <button type="submit" className={styles.submit}>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTheme
