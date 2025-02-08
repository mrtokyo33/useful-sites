import { adjustColor } from './adjustColor'

export const changePrimaryColor = newPrimaryColor => {
  const root = document.documentElement
  if (!newPrimaryColor) return
  root.style.setProperty('--primary-color', newPrimaryColor)
  root.style.setProperty('--secondary-color', adjustColor(newPrimaryColor, 50, 0, 50))
}
