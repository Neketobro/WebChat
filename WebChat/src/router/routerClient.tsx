import { createBrowserRouter } from "react-router";
import { MainPage } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {index: true, Component: MainPage}
        ]
    }
])

export default router;