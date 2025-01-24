const defaultThemes = [
  {
    title: "Default",
    colors: {
      primary: "#ff00ff",
      background: "#121212",
      text: "#e0e0e0"
    }
  },
  {
    title: "Dark Mode",
    colors: {
      primary: "#BB86FC",
      background: "#121212",
      text: "#E0E0E0"
    }
  },
  {
    title: "Light Mode",
    colors: {
      primary: "#7F56D9",
      background: "#FAFAFA",
      text: "#333333"
    }
  },
  {
    title: "Ocean Breeze",
    colors: {
      primary: "#00BCD4",
      background: "#0A1418",
      text: "#80CBC4"
    }
  },
  {
    title: "Retro Vibes",
    colors: {
      primary: "#FF4081",
      background: "#1A1214",
      text: "#B0BEC5"
    }
  }
]

const getStoredThemes = () => {
  const storedThemes = localStorage.getItem('themes')
  return storedThemes ? JSON.parse(storedThemes) : defaultThemes
}

const saveThemes = (themes) => {
  localStorage.setItem('themes', JSON.stringify(themes))
}

const getSelectedTheme = () => {
  return localStorage.getItem('selectedTheme') || "Default"
}

const saveSelectedTheme = (themeTitle) => {
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
