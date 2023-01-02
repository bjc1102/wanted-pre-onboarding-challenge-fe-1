import axios, { AxiosRequestHeaders } from "axios";
import handleToken from "../utils/handleToken";
import history from "./history";

const baseURL = "http://localhost:8080";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

//@ts-ignore
interface HeaderType extends AxiosRequestHeaders {
  ["Content-Type"]: string;
  Authorization: string;
}

instance.interceptors.request.use(
  (config) => {
    const headers = config.headers as HeaderType;
    const token = localStorage.getItem("token") ?? "";

    if (token) {
      headers["Content-Type"] = "application/json";
      headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    //요청 에러가 발생했을 때 수행할 로직
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    handleToken();
    return Promise.resolve();
  }
);

export default instance;
