import React, { useState, useEffect } from "react";
import { useUserState } from "../../context/UserContext";
import { getArticles } from "../../hooks/Articles";
import Box from "@mui/material/Box";
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
    <Box
      pl={30}
      pr={30}
      pt={10}
      style={{ maxHeight: "80vh", overflow: "auto" }}
    >
      {userState.jwt ? (
        articles.map((prop, key) => {
          return <ArticleCard {...prop}></ArticleCard>;
        })
      ) : (
        <BookLoading />
      )}
    </Box>
  );
};

export default ArticleList;
