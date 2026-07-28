import axios from "axios";
import type { UserLogin, UserRegister } from "../types/auth.types";
// import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const baseURL = import.meta.env.VITE_BASE_DB_URL;

const instance = axios.create({
  baseURL,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});


export async function registerUser(data: UserRegister) {
  const { username, email, password } = data;

  try {
    const result = await instance.post("/auth/register", {
      username,
      email,
      password,
    });
    const value = await result.data;

    console.log("register", value);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data);

      return e.response.data;
    } else {
      throw new Error("Unknown error.");
    }
  }
}

export async function loginUser(data: UserLogin) {
  const { email, password } = data;

  try {
    const result = await instance.post("/auth/login", { email, password });
    const value = await result.data;
    console.log("login", value);

  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      // console.log(e.response.data);

      // throw new Error(e.response.data);
      return e.response.data;
    } else {
      throw new Error("Unknown error.");
    }
  }
}
