import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7E52A0',
      light: '#F0A9FF',
      dark: '#5A2D7A',
    },
    secondary: {
      main: '#F0A9FF',
      light: '#FFD6FF',
      dark: '#D084E6',
    },
    background: {
      default: '#E6D7FF', // Light purple background
      paper: '#2D1B3D', // Dark background for components
    },
    text: {
      primary: '#FFFFFF', // White text for dark backgrounds
      secondary: '#E0E0E0', // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
      color: '#7E52A0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
        },
      },
    },
  },
});