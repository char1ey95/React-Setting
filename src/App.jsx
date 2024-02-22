import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

function App () {

    return(
        <>
            <RouterProvider router={router} />
            <NavBar />
        </>
    )
}

export default App;