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

// 사용자 추가
export const addUser = (newUser: NewUser) => {
  return axios.post("https://jsbackend.herokuapp.com/auth/local/register", {
    username: newUser.username,
    email: newUser.email,
    provider: newUser.provider,
    password: newUser.password,
    resetPasswordToken: newUser.resetPasswordToken,
    confirmationToken: newUser.confirmationToken,
    confirmed: newUser.confirmed,
    blocked: newUser.blocked,
    role: newUser.role,
    created_by: newUser.created_by,
    updated_by: newUser.updated_by
  });
};

// 로그인하기
export const login = (user: NewUser) => {
  let params = new FormData();
  params.append("identifier", user.email);
  if (user.password) {
    params.append("password", user.password);
  }

  return axios.post<UserResponse>(
    "https://jsbackend.herokuapp.com/auth/local",
    params,
    {
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    }
  );
};

// 로그인하기
export const getMe = (jwt: string) => {
  return axios.get<UserResponse>("https://jsbackend.herokuapp.com/users/me", {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + jwt
    }
  });
};

//소셜 로그인
export const socialLogin = (provider: string, search: string) => {
  return axios.get<UserResponse>(
    `https://jsbackend.herokuapp.com/auth/${provider}/callback${search}`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    }
  );
};
