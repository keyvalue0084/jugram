import { AxiosResponse } from "axios";
import customAxios from "./CustomAxios";
import { toast } from "react-toastify";

export type NewUser = Components.Schemas.NewUsersPermissionsUser;
export type User = Components.Schemas.UsersPermissionsUser;
export interface UserResData {
  user: NewUser;
  jwt: string;
}
export interface UserResponse extends AxiosResponse {
  user: NewUser;
  jwt: string;
}

customAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      toast.error(error.response.data.message[0].messages[0].message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });
    }
    return Promise.reject(error);
  }
);

// 사용자 추가
export const addUser = (newUser: NewUser) => {
  return customAxios.post("/auth/local/register", {
    ...newUser
  });
};

// 로그인하기
export const login = (user: NewUser) => {
  let params = new FormData();
  params.append("identifier", user.email);
  if (user.password) {
    params.append("password", user.password);
  }
  return customAxios.post<UserResponse>("/auth/local", params);
};

//내정보
export const getMe = (jwt: string) => {
  return customAxios.get<Components.Schemas.NewUsersPermissionsUser>(
    "/users/me"
  );
};

//소셜 로그인
export const socialLogin = (provider: string, search: string) => {
  return customAxios.get<UserResponse>(`/auth/${provider}/callback${search}`);
};
