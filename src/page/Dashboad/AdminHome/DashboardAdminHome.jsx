import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbMoneybag } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";


const DashboardAdminHome = () => {
    const { user } = useAuth();
    
    const axiosSecure = useAxiosSecure();
    const { data: stats = {}, isLoading, isError } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
      
        },
    });
    return (
        <div className="p-4 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen w-full flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl transform transition-transform duration-300 hover:scale-110 text-orange-600 font-serif font-bold mb-4 animate-bounce">
            Hi, THIS IS ADMIN HOME PAGE
          </h1>
          <p className="text-lg md:text-2xl text-neutral-900 font-semibold mb-2">
            Admin Name: {user?.displayName}
          </p>
          <h3 className="text-xl md:text-3xl text-green-800 font-serif font-light mb-4">
            Email: {user.email}
          </h3>
          <img
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-8 rounded-full shadow-lg mx-auto transition-transform duration-300 hover:scale-110"
            src={user.photoURL}
            alt="Admin"
          />
        </div>
  
        <div className="stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mt-8">
  <div className="stat bg-gradient-to-r from-violet-500 to-indigo-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="stat-figure text-amber-300 bg-amber-600 rounded-lg p-2 animate-pulse">
      <TbMoneybag className="text-3xl sm:text-4xl md:text-5xl transform transition-transform duration-300 hover:scale-125" />
    </div>
    <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">REVENUE</div>
    <div className="stat-value text-xl sm:text-2xl md:text-3xl">{stats.revenue}</div>
    <div className="stat-desc text-sm sm:text-base">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="stat-figure text-sky-300 bg-sky-900 rounded-lg p-2 animate-pulse">
      <FaUsers className="text-2xl sm:text-3xl md:text-4xl transform transition-transform duration-300 hover:scale-125" />
    </div>
    <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">CUSTOMERS</div>
    <div className="stat-value text-xl sm:text-2xl md:text-3xl">{stats.usersCustomers}</div>
    <div className="stat-desc text-sm sm:text-base">↗︎ 400 (22%)</div>
  </div>

  <div className="stat bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="stat-figure bg-pink-700 text-white rounded-lg p-2 animate-pulse">
      <MdProductionQuantityLimits className="text-3xl sm:text-4xl md:text-5xl transform transition-transform duration-300 hover:scale-125" />
    </div>
    <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">PRODUCTS</div>
    <div className="stat-value text-xl sm:text-2xl md:text-3xl">{stats.ServiceItemProducts}</div>
    <div className="stat-desc text-sm sm:text-base">↘︎ 90 (14%)</div>
  </div>

  <div className="stat bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="stat-figure text-black bg-white rounded-lg p-2 animate-pulse">
      <PiCarProfileDuotone className="text-3xl sm:text-4xl md:text-5xl transform transition-transform duration-300 hover:scale-125" />
    </div>
    <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">ORDERS</div>
    <div className="stat-value text-xl sm:text-2xl md:text-3xl">{stats.order}</div>
    <div className="stat-desc text-sm sm:text-base">↘︎ 90 (14%)</div>
  </div>
</div>
</div>
    );
};

export default DashboardAdminHome;