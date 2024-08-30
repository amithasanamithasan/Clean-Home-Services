import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  // Using axiosSecure to ensure only admin can load the user data
   // axiossecure use korbo karon users data ta je kw load korte parbe na shudhu matro admin use korte parbe
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center my-4">
        <h1 className="text-xl md:text-2xl p-4">All Users</h1>
        <h1 className="text-xl md:text-2xl p-4">Total Users: {users.length}</h1>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-violet-500 rounded-lg border">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-white">SL</th>
              <th className="px-4 py-2 border-b text-white">NAME</th>
              <th className="px-4 py-2 border-b text-white">EMAIL</th>
              <th className="px-4 py-2 border-b text-white">ROLE</th>
              <th className="px-4 py-2 border-b text-white">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-teal-300 text-black">
                <td className="px-4 py-2 border-b font-bold">{index + 1}</td>
                <td className="px-4 py-2 border-b font-bold">{user.name}</td>
                <td className="px-4 py-2 border-b font-bold">{user.email}</td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-orange-500 text-white p-2 rounded flex items-center justify-center">
                    <FaUsers className="text-2xl" />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-red-500 text-white p-2 rounded flex items-center justify-center">
                    <FaTrashAlt className="text-1xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
