import { createBrowserRouter } from "react-router";
import { WebChatPage, LoginPage, RegisterPage } from "../pages";
import { AuthGuard, AuthLayout } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthGuard,
    children: [
      {
        index: true,
        Component: WebChatPage,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);

export default router;
