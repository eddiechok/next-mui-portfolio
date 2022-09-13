import { PaletteMode } from '@mui/material';

const storagePrefix = 'eddiechok_next_';

const storage = {
  getColorMode: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}color_mode`) as string);
  },
  setColorMode: (colorMode: PaletteMode) => {
    window.localStorage.setItem(`${storagePrefix}color_mode`, JSON.stringify(colorMode));
  },
  clearColorMode: () => {
    window.localStorage.removeItem(`${storagePrefix}color_mode`);
  },
};

export default storage;
