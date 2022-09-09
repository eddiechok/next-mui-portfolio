import { createTheme, experimental_sx as sx } from '@mui/material/styles';

const titleStyle = {
  fontFamily: "'Baloo 2', cursive",
};

// Create a theme instance.
const theme = createTheme({
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
  },
});

export default theme;
