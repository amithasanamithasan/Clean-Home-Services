import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { useState } from 'react';

const AddServiceCard = ({item}) => {
    const axiosSecure = useAxiosSecure();
    const { title, image, price, description, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const [, refetch] = useCart();
    const [isReadMore, setIsReadMore] = useState(false);

    // Function to toggle read more state
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const handeladdcart = () => {
        if(user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                title,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
        } else {
            Swal.fire({
                title: "YOU ARE NOT LOGIN ?",
                text: "Please Log In Add To The Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "PLEASE LOG IN!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state:{from:location}});
                }
            });
        }
    }

    return (
        <div className="max-w-sm m-3 border border-x-fuchsia-700 border-t-indigo-700 border-b-indigo-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <figure>
                <img className="rounded-t-lg w-full h-[200px]" src={image} alt="" />
            </figure>
            <div className="p-2">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <div className="mb-3 font-mono text-2xl text-white dark:text-gray-100">
                    {isReadMore ? description : truncateText(description, 100)}
                    {description.length > 100 && (
                        <button 
                            onClick={toggleReadMore}
                            className="text-yellow-400 hover:text-yellow-300 ml-2 font-bold underline"
                        >
                            {isReadMore ? 'Show Less' : 'Read More'}
                        </button>
                    )}
                </div>
                <p className="font-bold text-3xl text-black text-right">TK-{price}</p>
                <button 
                    onClick={() => handeladdcart(item)} 
                    className="inline-flex border-4 items-center px-3 py-3 text-sm font-semibold text-white rounded-lg text-center bg-gradient-to-r from-black to-purple-600 hover:from-pink-500 hover:to-orange-500"
                >
                    ADD_SERVICE
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AddServiceCard;