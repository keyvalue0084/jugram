import customAxios from "./CustomAxios";

customAxios.interceptors.request.use(config => {
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
  return customAxios.get<Components.Schemas.Article[]>("/articles", {});
};
