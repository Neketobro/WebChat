import { createBrowserRouter, Navigate } from "react-router";
import { WebChatPage, LoginPage, RegisterPage } from "../pages";
import { AuthGuard, AuthLayout, PageNotFound } from "../components";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
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

  {
    Component: AuthGuard,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        Component: AuthLayout,
        children: [
          {
            index: true,
            Component: WebChatPage,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
