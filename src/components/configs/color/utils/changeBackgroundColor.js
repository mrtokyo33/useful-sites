import { adjustColor } from './adjustColor'

export const changeBackgroundColor = newBgColor => {
  const root = document.documentElement
  if (!newBgColor) return
  root.style.setProperty('--bg', newBgColor)
  root.style.setProperty('--background-color', adjustColor(newBgColor, 20, 20, 20))
  root.style.setProperty('--panel-color', adjustColor(newBgColor, 15, 15, 15))
  root.style.setProperty('--btn', adjustColor(newBgColor, 40, 40, 40))
  root.style.setProperty('--shadow-color', adjustColor(newBgColor, -50, -50, -50))
}
