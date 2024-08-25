import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart,refetch] = useCart();
 const axiosSecure=useAxiosSecure();

    const TotalPrice = cart.reduce((total, sum) => total + sum.price, 0);
const handelcartdeleted= id =>{
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
      axiosSecure.delete(`/carts/${id}`)
        .then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        })
        .catch((error) => {
          console.error('Error deleting cart item:', error);
        });
    }
  });
};
    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row
            justify-between items-center p-4 border-2
            rounded-lg border-x-green-400 
            border-y-fuchsia-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-0">Items: {cart.length}</h2>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-0">Total Price: ${TotalPrice}</h2>
                <button className="btn btn-primary mt-2 md:mt-0">Pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="font-bold sm:text-2xl md:text-3xl  text-slate-950">SL</th>
        <th className="font-bold sm:text-2xl md:text-3xl text-emerald-500">IMAGE</th>
        <th className="font-bold sm:text-2xl md:text-3xl text-amber-400">NAME</th>
        <th className="font-bold sm:text-2xl md:text-3xl text-pink-600">PRICE</th>
        <th className="font-bold sm:text-2xl md:text-3xl text-rose-900">ACTION</th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map((item, index)=> <tr key={item._id} >
            <th className="font-bold sm:text-2xl md:text-3xl">
              {index}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-20 w-20">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold "></div>
                  <div className="text-sm opacity-50"></div>
                </div>
              </div>
            </td>
            <td>
           
              <br/>
              <span className="badge badge-ghost font-semibold  sm:text-2xl md:text-3xl  badge-lg">{item.title}</span>
            </td>
            <td className=" font-semibold sm:text-2xl md:text-3xl">TK{item.price}</td>
            <td className="px-4 py-2 border-b">
         
             <button onClick={()=>handelcartdeleted(item._id)} className="bg-red-500 text-white p-2 rounded">
              <FaTrashAlt />
             </button>
              
            </td>
          </tr>)
     }
     
   
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Cart;
