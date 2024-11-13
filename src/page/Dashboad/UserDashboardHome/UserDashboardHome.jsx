import { TbMoneybag } from "react-icons/tb";
import useAuth from "../../../Hooks/useAuth";
import useCart from"../../../Hooks/useCart";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const UserDashboardHome = () => {
    const [cart]=useCart();
    const { user } = useAuth();

  


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div className="p-4 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen w-full flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-orange-600 mb-4 animate-bounce">
 ` Dashboard:{user?.displayName}`</h1>
          <div className="flex justify-center items-center mb-4">
            <img
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full shadow-lg mx-auto transition-transform duration-300 hover:scale-110"
              src={user?.photoURL}
              alt="User"
            />
            <div className="ml-4 text-left">
              <h2 className="text-xl md:text-2xl text-neutral-900 font-semibold">{user?.displayName}</h2>
              <h3 className="text-md md:text-lg text-neutral-600">{user?.email}</h3>
            </div>
          </div>
        </div>
        <div className="stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mt-8">
        <div className="stat bg-gradient-to-r from-violet-500 to-indigo-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="stat-figure text-amber-300 bg-amber-600 rounded-lg p-2 animate-pulse">
            <TbMoneybag className="text-3xl sm:text-4xl md:text-5xl transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold"> Amount</div>
          <div className="stat-value text-xl sm:text-2xl md:text-2xl"></div>
          <div className="stat-desc text-sm sm:text-base">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="stat-figure text-sky-300 bg-sky-900 rounded-lg p-2 animate-pulse">
            <FaUsers className="text-2xl sm:text-3xl md:text-4xl transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">My Orders</div>
          <div className="stat-value text-xl sm:text-2xl md:text-3xl"></div>
          <div className="stat-desc text-sm sm:text-base">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="stat-figure bg-pink-700 text-white rounded-lg p-2 animate-pulse">
            <MdProductionQuantityLimits className="text-2xl sm:text-3xl md:text-4xl transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">PRODUCT</div>
          <div className="stat-value text-xl sm:text-2xl md:text-3xl"></div>
          <div className="stat-desc text-sm sm:text-base">↘︎ 90 (14%)</div>
        </div>

        <div className="stat bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="stat-figure text-black bg-white rounded-lg p-2 animate-pulse">
            <PiCarProfileDuotone className="text-3xl sm:text-4xl md:text-5xl transform transition-transform duration-300 hover:scale-125" />
          </div>
          <div className="stat-title text-lg sm:text-xl md:text-2xl font-bold">ORDERS</div>
          <div className="stat-value text-xl sm:text-2xl md:text-3xl"></div>
          <div className="stat-desc text-sm sm:text-base">↘︎ 90 (14%)</div>
        </div>
      </div>
        <div className="flex justify-between mt-8 w-full max-w-6xl">
        <div className="w-full lg:w-1/2 p-4">
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
  </div>
        </div>
    );
};

export default UserDashboardHome;