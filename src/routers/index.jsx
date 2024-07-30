import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import About from "../pages/About";
import Homepage from "../pages/Index";
import RootLayout from "../layouts/RootLayout";
import { posts, postById } from "../apis/loaders"
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: posts,
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: postById,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);
