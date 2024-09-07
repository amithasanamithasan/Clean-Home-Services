import { FaAd, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaBookOpen, FaList } from "react-icons/fa6";
import { MdContactPhone, MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { RiTeamLine } from "react-icons/ri";
import useCart from "../../../Hooks/useCart";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";

import { BsFillHouseAddFill } from "react-icons/bs";
import { PiUsersFourFill } from "react-icons/pi";
import useAdmin from "../../../Hooks/useAdmin";
const Dashboard = () => {
    const [cart]=useCart();
    // get admin value from the  database
    const [isAdmin]=useAdmin();
    return (
        <div className="flex">

            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-300">
                 <p className="text-2xl p-3 font-serif font-bold  
                 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-400">
                    HOME CLEANING SERVICES BD</p>
                    <div className="divider"></div>
                 <ul className="menu font-semibold">
                    {/* isAdmin jodi hoi tahole admin dashboard dekha be na hole users dashboard dekha be */}
                  {
                    isAdmin? <>
                      <li>
                    <NavLink to ="/dashboard/adminHome">                  
                   <FaHome className="text-2xl"></FaHome>
                   Admin Home</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/reservation">                  
                   <RiTeamLine className="text-2xl"></RiTeamLine>
                   Employee List</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/addItems">                  
                   <BsFillHouseAddFill className="text-2xl"></BsFillHouseAddFill>
                   Add Items Services</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/manageItems">                  
                   <MdOutlineManageAccounts className="text-2xl"></MdOutlineManageAccounts>
                   Manage Items</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/bookings">                  
                   <FaList className="text-2xl"></FaList>
                  Manage Bookings</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/users">                  
                   <PiUsersFourFill className="text-2xl"></PiUsersFourFill>
                   All Users</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/paymentHistory">                  
                    <GiReceiveMoney className="text-2xl" > </GiReceiveMoney>
                Real Payment History</NavLink>
                   </li>
                    </>
                    // users dashboard layouts
                    :
                    <>
                      <li>
                    <NavLink to ="/dashboard/userHome">                  
                   <FaHome className="text-2xl"></FaHome>
                   User Home</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/reservation">                  
                   <RiTeamLine className="text-2xl"></RiTeamLine>
                   Employee List</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/cart">                  
                   <FaShoppingCart className="text-2xl"></FaShoppingCart>
                   My Cart ({cart.length})</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/review">                  
                   <FaList className="text-2xl"></FaList>
                  My Bookings</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/review">                  
                   <FaAd className="text-2xl"></FaAd>
                   Add a Review</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/paymentHistory">                  
                    <GiReceiveMoney className="text-2xl" > </GiReceiveMoney>
                Real Payment History</NavLink>
                   </li>
                    </>
                  }
                   <div className="divider"></div>
                   <li>
                    {/* Nav Links */}
<NavLink to ="/">                  
<FaHome className="text-2xl"></FaHome>
Home</NavLink>
</li>

<li>
<NavLink to ="/orderservice">                  
<MdOutlineMenuBook className="text-2xl" />
MENU</NavLink>
</li>
<li>
<NavLink to ="/Shop">                  
<FaShoppingBag className="text-2xl" />
SHOP</NavLink>

</li>
<li>
<NavLink to ="/contact">                  
<MdContactPhone className="text-2xl" />
CONTACT</NavLink>

<NavLink to ="/about">                  
<FaBookOpen className="text-2xl" />
  ABOUT</NavLink>

</li>
                 </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 w-full bg-slate-200 py-3 ">
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;