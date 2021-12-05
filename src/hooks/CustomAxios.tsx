import axios from "axios";

export const jsonAxios = axios.create({
  baseURL: "https://jsbackend.herokuapp.com"
});

jsonAxios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers["Content-type"] = "application/json";
    if (sessionStorage.getItem("jwt")) {
      config.headers["Authorization"] = `Bearer ${sessionStorage.getItem(
        "jwt"
      )}`;
    }
  }
  return config;
});

const customAxios = axios.create({
  baseURL: "https://jsbackend.herokuapp.com"
});

customAxios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers["Content-type"] = "application/x-www-form-urlencoded";
    if (sessionStorage.getItem("jwt")) {
      config.headers["Authorization"] = `Bearer ${sessionStorage.getItem(
        "jwt"
      )}`;
    }
  }
  return config;
});

export default customAxios;
