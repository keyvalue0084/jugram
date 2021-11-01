import axios, { AxiosResponse } from "axios";

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
  if (sessionStorage.getItem("jwt")) {
    config.headers = {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`
    };
  } else {
    config.headers = {
      "Content-type": "application/x-www-form-urlencoded"
    };
  }

  return config;
});

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
