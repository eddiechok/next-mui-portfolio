import {
  createTheme,
  experimental_sx as sx,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';

const titleStyle = {
  fontFamily: "'Baloo 2', cursive",
};

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
    text: {
      primary: '#14274E',
      secondary: '#9BA4B4',
    },
    background: {
      paper: '#F1F6F9',
    },
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
          bgcolor: '#F1F3F5',
          borderRadius: 2,
          '&:hover, &.Mui-focused': {
            bgcolor: '#F1F3F5',
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
});

theme = createTheme(theme, {
  shadows: {
    ...theme.shadows,
    1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // sm
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)', // md
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)', // lg
    4: '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)', // xl
    5: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 2xl
  },
} as ThemeOptions);

theme = responsiveFontSizes(theme);

export default theme;
