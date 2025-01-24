import { useState, useEffect } from 'react'
import { changeBackgroundColor } from '../components/configs/color/utils/changeBackgroundColor'
import { changePrimaryColor } from '../components/configs/color/utils/changePrimaryColor'
import { themeService } from './themeService'

const defaultColors = {
  primaryColor: "#ff00ff",
  backgroundColor: "#121212",
  textColor: "#D3D3D3",
}

export const useColorManager = () => {
  const loadColorsFromStorage = () => {
    const savedColors = localStorage.getItem('colors')
    if (!savedColors) {
      localStorage.setItem('colors', JSON.stringify(defaultColors)) // Agora sem erro
      return defaultColors
    }
    return JSON.parse(savedColors)
  }

  const getSelectedTheme = themeService.getSelectedTheme()
  const [colors, setColors] = useState(loadColorsFromStorage)

  useEffect(() => {
    if (!localStorage.getItem('colors')) localStorage.setItem('colors', JSON.stringify(defaultColors))

    if (getSelectedTheme === "None") {
      return
    }

    const theme = themeService.getStoredThemes().find(theme => theme.title === getSelectedTheme)
    if (theme) {
      const { primaryColor, backgroundColor, textColor } = theme.colors
      const newColors = { primaryColor, backgroundColor, textColor }
      setColors(newColors)
      localStorage.setItem('colors', JSON.stringify(newColors))

      const root = document.documentElement
      root.style.setProperty('--primary-color', primaryColor)
      root.style.setProperty('--secondary-color', "#ee00ee")
      root.style.setProperty('--bg', backgroundColor)
      root.style.setProperty('--text-color', textColor)

      changeBackgroundColor(backgroundColor)
      changePrimaryColor(primaryColor)
    }
  }, [getSelectedTheme])

  useEffect(() => {
    if (getSelectedTheme !== "None") {
      themeService.saveSelectedTheme("None")
    }

    if (colors) {
      const root = document.documentElement
      root.style.setProperty('--primary-color', colors.primaryColor)
      root.style.setProperty('--secondary-color', "#ee00ee")
      root.style.setProperty('--bg', colors.backgroundColor)
      root.style.setProperty('--text-color', colors.textColor)

      changeBackgroundColor(colors.backgroundColor)
      changePrimaryColor(colors.primaryColor)
    }
  }, [colors, getSelectedTheme])

  const resetColors = () => {
    setColors(defaultColors)
    localStorage.setItem('colors', JSON.stringify(defaultColors))
  }

  const handleColorChange = (newColors) => {
    setColors(newColors)
    localStorage.setItem('colors', JSON.stringify(newColors))
  }

  return { colors, handleColorChange, resetColors }
}
