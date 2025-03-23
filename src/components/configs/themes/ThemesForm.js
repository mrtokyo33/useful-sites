import { useState, useEffect } from 'react'
import styles from './ThemesForm.module.css'
import ThemeItem from './components/ThemeItem'
import CreateTheme from './components/CreateTheme'
import { themeService } from '../../../services/themeService'
import { useColorManager } from '../../../services/useColorManager'

const defaultThemes = [
  { 
    title: 'Default', 
    colors: { primaryColor: '#c01c28', backgroundColor: '#171419', textColor: '#ffffff' }
  },
  { 
    title: 'Dark Mode', 
    colors: { primaryColor: '#BB86FC', backgroundColor: '#121212', textColor: '#E0E0E0' }
  },
  { 
    title: 'Light Mode', 
    colors: { primaryColor: '#7F56D9', backgroundColor: '#FAFAFA', textColor: '#333333' }
  },
  { 
    title: 'Ocean Breeze', 
    colors: { primaryColor: '#00BCD4', backgroundColor: '#0A1418', textColor: '#80CBC4' }
  },
  { 
    title: 'Retro Vibes', 
    colors: { primaryColor: '#FF4081', backgroundColor: '#1A1214', textColor: '#B0BEC5' }
  }
]

function ThemesForm () {
  const [showPanel, setShowPanel] = useState(false)
  const [themes, setThemes] = useState([])
  const [selectedTheme, setSelectedTheme] = useState(null)
  const { colors, handleColorChange } = useColorManager()

  useEffect(() => {
    let storedThemes = themeService.getStoredThemes()
    storedThemes = [
      ...defaultThemes,
      ...storedThemes.filter(theme => !defaultThemes.some(defaultTheme => defaultTheme.title === theme.title))
    ]
    themeService.saveThemes(storedThemes)
    setThemes(storedThemes)
    const currentTheme = themeService.getSelectedTheme()
    setSelectedTheme(currentTheme)
  }, [])

  useEffect(() => {
    if (selectedTheme === 'None') {
      handleColorChange(colors)
    }
  }, [selectedTheme, colors, handleColorChange])

  const createTheme = (title, colors) => {
    const newTheme = { title, colors }
    const updatedThemes = [...themes, newTheme]
    setThemes(updatedThemes)
    themeService.saveThemes(updatedThemes)
    setShowPanel(false)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const selectTheme = themeTitle => {
    const theme = themes.find(t => t.title === themeTitle)
    if (theme) {
      setSelectedTheme(themeTitle)
      themeService.saveSelectedTheme(themeTitle)
      localStorage.setItem('colors', JSON.stringify(theme.colors))
      handleColorChange(theme.colors)
      window.location.reload()
    }
  }

  const deleteTheme = themeTitle => {
    if (defaultThemes.some(theme => theme.title === themeTitle)) return
    const updatedThemes = themes.filter(theme => theme.title !== themeTitle)
    setThemes(updatedThemes)
    themeService.saveThemes(updatedThemes)
  }

  const createThemeFormSubmit = e => {
    e.preventDefault()
    setShowPanel(true)
  }

  return (
    <div className={styles.ThemesFormContainer}>
      <h1 className={styles.ThemesTitle}>Select your Theme</h1>
      <div className={styles.themes}>
        {themes.map((theme, index) => (
          <ThemeItem
            key={index}
            theme={theme}
            onSelectTheme={selectTheme}
            isSelected={theme.title === selectedTheme}
            onDelete={deleteTheme}
            disableDelete={defaultThemes.some(defaultTheme => defaultTheme.title === theme.title)}
          />
        ))}
      </div>
      <div className={styles.Buttons}>
        <form onSubmit={createThemeFormSubmit}>
          <button type="submit" className={styles.submit}>
            Create Theme
          </button>
        </form>
      </div>
      {showPanel && <CreateTheme event={closePanel} onCreateTheme={createTheme} />}
    </div>
  )
}

export default ThemesForm
