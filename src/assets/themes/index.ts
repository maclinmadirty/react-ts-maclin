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

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 300,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
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
