import React from "react";
import { useUserState } from "../../context/UserContext";
import { deleteArticle } from "../../hooks/Articles";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { compare } from "../../hooks/Utils";
import { V_ROUTES } from "../../var/keywords";
import Moment from "moment";

const ArticleCard = (articleProp: Components.Schemas.Article) => {
  const userState = useUserState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getControllButton = () => {
    if (userState.user) {
      if (compare(userState.user.id, articleProp.user?.id)) {
        return (
          <CardActions>
            <Grid container>
              <Grid item xs={6} textAlign="left">
                <IconButton
                  aria-label="delete"
                  size="large"
                  href={`${V_ROUTES.ARTICLE_VIEW.URL}/${articleProp.id}`}
                >
                  <ManageSearchIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                  <FavoriteIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={handleClickOpen}
                >
                  <DeleteOutlineIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        );
      } else {
        return (
          <CardActions>
            <IconButton
              aria-label="delete"
              size="large"
              href={`${V_ROUTES.ARTICLE_VIEW.URL}/${articleProp.id}`}
            >
              <ManageSearchIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <FavoriteIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        );
      }
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DELETE"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to Delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (articleProp.user) {
                deleteArticle(articleProp.id).then(response => {
                  handleClose();
                  window.location.replace("/articleList");
                });
              }
            }}
          >
            Yes
          </Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Card sx={{ width: 500, mb: 2 }}>
        <CardMedia
          component="img"
          alt="a man"
          height="440"
          image="https://blog.kakaocdn.net/dn/bldVq2/btqvyBqsrnU/pYDSTBDpawvvCuiWvNzBr0/img.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {articleProp.content}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            {Moment(articleProp.published_at).format("yyyy.MM.DD")}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            {articleProp.user ? articleProp.user.username : ""}
          </Typography>
        </CardContent>
        {getControllButton()}
      </Card>
    </div>
  );
};

export default ArticleCard;
