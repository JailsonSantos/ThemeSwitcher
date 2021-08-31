import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersitedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePersitedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toogleTheme={toogleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;