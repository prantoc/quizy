import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import QuizTopic from "../components/QuizTopics/QuizTopic";
import Layouts from "../layouts/Layouts";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path: "topics",
                element: <QuizTopic />,
                loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path: "quiz/:id",
                element: <Quiz />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
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