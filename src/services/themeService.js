const defaultThemes = [
  { 
    title: 'Default', 
    colors: { primaryColor: '#ff00ff', backgroundColor: '#121212', textColor: '#a9a9a9' }
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

const getStoredThemes = () => {
  const storedThemes = localStorage.getItem('themes')
  return storedThemes ? JSON.parse(storedThemes) : defaultThemes
}

const saveThemes = themes => {
  localStorage.setItem('themes', JSON.stringify(themes))
}

const getSelectedTheme = () => {
  return localStorage.getItem('selectedTheme') || 'Default'
}

const saveSelectedTheme = themeTitle => {
  localStorage.setItem('selectedTheme', themeTitle)
}

if (!localStorage.getItem('themes')) {
  saveThemes(defaultThemes)
}

export const themeService = {
  getStoredThemes,
  saveThemes,
  getSelectedTheme,
  saveSelectedTheme
}
