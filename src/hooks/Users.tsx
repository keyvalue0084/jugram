import axios from "axios";

export interface User {
  id: string;
  username: string;
  password: string;
  passwordConfirm: string;
  passwordOk: boolean;
  email: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed: false;
  blocked: false;
  role?: string;
  created_by?: string;
  updated_by?: string;
}

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
export const addUser = (user: User) => {
  axios
    .post("https://jsbackend.herokuapp.com/auth/local/register", {
      username: user.username,
      email: user.email,
      provider: user.provider,
      password: user.password,
      resetPasswordToken: user.resetPasswordToken,
      confirmationToken: user.confirmationToken,
      confirmed: user.confirmed,
      blocked: user.blocked,
      role: user.role,
      created_by: user.created_by,
      updated_by: user.updated_by
    })
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

// 사용자 정보 가져오기
export const login = (user: User) => {
  axios
    .post("https://jsbackend.herokuapp.com/auth/local/", {
      email: user.email,
      password: user.password
    })
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
