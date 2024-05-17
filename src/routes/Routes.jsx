import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddVolunteerPost from '../pages/AddVolunteerPost'
import PrivateRoute from './PrivateRoute'
import NeedVolunteer from '../pages/NeedVolunteer'
import VolunteerNeedDetails from '../pages/VolunteerNeedDetails'
import VolunteerFormRequest from '../pages/VolunteerFormRequest'
import ManageMyPostPage from '../pages/ManageMyPostPage'
import UpdatePage from '../pages/UpdatePage'


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
      path: '/need-volunteer',
      element: <NeedVolunteer/>
     },
     {
      path:'/details/:id',
      element: (<PrivateRoute><VolunteerNeedDetails/></PrivateRoute>),
      loader: ({ params }) =>
        fetch(`https://volunteer-sphere-backend-eight.vercel.app/post/${params.id}`),
     },
     {
      path: '/request/:id',
      element:(<PrivateRoute><VolunteerFormRequest/></PrivateRoute>),
      loader: ({ params }) =>
        fetch(`https://volunteer-sphere-backend-eight.vercel.app/post/${params.id}`),
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
      path:'/myPost',
      element: <PrivateRoute><ManageMyPostPage/></PrivateRoute>
     },
     {
      path: '/update/:id',
      element: <PrivateRoute><UpdatePage/></PrivateRoute>,
      loader: ({ params }) =>
        fetch(`https://volunteer-sphere-backend-eight.vercel.app/post/${params.id}`),
     }
    ],
  },
])

export default router