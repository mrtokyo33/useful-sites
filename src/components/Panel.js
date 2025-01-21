import styles from './css/Panel.module.css'
import { useState, useRef } from 'react'

function Panel({ event }) {
    const [warning, setWarning] = useState()

    const titleRef = useRef()
    const linkRef = useRef()

    function CleanInputs() {
        titleRef.current.value = ''
        linkRef.current.value = ''
    }

    function CreateLink(e) {
        e.preventDefault()

        const title = titleRef.current.value
        let link = linkRef.current.value

        if (title && link) {
            if (!link.startsWith('https://') && !link.startsWith('http://')) {
                link = 'https://' + link
            }

            console.log(`Your Title is ${title}, and your link is ${link}`)
            setWarning(null)
        } else {
            setWarning('You must enter both the title and the link!')
        }
        CleanInputs()
    }

    return (
        <div className={styles.panelContainer}>
            <div className={styles.header}>
                <h1>Create A Link</h1>
                <button type="button" className={styles.closeButton} onClick={event}>X</button>
            </div>

            <form onSubmit={CreateLink}>
                <div className={styles.fields}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="Title" placeholder="Title" ref={titleRef} />
                </div>

                <div className={styles.fields}>
                    <label htmlFor="link">Link</label>
                    <input type="text" name="Link" placeholder="Link" ref={linkRef} />
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

export default Panel
