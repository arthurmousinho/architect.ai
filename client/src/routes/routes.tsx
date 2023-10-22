import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Ideias } from "@/pages/ideias";
import { Home } from "@/pages/home";

export const ROUTES = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "/ideas", element: <Ideias /> },
        ]
    }
])