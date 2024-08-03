import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from'../page/About.jsx';
import Contact from'../page/Contact.jsx'
import Login from "../page/Login.jsx";
import Register from "../page/Register.jsx";
import Adminlayout from "../Components/Layout/AdminLayout.jsx/Adminlayout.jsx";
import Addservices from "../page/Addservices.jsx";
import Home from "../page/Home.jsx";
import Menu from "../page/Menu/Menu/Menu.jsx";

  const routes = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
         path:'about',
         element:<About></About>
      },
      {
         path:'contact',
         element:<Contact></Contact>
      }
    ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/admin',
      element:<Adminlayout></Adminlayout>,
      children:[
        {
        path:'addservice',
        element:<Addservices></Addservices>
      },
    ]
    }
  ]);
  export default routes