import axios from "axios";

const articleAxios = axios.create({
  baseURL: "https://jsbackend.herokuapp.com"
});

articleAxios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers["Content-type"] = "application/x-www-form-urlencoded";
    config.headers["Authorization"] = sessionStorage.getItem("jwt")
      ? `Bearer ${sessionStorage.getItem("jwt")}`
      : "";
  }
  return config;
});

// 게시물 리스트
export const getArticles = (jwt: string) => {
  return articleAxios.get("/articles", {});
};
