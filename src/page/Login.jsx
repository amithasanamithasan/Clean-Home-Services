import Lottie from "lottie-react";
import signIn from"../../Animation - 1721163735130.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../Components/Sociallogin/SocialLogin";
import { MdOutlineEmail } from "react-icons/md";


const Login = () => {
  const[showpassword,setShowpassword]=useState(false);
  const {singIn} =useContext(AuthContext);
  const navigate=useNavigate();
  const location =useLocation();
  const from=location.state?.from?.pathname || "/";
console.log('state in the location login page ',location.state)

  const handelLogin=event=>{

    event.preventDefault();
    const form=event.target;
    const email =form.email.value;
    const password=form.password.value;

    singIn(email,password)
    .then(result=>{
    const user =result.user;
     console.log(user);
    Swal.fire({
      title: "User login successfully",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });

    navigate(from,{replace:true});
    })

}
    return (
      <>
      <Helmet>
      <title>HOME SERVICE CLEAN|Login</title>
  </Helmet>
        <div className="hero p-8  bg-cyan-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl  w-[300px] text-center  h-[200px] font-bold text-transparent bg-clip-text  
            bg-gradient-to-r from-cyan-500 to-purple-700">Login now!</h1>
            <Lottie  className=" h-[400px]" animationData={ signIn} loop={true}></Lottie>
          </div>
          <div className="card bg-fuchsia-200 w-full   shadow-3xl">
            <form onSubmit={handelLogin} className="card-body w-full h-[400px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
            
                <input  prefix={<MdOutlineEmail  className="text-2xl"/>}  type="email" name="email" placeholder="Enter Your Email"     
                className="mt-1 block w-full border input-bordered input-info rounded-md shadow-sm p-4" required  />  
              </div>
              
              <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
<div className=" form-control mb-5 text-right relative ">
<input    placeholder="Enter  password" 
type={ showpassword ? "text" :"password" }
name="password" 
id="password"
className=" mt-1 block w-full border input-bordered input-accent rounded-md shadow-sm p-4" required />
<span className="absolute top-1/3 right-0" onClick={()=>setShowpassword(!showpassword)} >
{
showpassword? <FaEye className="text-4xl p-2"></FaEye>:<FaEyeSlash  className="text-4xl p-2"></FaEyeSlash>
}

</span>

</div>



              <div className="form-control mt-6">
             <input className="btn btn-primary" type="submit" value="Login"/>
              </div>
            </form>
            <div className="divider divider-accent">OR</div>
            <SocialLogin></SocialLogin>
            <p className="text-center font-bold "> 
              <Link to='/register' >
              <span className="text-green-400 text-1xl hover:text-red-500">
                You Donot Rgister Please!</span> 
                <small className="underline  text-green-500 uppercase">
                Got to Sign_In</small></Link></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;