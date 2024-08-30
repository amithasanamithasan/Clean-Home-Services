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
import OrderServices from "../page/Orderservices/OrderServices/OrderServices.jsx";
import Dashboard from "../Components/Layout/DashBoard/Dashboard.jsx";
import Cart from"../page/Dashboad/Cart/Cart.jsx"
import PrivateRoute from"../Routes/PrivateRoute.jsx"
import AllUsers from "../page/Dashboad/AllUsers/AllUsers.jsx";
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
          path:'orderservice',
          element:<OrderServices></OrderServices>
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
    // user dashboard
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
       children:[
        {
            path:'cart',
            element:<PrivateRoute><Cart></Cart></PrivateRoute>,
        },
        {
          path:'/dashboard/users',
          element:<AllUsers></AllUsers>
        },
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