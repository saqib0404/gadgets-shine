import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "detail/:id",
                loader: async () => {
                    const res = await fetch("/products.json");
                    return await res.json();
                    // return fetch("./booksData.json");
                },
                element: < ProductDetail />,
            },
        ]
    },
]);