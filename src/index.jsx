import * as React from "react";
import * as ReactDOM from "react-dom/client"
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contacts";
import { loader } from "./routes/loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: loader,
        // loader: () => {
        //     console.log("excute")
        //     return []
        // },
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
)