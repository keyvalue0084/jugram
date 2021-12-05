import { jsonAxios } from "./CustomAxios";

//파일 생성
export const addFiles = (formElement: any) => {
  return jsonAxios.post("/upload", new FormData(formElement));
};

// 게시물 삭제
export const deleteFile = (id: string) => {
  return jsonAxios.delete(`/upload/files/${id}`, {});
};
