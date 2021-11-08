import { jsonAxios } from "./CustomAxios";

jsonAxios.interceptors.request.use(config => {
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
  return jsonAxios.get<Components.Schemas.Article[]>("/articles", {});
};

//게시물 생성
export const addArticle = (article: Components.Schemas.NewArticle) => {
  return jsonAxios.post<Components.Schemas.Article>("/articles", article);
};
