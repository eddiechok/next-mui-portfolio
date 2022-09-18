import { PaletteMode } from '@mui/material';
import {
  createTheme,
  experimental_sx as sx,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';

const titleStyle = {
  fontFamily: "'Baloo 2', cursive",
};

export const getDesignTokens = (mode: PaletteMode = 'light') => {
  // Create a theme instance.
  let theme = createTheme({
    palette: {
      primary: {
        main: '#C6A98A',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#F1F6F9',
      },
      error: {
        main: '#F03E3E',
      },
      text: {
        primary: '#14274E',
        secondary: '#9BA4B4',
      },
      background: {
        paper: '#F1F6F9',
      },
      grey: {
        50: '#F8F9FA',
        100: '#F1F3F5',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#868E96',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
      },
    },
  });

  if (mode === 'dark') {
    theme = createTheme(theme, {
      palette: {
        mode,
        text: {
          primary: '#F1F6F9',
          secondary: '#9BA4B4',
        },
        background: {
          paper: '#14274E',
          default: '#333F55',
        },
        grey: {
          900: '#F8F9FA',
          800: '#F1F3F5',
          700: '#E9ECEF',
          600: '#DEE2E6',
          500: '#CED4DA',
          400: '#ADB5BD',
          300: '#868E96',
          200: '#495057',
          100: '#343A40',
          50: '#212529',
        },
      },
    } as ThemeOptions);
  }

  theme = createTheme(theme, {
    shadows: {
      ...theme.shadows,
      1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // sm
      2: '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)', // md
      3: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)', // lg
      4: '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)', // xl
      5: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 2xl
    },
    spacing: 4,
    typography: {
      fontFamily: "'Open Sans', 'Helvetica', sans-serif",
      h1: {
        ...titleStyle,
        fontSize: 64,
      },
      h2: {
        ...titleStyle,
      },
      h3: { ...titleStyle },
      h4: { ...titleStyle },
      h5: { ...titleStyle },
      h6: { ...titleStyle, fontSize: 16 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'html, body, #__next': {
            height: '100%',
          },
          a: {
            textDecoration: 'none',
            color: 'inherit',
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
        styleOverrides: {
          root: sx({
            px: {
              sm: 4,
              md: 6,
              lg: 8,
            },
          }),
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'filled',
        },
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: sx({
            bgcolor: 'background.paper',
            borderRadius: 2,
            '&:hover, &.Mui-focused': {
              bgcolor: 'background.paper',
            },
          }),
          input: sx({
            '&:-webkit-autofill': {
              borderRadius: 2,
            },
            '&:autofill': {
              borderRadius: 2,
            },
            '&:-moz-autofill': {
              borderRadius: 2,
            },
          }),
        },
      },
      MuiMenu: {
        defaultProps: {
          elevation: 3,
        },
      },
    },
  } as ThemeOptions);

  theme = responsiveFontSizes(theme);

  return theme;
};
