import axios from "axios";

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
