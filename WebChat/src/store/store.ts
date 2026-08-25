import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/loginSlice.ts";
import userReducer from "./auth/userSlice.ts";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
