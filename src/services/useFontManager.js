import { useState, useEffect } from 'react'

export function useFontManager() {
  const defaultFonts = [
    { id: 1, name: 'Roboto Mono', family: '"Roboto Mono", monospace' },
    { id: 2, name: 'Arial', family: 'Arial, sans-serif' },
    { id: 3, name: 'Georgia', family: 'Georgia, serif' },
  ]

  const savedFonts = JSON.parse(localStorage.getItem('fonts')) || defaultFonts
  const savedFont = JSON.parse(localStorage.getItem('selectedFont')) || savedFonts[0]

  const [fonts, setFonts] = useState(savedFonts)
  const [selectedFont, setSelectedFont] = useState(savedFont)

  const handleFontChange = (font) => {
    setSelectedFont(font)
    document.documentElement.style.setProperty('--font', font.family)
    localStorage.setItem('selectedFont', JSON.stringify(font))
  }

  const addFont = (newFont) => {
    const updatedFonts = [...fonts, newFont]
    setFonts(updatedFonts)
    localStorage.setItem('fonts', JSON.stringify(updatedFonts))
    updateFontImports(updatedFonts)
  }

  const removeFont = (id) => {
    const updatedFonts = fonts.filter((font) => font.id !== id)
    setFonts(updatedFonts)
    localStorage.setItem('fonts', JSON.stringify(updatedFonts))
    updateFontImports(updatedFonts)
  }

  const updateFontImports = (fonts) => {
    const imports = fonts
      .filter((font) => font.importUrl)
      .map((font) => `@import url('${font.importUrl}');`)
      .join('\n')

    let styleTag = document.getElementById('dynamic-fonts')
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'dynamic-fonts'
      document.head.appendChild(styleTag)
    }
    styleTag.innerHTML = imports
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--font', selectedFont.family)
    updateFontImports(fonts)
  }, [selectedFont, fonts])

  return { fonts, selectedFont, handleFontChange, addFont, removeFont }
}
