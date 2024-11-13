import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/order');
            // console.log("Fetched Data:", res.data); // Log response to verify structure
            return res.data;
        }
    });

    return (
        <div>
            <h2 className="text-2xl">Total Payments: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.product.email}</td>
                                <td>${order.product.price}</td>
                                <td>{order.tranjectionId || "N/A"}</td> {/* Adjusted spelling */}
                                <td>{order.date || "N/A"}</td> {/* Ensure date exists */}
                                <td>{order.paidStatus ? "Paid" : "Unpaid"}</td> {/* Adjusted for boolean */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
