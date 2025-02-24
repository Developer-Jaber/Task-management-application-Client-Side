import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../Layout/Dashboard'
import LoginPage from '../Page/Login'
import PrivetRoute from './PrivetRoute'
import MyTaskPage from '../Page/MyTaskPage'
import LandingPage from '../Page/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: '/',
        element: <LandingPage></LandingPage>
      },
      {
        path: '/my-task',
        element: <MyTaskPage></MyTaskPage>
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  }
])

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
