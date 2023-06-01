import { createTheme } from '@mui/material';

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
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'secondary',
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&.MuiButton-outlinedPrimary': {
            '&:hover': {
              backgroundColor: 'secondary',
            },
          },
          '&.MuiButton-text': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0px 3px 6px -2px rgba(0, 0, 0, 0.15)',
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
