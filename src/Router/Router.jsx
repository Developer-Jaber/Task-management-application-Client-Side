
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import LoginPage from "../Page/Login";
import PrivetRoute from "./PrivetRoute";
import MyTaskPage from "../Page/MyTaskPage";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/my-task',
        element: <MyTaskPage></MyTaskPage>
    }
 ])

const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
};

export default Router;