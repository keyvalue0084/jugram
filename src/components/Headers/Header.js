import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <Box position="fixed" sx={{  border: '1px dashed grey', background:"white", width:"98vw"}} >
       <Toolbar variant="dense" background="white" >
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ flex: 1 }}>
            Jugram
          </Typography>
          <IconButton edge="end" aria-label="add" sx={{ mr: 1 }}>
            <AddBoxIcon />
          </IconButton>
          <IconButton edge="end" aria-label="favorite"  sx={{ mr: 1 }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton edge="end" aria-label="message" sx={{ mr: 1 }}>
            <SendIcon />
          </IconButton>
          <IconButton edge="end" aria-label="AccountBox">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
    </Box>
  );
};

export default Header;
