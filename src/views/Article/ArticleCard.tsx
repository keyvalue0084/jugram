import React from "react";
import { useUserState } from "../../context/UserContext";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { compare } from "../../hooks/Utils";

const ArticleCard = (articleProp: Components.Schemas.Article) => {
  const userState = useUserState();

  const getControllButton = () => {
    if (userState.user) {
      if (compare(userState.user.id, articleProp.user?.id)) {
        return (
          <CardActions>
            <Button size="small">Delete</Button>
            <Button size="small">Modify</Button>
            <Button size="small">View</Button>
          </CardActions>
        );
      } else {
        return (
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        );
      }
    }
  };
  return (
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
          {articleProp.published_at}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="right">
          {articleProp.user ? articleProp.user.username : ""}
        </Typography>
      </CardContent>
      {getControllButton()}
    </Card>
  );
};

export default ArticleCard;
