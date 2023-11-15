import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';
import darkTheme from './themes/dark.theme';
import lightTheme from './themes/light.theme';
import PublicRoutes from './routes/public.routes';

const App = () => {

  const { theme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
      <CssBaseline />
      <PublicRoutes />
    </ThemeProvider>
  );

};

export default App;
