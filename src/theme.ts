import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#093b60',
    },
    secondary: {
      main: '#3e97b5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        containedSecondary: {
          backgroundColor: '#093b60',
          '&:hover': {
            backgroundColor: '#3e97b5',
          },
        },
        containedPrimary: {
          backgroundColor: '#093b60',
          '&:hover': {
            backgroundColor: '#3e97b5',
          },
        },
      },
    },
  },
});

export default theme;
