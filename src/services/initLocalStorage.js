import { themeService } from './themeService'

const defaultColors = {
  primaryColor: '#c01c28',
  backgroundColor: '#171419',
  textColor: '#ffffff'
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
