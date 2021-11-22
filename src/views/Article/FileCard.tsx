import React from "react";

import { deleteFile } from "../../hooks/Files";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton
} from "@mui/material";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface FileType {
  id: string;
  name: string;
  mime: string;
  size: number;
  url: string;
  provider: string;
  onClick: Function;
}

const FileCard = (file: FileType) => {
  return (
    <ListItem key={file.id}>
      <Grid container>
        <Grid item xs={9} textAlign="left" display="flex">
          <ListItemIcon sx={{ paddingTop: "10px" }}>
            <CropOriginalIcon />
          </ListItemIcon>
          <ListItemText primary={file.name} secondary={file.mime} />
        </Grid>
        <Grid item xs={3} textAlign="right">
          <IconButton
            aria-label="delete"
            onClick={() => {
              //deleteFileProcess(file.id);
              file.onClick(file.id);
            }}
          >
            <DeleteOutlineIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default FileCard;
