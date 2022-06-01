import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#011627'
    },
    secondary: {
      main: '#8b9d83'
    }
  },
  typography: {
    fontFamily: ['Playfair Display', 'serif'].join(',')
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#011627'
    },
    secondary: {
      main: '#8b9d83'
    }
  }
});

export { lightTheme, darkTheme };
