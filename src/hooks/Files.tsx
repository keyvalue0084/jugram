import { jsonAxios } from "./CustomAxios";

//파일 생성
export const addFiles = (formElement: any) => {
  return jsonAxios.post("/upload", new FormData(formElement));
};
