import React from 'react';
import { Box } from '@mui/material';
import Authentification from './assets/pages/Authentification';
import SideBar from './assets/pages/MySideBar';
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        background: theme.palette.background.default, 

      }}
    >
      <SideBar />

      <Box sx={{ flexGrow: 1 }}>
        <Authentification />
      </Box>
    </Box>
  );
};

export default App;
