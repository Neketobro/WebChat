import axios from "axios";
import type { UserLogin, UserRegister } from "../types/auth.types";
import { instance } from "./httpClient";
import { saveAccessToken } from "../services/tokenService";

export async function fetchRegister(data: UserRegister) {
  const { username, email, password } = data;

  try {
    const response = await instance.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
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

    if (response.data.accessToken) saveAccessToken(response.data.accessToken);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      return e.response.data;
    } else {
      throw new Error("Unknown error.");
    }
  }
}
