import { RouterProvider } from "react-router";
import router from "./router/routerClient";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
