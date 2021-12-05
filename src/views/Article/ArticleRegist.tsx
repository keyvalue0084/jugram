import React, { useState } from "react";

import { useHistory } from "react-router";
import { addArticle } from "../../hooks/Articles";
import { useUserState } from "../../context/UserContext";
import { V_ROUTES } from "../../var/keywords";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ViewListIcon from "@mui/icons-material/ViewList";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Moment from "moment";

const ArticleRegister = () => {
  const [article, setArticle] = useState<Components.Schemas.NewArticle>();
  const [open, setOpen] = React.useState(false);
  const userState = useUserState();

  const history = useHistory();

  const toggleDialog = () => {
    setOpen(!open);
  };

  //입력값 state 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value
    });
  };

  const registProcess = () => {
    if (article) {
      toggleDialog();
      article.user = userState.user?.id;
      addArticle(article).then(response => {
        history.push("/articleList");
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        p: 1,
        m: 1
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        paddingTop={10}
        sx={{ width: "700px" }}
      >
        <Grid item xs={12} textAlign="left">
          <Typography variant="h4" component="div" gutterBottom>
            {userState?.user?.username}
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="left">
          <Typography variant="body1" gutterBottom>
            {Moment().format("yyyy.MM.DD")}
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <IconButton
            aria-label="delete"
            size="large"
            href={V_ROUTES.ARTICLE_LIST.PATH}
          >
            <ViewListIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="large" onClick={toggleDialog}>
            <SaveIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Contents"
            name="content"
            multiline
            rows={14}
            fullWidth
            onChange={onChange}
            defaultValue={article?.content}
          />
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"REGIST"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to register
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={registProcess}>Yes</Button>
          <Button onClick={toggleDialog} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ArticleRegister;
