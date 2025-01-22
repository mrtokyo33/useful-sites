import { adjustColor } from './adjustColor';

export const changePrimaryColor = (newPrimaryColor) => {
  const root = document.documentElement;
  
  if (!newPrimaryColor) return;

  root.style.setProperty('--primary-color', newPrimaryColor);

  const adjustedSecondaryColor = adjustColor(newPrimaryColor, 50, 0, 50);
  root.style.setProperty('--secondary-color', adjustedSecondaryColor);
};
