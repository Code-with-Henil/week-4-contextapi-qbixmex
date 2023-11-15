import React from 'react';
import { Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';
import darkTheme from './themes/dark.theme';
import lightTheme from './themes/light.theme';
import Navbar from './components/Navbar';

const App = () => {

  const { theme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Typography component="h1" fontWeight="500" fontSize="5rem">
            Currency Exchange
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );

};

export default App;
