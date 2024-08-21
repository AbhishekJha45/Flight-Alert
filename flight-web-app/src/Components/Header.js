import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

function Header({ hasAdminRole, onAddFlight, onSubscribe, onDownload, onLogout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Flight Dashboard
        </Typography>
        {hasAdminRole && (
          <Button color="inherit" onClick={onAddFlight}>
            ADD Flight
          </Button>
        )}
        <Button color="inherit" onClick={onSubscribe}>
          Subscribe
        </Button>
        {hasAdminRole && (
          <Button color="inherit" onClick={onDownload}>
            Download
          </Button>
        )}
        <IconButton color="inherit" onClick={onLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
