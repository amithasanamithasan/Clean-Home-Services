import Lottie from "lottie-react";
import signIn from"../../Animation - 1721163735130.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const[showpassword,setShowpassword]=useState(false);
  const handelLogin= event =>{
    event.preventDefault();
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
  }
    return (
      <>
      <Helmet>
      <title>HOME SERVICE CLEAN|Login</title>
  </Helmet>
        <div className="hero p-8  bg-slate-400 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl  w-full  font-bold">Login now!</h1>
            <Lottie  className=" h-[400px]" animationData={ signIn} loop={true}></Lottie>
          </div>
          <div className="card bg-fuchsia-200 w-full   shadow-3xl">
            <form onSubmit={handelLogin} className="card-body w-full h-[400px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" 
                className="mt-1 block w-full border input-bordered input-info rounded-md shadow-sm p-2" required />
              </div>
              <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
              <div className=" form-control mb-5 text-right relative ">
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
            


{/* terms and condetion checkbox */}

              <div className="form-control mt-6">
             <input className="btn btn-primary" type="submit" value="Login"/>
              </div>
            </form>
            <p className="text-center font-bold "> 
              <Link to='/register' >
              <span className="text-green-400 text-1xl hover:text-red-500">
                You Donot Rgister Please!</span> 
                <small className="underline  text-green-500 uppercase">
                Got to SignIn</small></Link></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;