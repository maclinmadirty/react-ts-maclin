import React from 'react';

import './assets/global.scss';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Header/Header';
import MainPage from './containers/Main';
import { lightTheme } from './assets/themes';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
