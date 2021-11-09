import React, { useState } from "react";

import { useHistory } from "react-router";
import { addArticle } from "../../hooks/Articles";
import { useUserState } from "../../context/UserContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ArticleView = () => {
  const [article, setArticle] = useState<Components.Schemas.NewArticle>();
  const [open, setOpen] = React.useState(false);
  const userState = useUserState();

  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      handleClose();
      article.user = userState.user?.id;
      addArticle(article).then(response => {
        history.push("/articleList");
      });
    }
  };

  return (
    <Box
      pl={30}
      pr={30}
      pt={10}
      style={{ maxHeight: "80vh", overflow: "auto" }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={10}>
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
        <Grid item xs={9} marginTop={2}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            fullWidth
            onClick={handleClickOpen}
          >
            Regist
          </Button>
        </Grid>
        <Grid item xs={3} marginTop={2}>
          <Button
            variant="outlined"
            color="secondary"
            href="/"
            size="large"
            fullWidth
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ArticleView;
