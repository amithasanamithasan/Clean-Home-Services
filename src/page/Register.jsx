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
        <title>HOME SERVICES CLEAN | Sign_Up</title>
      </Helmet>
      <div className="hero w-full min-h-screen bg-lime-200">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl w-full sm:w-[400px] text-center 
              h-[100px] font-bold text-transparent bg-clip-text  
              bg-gradient-to-r from-green-600 to-violet-500"
            >
              Sign Up Now!
            </h1>
            <Lottie className="h-[300px] sm:h-[400px]" animationData={login} loop={true}></Lottie>
          </div>
          <div className="card w-full lg:w-1/2 max-w-sm shadow-lg bg-green-200">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border input-bordered input-info rounded-md shadow-sm p-3"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  placeholder="Upload your photo"
                  className="mt-1 block w-full border input-bordered input-secondary rounded-md shadow-sm p-3"
                />
                <span className="text-red-600">Photo is required</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border input-bordered input-warning rounded-md shadow-sm p-3"
                />
                <span className="text-red-600">Email is required</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showpassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full border input-bordered input-accent rounded-md shadow-sm p-3"
                    required
                  />
                  <span
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    onClick={() => setShowpassword(!showpassword)}
                  >
                    {showpassword ? (
                      <FaEye className="text-2xl" />
                    ) : (
                      <FaEyeSlash className="text-2xl" />
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Sign Up</button>
              </div>
              <div className="divider divider-success">OR</div>
            </form>
            <p className="text-center text-green-500 font-bold text-lg p-5">
              <small>
                Already registered?{" "}
                <Link to="/login" className="underline uppercase">
                  Go to Log In
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;