import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddVolunteerPost from '../pages/AddVolunteerPost'
import ManageMyPost from '../pages/ManageMyPost'
import PrivateRoute from './PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <NotFound/>,
    children: [
     {
        index: true,
        element: <Home/>
     },
     {
      path: '/login',
      element: <Login/>
     },
     {
      path: '/register',
      element: <Register/>
     },
     {
      path: '/volunteer-post',
      element: <PrivateRoute><AddVolunteerPost/></PrivateRoute>
     },
     {
      path: '/mypost',
      element: <PrivateRoute><ManageMyPost/></PrivateRoute>
     }
    ],
  },
])

export default router