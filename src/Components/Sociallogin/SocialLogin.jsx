import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="p-8">
             <div className=" border  mr-0   p-1  m-1 hover:bg-emerald-500 border-cyan-400 rounded-full   ">
               <button  className="py-1 ">
          <p className="text-2xl flex text-fuchsia-700 "> <FaGoogle className="mr-1 text-3xl text-fuchsia-200"></FaGoogle> Login_with_Google </p>
          </button> 
               </div>
        </div>
    );
};

export default SocialLogin;