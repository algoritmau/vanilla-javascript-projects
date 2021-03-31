let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

const rootEl = document.querySelector(':root');
const toggleThemeButton = document.querySelector('.theme-toggle');
const toggleThemeButtonIconSun = document.querySelector(
  '.theme-toggle__icon--sun'
);
const toggleThemeButtonIconMoon = document.querySelector(
  '.theme-toggle__icon--moon'
);
const header = document.querySelector('.header');

console.log(header.style.boxShadow);

colorWhite = '#fefefe';
colorBlack = '#242424';
lightGray = '#767676';
darkGray = '#8b8b8b';
colorAccentBlack = 'hsl(0, 0%, 18%)';
colorAccentWhite = 'hsl(0, 0%, 96%)';

const toggleTheme = () => {
  let newBackgroundColor, newForegroundColor;

  switch (currentTheme) {
    case 'light':
      newBackgroundColor = colorWhite;
      newForegroundColor = colorBlack;
      rootEl.style.setProperty('--color-background', newBackgroundColor);
      rootEl.style.setProperty('--color-foreground', newForegroundColor);
      rootEl.style.setProperty('--color-gray', lightGray);
      rootEl.style.setProperty('--color-accent-mono', colorAccentWhite);
      toggleThemeButtonIconSun.style.display = 'block';
      toggleThemeButtonIconMoon.style.display = 'none';
      header.style.boxShadow = '0 4px 16px 4px rgba(0, 0, 0, 0.016)';
      currentTheme = 'dark';
      break;

    case 'dark':
      newBackgroundColor = colorBlack;
      newForegroundColor = colorWhite;
      rootEl.style.setProperty('--color-background', newBackgroundColor);
      rootEl.style.setProperty('--color-foreground', newForegroundColor);
      rootEl.style.setProperty('--color-gray', darkGray);
      rootEl.style.setProperty('--color-accent-mono', colorAccentBlack);
      toggleThemeButtonIconSun.style.display = 'none';
      toggleThemeButtonIconMoon.style.display = 'block';
      header.style.boxShadow = '0 4px 16px 4px rgba(254, 254, 254, 0.016)';
      currentTheme = 'light';
      break;

    default:
      break;
  }
};

toggleThemeButton.addEventListener('click', toggleTheme);
window.addEventListener('load', toggleTheme);
