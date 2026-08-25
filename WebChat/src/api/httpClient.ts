import axios from "axios";
// import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const baseURL = import.meta.env.VITE_BASE_DB_URL;

export const instance = axios.create({
  baseURL,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");    

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }    

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
