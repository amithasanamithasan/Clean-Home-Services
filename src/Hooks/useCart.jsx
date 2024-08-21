import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    const axioxsecure =useAxiosSecure();
    // tan stack query
    const {data: cart = []}=useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
            const res= await axioxsecure.get('/carts')
            return res.data;
        }
    })
    return [cart]
};

export default useCart;