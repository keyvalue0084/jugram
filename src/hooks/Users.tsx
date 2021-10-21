import axios, { AxiosResponse } from "axios";

export type NewUser = Components.Schemas.NewUsersPermissionsUser;
export type User = Components.Schemas.UsersPermissionsUser;

// 아이디 체크
export const checkId = (user: User) => {
  axios
    .get("https://jsbackend.herokuapp.com/users/" + user.id, {
      params: {
        id: user.id
      }
    })
    .then(function (response) {
      // response
    })
    .catch(function (error) {
      // 오류발생시 실행
    })
    .then(function () {
      // 항상 실행
    });
};

// 사용자 추가
export const addUser = (newUser: NewUser, callback: () => void) => {
  axios
    .post("https://jsbackend.herokuapp.com/auth/local/register", {
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
    })
    .then(function (response) {
      // response
      console.log(response);
      callback();
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.error(error);
    })
    .then(function () {
      // 항상 실행
    });
};

// 사용자 정보 가져오기
export const getUser = (user: User) => {
  axios
    .post("https://jsbackend.herokuapp.com/users/" + user.id, {})
    .then(function (response) {
      // response
      console.log(response);
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.error(error);
    })
    .then(function () {
      // 항상 실행
    });
};

// 로그인하기
export const login = (
  user: NewUser,
  callback: (response: AxiosResponse) => void
) => {
  let params = new FormData();
  params.append("identifier", user.email);
  if (!!user.password) {
    params.append("password", user.password);
  }

  axios
    .post("https://jsbackend.herokuapp.com/auth/local", params, {
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    })
    .then(function (response) {
      // response
      callback(response);
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.error(error);
    })
    .then(function () {
      // 항상 실행
    });
};

// 로그인하기
export const getMe = (
  jwt: string,
  callback: (response: AxiosResponse) => void
) => {
  axios
    .get("https://jsbackend.herokuapp.com/users/me", {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + jwt
      }
    })
    .then(function (response) {
      // response
      callback(response);
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.error(error);
    })
    .then(function () {
      // 항상 실행
    });
};
