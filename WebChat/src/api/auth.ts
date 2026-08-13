import axios from "axios";
import type { UserLogin, UserRegister } from "../types/auth.types";
import { instance } from "./httpClient";
import { saveAccessToken } from "../services/tokenService";

export async function fetchRegister(data: UserRegister) {
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

export async function fetchLogin(data: UserLogin) {
  const { email, password } = data;

  try {
    const response = await instance.post("/auth/login", { email, password });
    const value = await response.data;

    if (value.accessToken) saveAccessToken(value.accessToken);

    return value;
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
