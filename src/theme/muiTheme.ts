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
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '& .MuiToggleButtonGroup-grouped': {
            border: 0,
            borderRadius: '0',
            outline: '1px solid #182978',
            color: '#182978',
            padding: '0.5rem',
          },
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
