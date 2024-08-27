import { FaGoogle } from "react-icons/fa";
import useAuth from"../../Hooks/useAuth"
import userAxiosPublic from "../../Hooks/userAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
const {GoogleAuth}=useAuth();
const axiosPublic=userAxiosPublic();
const navigate=useNavigate();
    const handelGoogleSginIn=()=>{
        GoogleAuth()
        .then(result=>{
           console.log(result.user);
           const userInfo={
            email: result.user?.email,
        name:result.user?.displayName
           }
           axiosPublic.post ('/users',userInfo)
           .then(res=>{
               console.log(res.data);
               navigate('/');
           })
        })
        .catch(error=>console.log(error))
    
    }
    return (
        <div className="p-8">
             <div className=" border  mr-0   p-1  m-1 hover:bg-emerald-500 border-cyan-400 rounded-full   ">
               <button onClick={handelGoogleSginIn}  className="py-1 ">
          <p className="text-2xl flex text-fuchsia-700 "> <FaGoogle className="mr-1 text-3xl text-fuchsia-200"></FaGoogle> Login_with_Google </p>
          </button> 
               </div>
        </div>
    );
};

export default SocialLogin;