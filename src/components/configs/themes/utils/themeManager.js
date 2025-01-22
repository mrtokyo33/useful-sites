import { changeBackgroundColor } from '../../color/utils/changeBackgroundColor'
import { changePrimaryColor } from '../../color/utils/changePrimaryColor'

export const changeTheme = (theme) => {
  const { primary, background, text } = theme.colors

  changePrimaryColor(primary)
  changeBackgroundColor(background)

  const root = document.documentElement
  root.style.setProperty('--text-color', text)
  root.style.setProperty('--primary-color', primary)
  root.style.setProperty('--background-color', background)
}
