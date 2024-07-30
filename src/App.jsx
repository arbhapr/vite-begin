import "./App.css";
import { router } from "./routers";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";

function App() {
    const user = {
        name: "Admin",
    };

    return (
        <>
            <GlobalContext.Provider value={user}>
                <RouterProvider router={router} />
            </GlobalContext.Provider>
        </>
    );
}

export default App;
