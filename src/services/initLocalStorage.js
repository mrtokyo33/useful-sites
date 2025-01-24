import { themeService } from './themeService'

const defaultColors = {
  primaryColor: "#ff00ff",
  backgroundColor: "#121212",
  textColor: "#a9a9a9",
}

const initLocalStorage = () => {
  if (!localStorage.getItem('colors')) {
    localStorage.setItem('colors', JSON.stringify(defaultColors))
  }

  if (!localStorage.getItem('themes')) {
    themeService.saveThemes(themeService.getStoredThemes())
  }

  if (!localStorage.getItem('selectedTheme')) {
    themeService.saveSelectedTheme('Default')
  }
}

export default initLocalStorage
