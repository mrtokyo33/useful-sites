import { useState, useEffect } from 'react'

const defaultColors = {
  primaryColor: "#ff00ff",
  backgroundColor: "#121212",
  textColor: "#a9a9a9",
}

export const useColorManager = () => {
  const loadColorsFromStorage = () => {
    const savedColors = localStorage.getItem('colors')
    return savedColors ? JSON.parse(savedColors) : defaultColors
  }

  const [colors, setColors] = useState(loadColorsFromStorage)

  useEffect(() => {
    const savedColors = loadColorsFromStorage()
    setColors(savedColors)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary-color', colors.primaryColor)
    root.style.setProperty('--bg', colors.backgroundColor)
    root.style.setProperty('--text-color', colors.textColor)
  }, [colors])

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
