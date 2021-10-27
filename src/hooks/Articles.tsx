import axios, { AxiosResponse } from "axios";

// 게시물 리스트
export const getArticles = (jwt: string) => {
  return axios.get("https://jsbackend.herokuapp.com/articles", {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + jwt
    }
  });
};
