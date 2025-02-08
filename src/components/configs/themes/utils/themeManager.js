import { changeBackgroundColor } from '../../color/utils/changeBackgroundColor'
import { changePrimaryColor } from '../../color/utils/changePrimaryColor'

export const changeTheme = theme => {
  const { primaryColor, backgroundColor, textColor } = theme.colors
  changePrimaryColor(primaryColor)
  changeBackgroundColor(backgroundColor)
  const root = document.documentElement
  root.style.setProperty('--text-color', textColor)
}
