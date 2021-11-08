import React from "react";
import { V_ROUTES } from "../../var/keywords";
import { useUserState } from "../../context/UserContext";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Footer = () => {
  const userState = useUserState();

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
        {userState.jwt ? (
          <BottomNavigationAction
            label={V_ROUTES.ARTICLE_LIST.NAME}
            icon={<FormatListBulletedIcon />}
            href={V_ROUTES.ARTICLE_LIST.PATH}
          />
        ) : (
          <BottomNavigationAction
            label={V_ROUTES.ARTICLE_LIST.NAME}
            icon={<FormatListBulletedIcon />}
            onClick={() => {
              toast.error("로그인이 필요합니다.", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
              });
            }}
          />
        )}

        <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Shop" icon={<LocalMallIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
