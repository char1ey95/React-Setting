import { createBrowserRouter } from "react-router-dom";

const routes = [
    { path: "/", element: <div>Home</div> },
    { path: "/contents", element: <div>Contents</div> },
    { path: "/private", element: <div>Private Story</div> },
    { path: "/public", element: <div>Public Story</div> },
    { path: "/write", element: <div>Write</div> }
]

export const router =  createBrowserRouter(routes)