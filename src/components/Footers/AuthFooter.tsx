import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const AuthFooter = () => {
  return (
    <Box
      position="fixed"
      sx={{
        bottom: 20,
        border: "1px dashed grey",
        background: "white",
        width: "98vw"
      }}
    >
      <BottomNavigation>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction
          label="List"
          icon={<FormatListBulletedIcon />}
          href="/list"
        />
        <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Shop" icon={<LocalMallIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default AuthFooter;
