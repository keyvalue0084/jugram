import React, { useState, useEffect } from "react";
import { useUserState } from "../../context/UserContext";
import { getArticles } from "../../hooks/Articles";
import Grid from "@mui/material/Grid";
import ArticleCard from "./ArticleCard";
import BookLoading from "../../lottie/BookLoading";

const ArticleList = () => {
  const userState = useUserState();
  const [articles, setArticles] = useState<Components.Schemas.Article[]>([]);

  useEffect(() => {
    if (userState.jwt) {
      getArticles(userState.jwt).then(response => {
        console.log(response.data);
        setArticles(response.data);
      });
    }
  }, [userState.jwt]);

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      paddingTop={10}
      paddingBottom={10}
    >
      {userState.jwt ? (
        articles.map((prop, key) => {
          return <ArticleCard {...prop} key={key}></ArticleCard>;
        })
      ) : (
        <BookLoading />
      )}
    </Grid>
  );
};

export default ArticleList;
