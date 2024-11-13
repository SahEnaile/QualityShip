import React from 'react';
import Sidebar from '../src/components/SideBar.jsx'; 
import { CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Sidebar */}
      <Sidebar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#f4f4f4', padding: 3 }}
      >
        {/* Aqui vem o conteúdo principal do seu app */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Meu Web App
            </Typography>
          </Toolbar>
        </AppBar>

        <Toolbar /> {/* Para dar espaço ao AppBar */}
        <div>
          <h1>Conteúdo Principal</h1>
        </div>
      </Box>
    </Box>
  );
}

export default App;
