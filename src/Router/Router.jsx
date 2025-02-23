
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>
    }
 ])

const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
};

export default Router;