import React from "react";
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
import { toast, ToastContainer } from "react-toastify";
const Header = () => {
  const userState = useUserState();
  const userDispatch = useUserDispatch();
  const history = useHistory();

  let initialName = userState.user
    ? userState.user.username.substring(0, 1)
    : "";

  return (
    <Box
      position="fixed"
      sx={{ border: "1px dashed grey", background: "white", width: "98vw" }}
    >
      <ToastContainer />
      <Toolbar variant="dense">
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" style={{ flex: 1 }}>
          Jugram
        </Typography>
        <IconButton edge="end" aria-label="add" sx={{ mr: 1 }}>
          <AddBoxIcon />
        </IconButton>
        <IconButton edge="end" aria-label="favorite" sx={{ mr: 1 }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="message" sx={{ mr: 1 }}>
          <SendIcon />
        </IconButton>

        {userState.jwt ? (
          <IconButton
            edge="end"
            aria-label="AccountBox"
            onClick={() => {
              userDispatch({
                type: "LOGOUT"
              });

              toast.success("로그아웃!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
                onClose: () => {
                  history.push("/");
                }
              });
            }}
          >
            <Avatar sx={{ bgcolor: deepOrange[500], height: 32, width: 32 }}>
              {initialName}
            </Avatar>
          </IconButton>
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
