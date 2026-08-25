import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/auth.types";
import { fetchCurrentUser } from "../../api/user";

type UserState = {
  user: User | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

const initialState: UserState = {
  user: null,
  loading: "idle",
  error: null,
};

export const getCurrentUser = createAsyncThunk<
  User, // Успешный результат
  void, // Нет входящих аргументов при вызове dispatch(getCurrentUser())
  { rejectValue: string } // Тип для rejectWithValue
>("users/me", async (_, thunkAPI) => {
  // '_' пропускает первый аргумент (arg)
  try {
    const response = await fetchCurrentUser();

    if (!response || response.message) {
      return thunkAPI.rejectWithValue(response?.message || "User not found");
    }

    return response; // Теперь TS знает, что это тип User
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch user");
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default userSlice.reducer;
