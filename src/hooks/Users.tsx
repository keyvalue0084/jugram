import axios from "axios";

// 아이디 체크
export const checkId = (id: String, password: String) => {
  axios
    .get("url", {
      params: {
        id: id
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
export const addUser = (id: String, password: String) => {
  axios
    .put("url", {
      username: id,
      password: password
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
