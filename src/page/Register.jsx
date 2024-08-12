import Lottie from "lottie-react";
import login from "../Animation - 1722449569103.json";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const[showpassword,setShowpassword]=useState(false);
    return (
        <>
        <Helmet>
            <title>HOME SERVICES CLEAN|Sign_Up</title>
        </Helmet>
       <div className="hero h-[500px] w-[500px]bg-base-200">
       <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-left">
           <h1 className="text-4xl text-center  font-bold">Sign_Up now!</h1>
         <Lottie   className="h-[400px]" animationData={ login} loop={true}></Lottie>
         </div>
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <form onSubmit=""  className="card-body">
           <div className="form-control">
               <label className="label">
                 <span className="label-text">Name</span>
               </label>
               <input type="text" name="name"   placeholder="Enter your name" className="input input-bordered"  />

             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Photo URL</span>
               </label>
               <input type="file"     placeholder="Folder Images" className="input input-bordered"  />
              <span className="text-red-600">Photo  is required</span>
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input type="email"  name="email"  placeholder="email" className="input input-bordered"  />
                <span>This email field is required</span>
             </div>
             {/* <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input type="password" name="password" 
                  placeholder="password" className="input input-bordered"  />
          
               
             
               <label className="label">
 
               </label>
             </div> */}


               <label  className="  text-lg  text-gray-900 dark:text-white">Your password</label>


   {/* terms and condetion checkbox */}
  <div className="mb-5 text-right relative top-1/3">
  <input    placeholder="Enter  password" 
    type={ showpassword ? "text" :"password" }
    name="password" 
    id="password"
     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
       dark:border-gray-600 dark:for-gray-400 dark:text-white dark:focus:ring-blue-500
        dark:focus:border-blue-500 dark:shadow-sm-light" required />
      <span className="absolute top-1/3 right-0" onClick={()=>setShowpassword(!showpassword)} >
      {
        showpassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
      }
      
      </span>
  </div>
             <div className="form-control mt-6">
             <input   className="btn btn-primary" type="submit" value="Sign up"></input>
               
             </div>
             <div className="divider divider-success">OR</div>
           
           </form>
           <p className="text-center text-green-500 font-bold text-2xl p-5"> <small> Already register<Link to='/login' className="underline  uppercase"> Got to Log_In</Link></small></p>
         </div>
       </div>
     </div> 
     </>
    );
};

export default Register;