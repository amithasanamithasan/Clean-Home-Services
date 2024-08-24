import { FaAd, FaHome } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-72 min-h-screen bg-green-300">
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

                 </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;