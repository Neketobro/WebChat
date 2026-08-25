import axios from "axios";
import { instance } from "./httpClient";

export async function fetchCurrentUser() {
  try {
    const response = await instance.get("/users/me");

    return response.data.user;
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
