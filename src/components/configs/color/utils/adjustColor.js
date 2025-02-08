export const hexToRgb = hex => {
  if (!hex || !/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hex)) return null
  let color = hex.slice(1)
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('')
  }
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)
  return `rgb(${r},${g},${b})`
}

export const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}

export const adjustColor = (hexColor, rAdjust, gAdjust, bAdjust) => {
  const rgb = hexToRgb(hexColor)
  if (!rgb) return hexColor
  const [r, g, b] = rgb.match(/\d+/g).map(Number)
  const newR = Math.min(255, Math.max(0, r + rAdjust))
  const newG = Math.min(255, Math.max(0, g + gAdjust))
  const newB = Math.min(255, Math.max(0, b + bAdjust))
  return rgbToHex(newR, newG, newB)
}
