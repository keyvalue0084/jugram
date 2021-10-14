import React  from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Footer = () => {
  return (
    <Box  position="fixed" sx={{bottom: 20,border: '1px dashed grey', background:"white", width:"98vw"}}>
      <BottomNavigation>
        <BottomNavigationAction label="Home"  icon={<HomeIcon />} />
        <BottomNavigationAction label="Search"  icon={<SearchIcon />} />
        <BottomNavigationAction label="Play"  icon={<PlayCircleOutlineIcon />} />
        <BottomNavigationAction label="Map"  icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Shop"  icon={<LocalMallIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
