import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ArticleCard = (articleProp: Components.Schemas.Article) => {
  return (
    <Card sx={{ maxWidth: 1300, mb: 2 }}>
      <CardMedia
        component="img"
        alt="a man"
        height="440"
        image="https://blog.kakaocdn.net/dn/bldVq2/btqvyBqsrnU/pYDSTBDpawvvCuiWvNzBr0/img.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {articleProp.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {articleProp.published_at}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
