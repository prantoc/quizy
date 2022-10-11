import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layouts from "../layouts/Layouts";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "quiz-topics",
                element: <Home />,
            },
            {
                path: "statistics",
                element: <Home />,
            },
            {
                path: "blog",
                element: <Home />,
            },
        ],
    },
]);