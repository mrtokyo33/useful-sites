import { useState } from 'react'
import styles from './AddFont.module.css'

function AddFont({ event, addFont }) {
  const [fontName, setFontName] = useState('')
  const [fontUrl, setFontUrl] = useState('')
  const [fontFamily, setFontFamily] = useState('')

  const handleAddFont = (e) => {
    e.preventDefault()
    if (!fontName || !fontUrl || !fontFamily) return

    addFont({
      id: Date.now(),
      name: fontName,
      family: fontFamily,
      importUrl: fontUrl,
    })
    event()
  }

  return (
    <div className={styles.panelContainer}>
      <div className={styles.header}>
        <h1>Add A Font</h1>
        <button type="button" className={styles.closeButton} onClick={event}>
          X
        </button>
      </div>
      <form onSubmit={handleAddFont}>
        <div className={styles.field}>
          <label htmlFor="fontName">Font Name</label>
          <input
            type="text"
            name="fontName"
            placeholder="Font Name"
            value={fontName}
            onChange={(e) => setFontName(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="fontUrl">Font URL</label>
          <input
            type="text"
            name="fontUrl"
            placeholder="https://fonts.googleapis.com/css2?family=Jersey+15&display=swap"
            value={fontUrl}
            onChange={(e) => setFontUrl(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="fontFamily">Font Family</label>
          <input
            type="text"
            name="fontFamily"
            placeholder='"Jersey 15", serif'
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submit}>
          Add Font
        </button>
      </form>
    </div>
  )
}

export default AddFont
