import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { SignUp } from './sign up';
import { useNavigate } from 'react-router-dom';



export const Header = ()=> {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chatkaro
          </Typography>
          <Button className='m-2' onClick={() => {
                      navigate(`/SignIn`);
                    }}
                    variant="outlined" color="inherit">Sign in</Button>
                    <br/>
          <Button onClick={() => {
                      navigate(`/SignUp`);
                    }}
                    variant="outlined" color="inherit">sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}