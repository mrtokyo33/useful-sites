import { useState, useEffect } from 'react'
import { changeBackgroundColor } from '../components/configs/color/utils/changeBackgroundColor'
import { changePrimaryColor } from '../components/configs/color/utils/changePrimaryColor'

const defaultColors = {
  primaryColor: "#ff00ff",
  secondaryColor: "#ee00ee",
  backgroundColor: "#121212",
  textColor: "#D3D3D3",
}

export const useColorManager = () => {
  const loadColorsFromStorage = () => {
    const savedColors = localStorage.getItem('colors')
    return savedColors ? JSON.parse(savedColors) : defaultColors
  }

  const [colors, setColors] = useState(loadColorsFromStorage)

  useEffect(() => {
    if (colors) {
      const root = document.documentElement
      root.style.setProperty('--primary-color', colors.primaryColor)
      root.style.setProperty('--secondary-color', colors.secondaryColor)
      root.style.setProperty('--bg', colors.backgroundColor)
      root.style.setProperty('--text-color', colors.textColor)

      changeBackgroundColor(colors.backgroundColor)
      changePrimaryColor(colors.primaryColor)
    }
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
