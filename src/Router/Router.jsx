
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import LoginPage from "../Page/Login";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    }
 ])

const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
};

export default Router;