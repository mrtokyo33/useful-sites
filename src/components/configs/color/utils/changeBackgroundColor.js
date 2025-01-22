import { adjustColor } from './adjustColor';

export const changeBackgroundColor = (newBgColor) => {
  const root = document.documentElement;
  
  if (!newBgColor) return;

  root.style.setProperty('--bg', newBgColor);

  const adjustedBackgroundColor = adjustColor(newBgColor, 12, 12, 12);
  const adjustedPanelColor = adjustColor(newBgColor, 8, 8, 8);
  const adjustedBtnColor = adjustColor(newBgColor, 30, 30, 30);

  root.style.setProperty('--background-color', adjustedBackgroundColor);
  root.style.setProperty('--panel-color', adjustedPanelColor);
  root.style.setProperty('--btn', adjustedBtnColor);
};
