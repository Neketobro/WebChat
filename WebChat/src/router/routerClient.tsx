import { createBrowserRouter } from "react-router";
import { WebChatPage,  LoginPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: LoginPage },
      {
        children: [{ path: "user", Component: WebChatPage }],
      },
    ],
  },
]);

export default router;
