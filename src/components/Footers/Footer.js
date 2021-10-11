
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
        <BottomNavigationAction label="Home" showLabel="true" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" showLabel="true" icon={<SearchIcon />} />
        <BottomNavigationAction label="Play" showLabel="true" icon={<PlayCircleOutlineIcon />} />
        <BottomNavigationAction label="Map" showLabel="true" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Shop" showLabel="true" icon={<LocalMallIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
