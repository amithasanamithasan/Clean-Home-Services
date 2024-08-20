// import { useContext } from "react";

// import { AuthContext } from "../../Providers/AuthProviders";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth"
import { useNavigate } from "react-router-dom";
const AddServiceCard = ({item}) => {
    const { title,image,price,description}=item;
 // const {user}=useContext(AuthContext);
// SEND THE USERS TO THE LOGIN PAGE
const navigate =useNavigate();

const {user}=useAuth();

    const handeladdcart=service=>{
if(user && user.email){
    // user jodi email thake  send cart item to the database
}
else{
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
        // SEND THE USERS TO THE LOGIN PAGE
       navigate('/login');
        }
      });
}
    }
    return (
      

<div className="max-w-sm  border-2
 border-x-fuchsia-700 border-t-indigo-700 border-b-indigo-700
 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700    bg-gradient-to-r
  from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <figure>
        <img className="rounded-t-lg w-full h-[200px]" src={image} alt="" />
    </figure>
  
    <div className="p-2 ">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-mono text-1xl text-white dark:text-gray-400">{description}</p>
        <p className= "   font-bold text-3xl text-black text-right ">TK-{price}</p>
        <button onClick= {()=>handeladdcart(item)} href="#" className="inline-flex  items-center px-3 py-3 text-sm font-extrabold rounded-lg text-center
        bg-gradient-to-r from-yellow-400 to-purple-600 hover:from-pink-500 hover:to-orange-500 ">
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