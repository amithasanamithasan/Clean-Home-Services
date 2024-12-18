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
import PaymentSuccessfull from "../page/Payment/PaymentSuccessfull.jsx";
import AddItemsServices from "../Components/Layout/DashBoard/AdminAddItemsService/AddItemsServices.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminManageItems from "../Components/Layout/DashBoard/AdminManageItems/AdminManageItems.jsx";
import { element } from "prop-types";
import AdminUpdateItem from "../Components/Layout/DashBoard/AdminUpdateItem/AdminUpdateItem.jsx";
import PaymentHistory from "../page/Dashboad/PaymentHistory/PaymentHistory.jsx";
import UserDashboardHome from "../page/Dashboad/UserDashboardHome/UserDashboardHome.jsx";
import DashboardAdminHome from "../page/Dashboad/AdminHome/DashboardAdminHome.jsx";

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
    //Normal user dashboard
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       children:[
        {
            path:'cart',
            element:<PrivateRoute><Cart></Cart></PrivateRoute>,
        },
        {
             path:'paymentHistory',
             element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'userHome',
          element: <UserDashboardHome></UserDashboardHome>

        },
    // Admin only Routes
    {
      path:'adminHome',
      element:<AdminRoute><DashboardAdminHome></DashboardAdminHome></AdminRoute>

    },
    {
   path:'addItems',
    element:<AdminRoute><AddItemsServices></AddItemsServices></AdminRoute> 
    },
    {
      path:'manageItems',
       element:<AdminRoute><AdminManageItems></AdminManageItems></AdminRoute>
    },
    {
      path:'updateItems/:id',
      element:<AdminRoute><AdminUpdateItem></AdminUpdateItem></AdminRoute>,
      loader:({params})=>fetch(`http://localhost:5000/service/${params.id} `)
    },
        {
          path:'/dashboard/users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
      
       
       ]
    },
    {
      path:`/payment/success/:tranId`,
      element:<PaymentSuccessfull></PaymentSuccessfull>,
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