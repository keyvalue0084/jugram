import axios, { AxiosResponse } from "axios";
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
const userAxios = axios.create({ baseURL: "https://jsbackend.herokuapp.com" });

userAxios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers["Content-type"] = "application/x-www-form-urlencoded";
    config.headers["Authorization"] = sessionStorage.getItem("jwt")
      ? `Bearer ${sessionStorage.getItem("jwt")}`
      : "";
  }
  return config;
});

userAxios.interceptors.response.use(
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
  return userAxios.post("/auth/local/register", {
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
  return userAxios.post<UserResponse>("/auth/local", params);
};

//내정보
export const getMe = (jwt: string) => {
  return userAxios.get<Components.Schemas.NewUsersPermissionsUser>("/users/me");
};

//소셜 로그인
export const socialLogin = (provider: string, search: string) => {
  return userAxios.get<UserResponse>(`/auth/${provider}/callback${search}`);
};
