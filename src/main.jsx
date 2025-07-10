import { StrictMode } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserRoot from './Layouts/UserRoot';
import BookLibrary from './pages/BookLibrary';
import BookDetails from './pages/BookDetails';


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
