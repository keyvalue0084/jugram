import React, { useState } from "react";
import { useUserState, useUserDispatch } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

import { V_ROUTES } from "../../var/keywords";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deepOrange } from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const userState = useUserState();
  const userDispatch = useUserDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let initialName = userState.user
    ? userState.user.username.substring(0, 1)
    : "";

  return (
    <Box
      position="fixed"
      sx={{ border: "1px dashed grey", background: "white", width: "98vw" }}
    >
      <Toolbar variant="dense">
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" style={{ flex: 1 }}>
          Jugram
        </Typography>
        {userState.jwt ? (
          <IconButton
            edge="end"
            aria-label="AccountBox"
            sx={{ mr: 1 }}
            href={V_ROUTES.ARTICLE_REGIST.PATH}
          >
            <AddBoxIcon />
          </IconButton>
        ) : (
          <div></div>
        )}

        <IconButton edge="end" aria-label="favorite" sx={{ mr: 1 }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="message" sx={{ mr: 1 }}>
          <SendIcon />
        </IconButton>

        {userState.jwt ? (
          <div>
            <IconButton
              edge="end"
              aria-label="AccountBox"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ bgcolor: deepOrange[500], height: 32, width: 32 }}>
                {initialName}
              </Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  userDispatch({
                    type: "LOGOUT"
                  });
                }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <IconButton
            edge="end"
            aria-label="AccountBox"
            href={V_ROUTES.AUTH.SIGN_IN.PATH}
          >
            <AccountCircleIcon />
          </IconButton>
        )}
      </Toolbar>
    </Box>
  );
};

export default Header;
