import { FaAd, FaHome, FaShoppingBag } from "react-icons/fa";
import { FaBookOpen, FaCalendar, FaList } from "react-icons/fa6";
import { MdContactPhone, MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">

            {/* dashboard side bar */}
            <div className="w-72 min-h-screen bg-green-300">
                 <p className="text-2xl p-3 font-serif font-bold  
                 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-400">
                    HOME CLEANING SERVICES BD</p>
                    <div className="divider"></div>
                 <ul className="menu">
                 <li>
                    <NavLink to ="/dashboard/userHome">                  
                   <FaHome className="text-2xl"></FaHome>
                   User Home</NavLink>
                   </li>
                   <li>
                    <NavLink to ="/dashboard/reservation">                  
                   <FaCalendar className="text-2xl"></FaCalendar>
                   Reservation</NavLink>
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
                   <FaList className="text-2xl"></FaList>
                Real Payment History</NavLink>
                   </li>
                   <div className="divider"></div>
                   <li>
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
            <div className="flex-1 p-8">
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;