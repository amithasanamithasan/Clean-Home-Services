import Lottie from "lottie-react";
import signIn from"../../Animation - 1721163735130.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
    return (
      <>
      <Helmet>
      <title>HOME SERVICE CLEAN|Login</title>
  </Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <Lottie  className="h-[400px]" animationData={ signIn} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center font-bold "> <Link to='/register' ><span className="text-green-400 hover:text-red-500">You Donot Rgister Please!</span> <small className="underline  text-green-500 uppercase">Got to SignIn</small></Link></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;