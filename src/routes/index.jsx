import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Create = React.lazy(() => import("../pages/CreateBlog"));
const Blog = React.lazy(() => import("../pages/Blog"));

const mainRoutes = [
    {
        path: PathConstants.HOME,
        element: <Home />
    },
    {
        path: PathConstants.CREATE,
        element: <Create />
    }
]
const blogRoutes = [
    {
        path: PathConstants.BLOG,
        element: <Blog />
    }
]
export { mainRoutes, blogRoutes };