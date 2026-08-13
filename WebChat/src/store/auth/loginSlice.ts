import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserLogin } from "../../types/auth.types";
import { fetchLogin } from "../../api/auth";

type LoginState = {
  user: User | null;
  accessToken: string | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

type LoginResponse = {
  user: User;
  accessToken: string;
};

const initialState: LoginState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  UserLogin,
  {
    rejectValue: string;
  }
>("user/login", async (data: UserLogin, thunkAPI) => {
  try {
    const response = await fetchLogin(data);

    console.log("slice - ", response);

    if (response && response.message) {
      throw new Error(response.message);
    }

    if (!response) return;
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  }
});

export const loginSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.loading = "idle";
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
