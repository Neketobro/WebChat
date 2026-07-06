import { createBrowserRouter } from "react-router";
import { WebChatPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, Component: WebChatPage }],
  },
]);

export default router;
