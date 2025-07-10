import { StrictMode } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserRoot from './Layouts/UserRoot';
import BookLibrary from './pages/BookLibrary';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';
import Register from './pages/Register';


const router = createBrowserRouter([
  {
    path:"/",
    element:<UserRoot/>,
    children:[
{
  path:"",
  element:<BookLibrary/>
},
{
    path: "login",
    element: <Login/>
  },
    {
    path: "register",
    element: <Register/>
  },
{
  path:"books/:id",
  element:<BookDetails/>
}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
