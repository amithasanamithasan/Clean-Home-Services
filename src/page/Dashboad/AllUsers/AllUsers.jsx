import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  // Using axiosSecure to ensure only admin can load the user data
   // axiossecure use korbo karon users data ta je kw load korte parbe na shudhu matro admin use korte parbe
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [] ,refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      //   ,{
      //   // headers kintu akta object tr vitor akta name ace r akta tahke value
      //   headers:{
      //     // Bearer mane ai token ta Bearer kot ti ce application e request korti ce Beare korte ce kw akjon 
      //     // dynamic hiseba babohar kora lagbe
      //     authorization:`Bearer ${localStorage.getItem('access-token')}`
      //   }
      // });
      return res.data;
    }
  });
 const handelMakeadmin= user=>{
  axiosSecure.patch(`/users/admin/${user._id}`)
  .then(res=>{
    console.log(res.data);
    if(res.data.modifiedCount > 0 ){
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is an Admin Now`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  })
 }
 const  handelUserdelete=user=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/users/${user._id}`)
      .then(res=>{
        if(res.data.deletedCount > 0 )
          refetch()
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success"
        });
      })
      
    }
  });

 }

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
                  {/* user er role ta admin hoi tahole take 'Admin' lekha dekhabo UI te na hole button thakbe    */}
                 {user.role === 'admin'? 'Admin': <button onClick={()=>handelMakeadmin(user)} 
                 className="bg-orange-500 text-white p-2 rounded flex items-center justify-center">
                    <FaUsers className="text-2xl" />
                  </button>}
                </td>

                <td className="px-4 py-2 border-b">
                  <button onClick={()=>handelUserdelete(user)} 
                  className="bg-red-500 text-white p-2 rounded flex items-center justify-center">
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
