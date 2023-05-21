import {
    createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrrorPage";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Regster from "../Pages/Regster/Regster";
import Alltoys from "../Pages/Toys/AllToys/Alltoys";
import ViewDetels from "../Pages/Toys/ViewDetels/ViewDetels";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {path: '/login',
        element: <Login></Login>,
        },
        {
          path:'/regster',
          element: <Regster></Regster>,
        },
        {
          path:'/alltoys',
          element: <Alltoys></Alltoys>,
        },
        {
          path: '/viewdetels/:id',
          element: <ViewDetels></ViewDetels>,
          loader: ({params})=> fetch(`http://localhost:5000/alltoysdata/${params?.id}`)

        },
        {
          path:'blog',
          element: <Blog></Blog>,
        },
       
      ]
    },
  ]);

  export default router
  