import { createTheme } from '@mui/material';

// we'll see if the MuiCssBaseline is needed
const theme = createTheme({
  palette: {
    primary: {
      main: '#182978',
    },
    secondary: {
      main: '#6688CC',
      light: '#ACBFE6',
    },
    white: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}

// dark blue - #182978
// blue - #6688CC
// light blue - #ACBFE6
