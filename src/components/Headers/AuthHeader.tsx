import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

const EntryHeader = () => {
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
      </Toolbar>
    </Box>
  );
};

export default EntryHeader;
