import { useState } from 'react'
import styles from './FontsForm.module.css'
import { useFontManager } from '../../../services/useFontManager'
import FontsItem from './components/FontsItem'
import AddFont from './components/AddFont'

function FontsForm() {
  const { fonts, handleFontChange, selectedFont, addFont, removeFont } = useFontManager()
  const [isAddFontOpen, setIsAddFontOpen] = useState(false)

  return (
    <div className={styles.FontsForm}>
      <h1>Select Your Font</h1>
      <div className={styles.Fonts}>
        {fonts.map((font) => (
          <FontsItem
            key={font.id}
            font={font}
            isSelected={font.id === selectedFont.id}
            onClick={() => handleFontChange(font)}
            handleDelete={removeFont}
          />
        ))}
      </div>
      <button className={styles.addFontButton} onClick={() => setIsAddFontOpen(!isAddFontOpen)}>
        Add Font
      </button>
      {isAddFontOpen && <AddFont event={() => setIsAddFontOpen(false)} addFont={addFont} />}
    </div>
  )
}

export default FontsForm
