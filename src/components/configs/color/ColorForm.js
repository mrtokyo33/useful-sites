import styles from './ColorForm.module.css'

function ColorForm({ colors, onColorChange, onResetColors }) {
  const handleColorChange = (e) => {
    const { name, value } = e.target
    onColorChange({ ...colors, [name]: value })
  }

  return (
    <div className={styles.colorFormContainer}>
      <form>
        <h1 className={styles.ColorTitle}>Select the Page Colors</h1>

        <div className={styles.fieldsContainer}>
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

          <div className={styles.submitField}>
            <button 
              type="button" 
              className={styles.submit} 
              onClick={onResetColors}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ColorForm
