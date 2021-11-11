import React, { useState, useEffect } from "react";
import { useUserState } from "../../context/UserContext";
import { getArticles } from "../../hooks/Articles";
import ArticleCard from "./ArticleCard";
import BookLoading from "../../lottie/BookLoading";
import { Scrollbars } from "react-custom-scrollbars-2";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const ArticleList = () => {
  const userState = useUserState();
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState<Components.Schemas.Article[]>([]);
  const [viewArticles, setViewArticles] = useState<
    Components.Schemas.Article[]
  >([]);
  useEffect(() => {
    if (userState.jwt) {
      getArticles().then(response => {
        setArticles(response.data);
        setViewArticles(response.data);
        console.log(response.data);
      });
    }
  }, [userState.jwt]);

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (keyword) {
        const filteredArticle = articles.filter(article => {
          if (article.content) {
            if (article.content?.indexOf(keyword) > -1) {
              return article;
            }
          }
        });
        setViewArticles(filteredArticle);
      } else {
        setViewArticles(articles);
      }
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh" }}
    >
      <Grid item xs={12} md={4}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
          defaultValue={keyword}
          onChange={onChange}
          onKeyDown={onKeydown}
        />
      </Grid>
      <Grid item xs={12}>
        <Scrollbars style={{ width: 600, height: "75vh" }} key="scrollbar-key">
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            key="gridContainer"
          >
            {userState.jwt ? (
              viewArticles.map((prop, key) => {
                return (
                  <Grid item xs={12} key={key + "grid"}>
                    <ArticleCard {...prop} key={key}></ArticleCard>
                  </Grid>
                );
              })
            ) : (
              <BookLoading />
            )}
          </Grid>
        </Scrollbars>
      </Grid>
    </Grid>
  );
};

export default ArticleList;
