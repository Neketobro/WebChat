import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  baseURL: "http://192.168.31.135:5000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

type User = {
  username: string;
  email: string;
  password: string;
};

// export const response = async () => await instance.get("/auth/login");
// export const registerUser1 = async (data: User) =>
//   await instance.post("/register", { data });

export async function registerUser(data: User) {
  const result = await instance.post("/register", { data });
  const value = await result.data;
  
  console.log(value);
}
