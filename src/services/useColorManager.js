import { useState, useEffect } from 'react'
import { adjustColor } from '../components/configs/color/utils/adjustColor'

const defaultColors = {
  primaryColor: '#ff00ff',
  backgroundColor: '#121212',
  textColor: '#a9a9a9'
}

export const useColorManager = () => {
  const loadColorsFromStorage = () => {
    const savedColors = localStorage.getItem('colors')
    return savedColors ? JSON.parse(savedColors) : defaultColors
  }
  
  const [colors, setColors] = useState(loadColorsFromStorage)

  useEffect(() => {
    const onLoad = () => setColors(loadColorsFromStorage())
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary-color', colors.primaryColor)
    root.style.setProperty('--bg', colors.backgroundColor)
    root.style.setProperty('--text-color', colors.textColor)
    root.style.setProperty('--background-color', adjustColor(colors.backgroundColor, 20, 20, 20))
    root.style.setProperty('--panel-color', adjustColor(colors.backgroundColor, 15, 15, 15))
    root.style.setProperty('--btn', adjustColor(colors.backgroundColor, 40, 40, 40))
    root.style.setProperty('--shadow-color', adjustColor(colors.backgroundColor, -50, -50, -50))
    root.style.setProperty('--secondary-color', adjustColor(colors.primaryColor, 50, 0, 50))
  }, [colors])

  const resetColors = () => {
    setColors(defaultColors)
    localStorage.setItem('colors', JSON.stringify(defaultColors))
  }

  const handleColorChange = newColors => {
    setColors(newColors)
    localStorage.setItem('colors', JSON.stringify(newColors))
  }

  return { colors, handleColorChange, resetColors }
}
