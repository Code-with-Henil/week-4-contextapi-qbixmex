import React from 'react';
import { AppBar, Box, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { blue, yellow } from '@mui/material/colors';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {

  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        {theme === 'dark' ? (
          <IconButton onClick={() => setTheme('light')}>
            <WbSunnyIcon sx={{ color: yellow[700] }} fontSize="large" />
          </IconButton>) : (
          <IconButton onClick={() => setTheme('dark')}>
            <DarkModeIcon sx={{ color: blue[50] }} fontSize="large" />
          </IconButton>
        )}
      </Box>
    </AppBar>
  );

};

export default Navbar;
