import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbMoneybag } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Legend, Pie } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

  const { data: chartdata = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order-stats');
      return res.data;
    },
  });

  if (isLoading) {
    return <div><span className="loading loading-ring loading-lg"></span></div>;
  }

  if (isError) {
    return <div>Error loading stats.</div>;
  }

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const piechartData = chartdata.map(data => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className="p-4 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen w-full flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-orange-600 mb-4 animate-bounce">
          Admin Dashboard
        </h1>
        <div className="flex justify-center items-center mb-4">
          <img
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full shadow-lg mx-auto transition-transform duration-300 hover:scale-110"
            src={user.photoURL}
            alt="Admin"
          />
          <div className="ml-4 text-left">
            <h2 className="text-xl md:text-2xl text-neutral-900 font-semibold">{user?.displayName}</h2>
            <h3 className="text-md md:text-lg text-neutral-600">{user.email}</h3>
          </div>
        </div>
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

      <div className="flex justify-between mt-8 w-full max-w-6xl">
        <div className="w-full lg:w-1/2 p-4">
          <BarChart width={500} height={300} data={chartdata} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {piechartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <PieChart width={400} height={400}>
            <Pie
              data={piechartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
              animationDuration={1500}
            >
              {piechartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminHome;
