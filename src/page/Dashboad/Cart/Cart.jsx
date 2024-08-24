import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [cart] = useCart();
    const TotalPrice = cart.reduce((total, sum) => total + sum.price, 0);

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
        
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map(item=> <tr key={item._id} >
            
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
     }
     
   
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Cart;
