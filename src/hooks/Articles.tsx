import { jsonAxios } from "./CustomAxios";

// 게시물 리스트
export const getArticles = () => {
  return jsonAxios.get<Components.Schemas.Article[]>("/articles", {});
};

//게시물 생성
export const addArticle = (article: Components.Schemas.NewArticle) => {
  return jsonAxios.post<Components.Schemas.Article>("/articles", article);
};

//게시물 수정
export const updateArticle = (article: Components.Schemas.Article) => {
  return jsonAxios.put<Components.Schemas.Article>(
    `/articles/${article.id}`,
    article
  );
};

// 게시물 조회
export const getArticle = (id: string) => {
  return jsonAxios.get<Components.Schemas.Article>(`/articles/${id}`, {});
};

// 게시물 삭제
export const deleteArticle = (id: string) => {
  return jsonAxios.delete<Components.Schemas.Article>(`/articles/${id}`, {});
};
