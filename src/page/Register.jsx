import Lottie from "lottie-react";
import login from "../Animation - 1722449569103.json";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import userAxiosPublic from "../Hooks/userAxiosPublic";

const Register = () => {
  const axiosPublic=userAxiosPublic();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { createuser, UserupdateProfile } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    createuser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const photoURL = URL.createObjectURL(data.photo[0]);
        UserupdateProfile(data.name, photoURL)
          .then(() => {
            const userInfo={
              name:data.name,
              email:data.email,
              photo:photoURL,
             }
             axiosPublic.post('/users',userInfo)
             .then(res=>{
              if(res.data.insertedId){
                console.log('user added to the database');
                reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
              }

             })
          
          })
          .catch(error => {
            console.log('Profile update error:', error);
          });
      })
      .catch(error => {
        console.log('User creation error:', error);
      });
  };

  return (
    <>
      <Helmet>
        <title>HOME SERVICES CLEAN | Sign_Up</title>
      </Helmet>
      <div className="hero w-full min-h-screen bg-lime-200">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl w-full sm:w-[400px] text-center h-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-violet-500">
              Sign Up Now!
            </h1>
            <Lottie className="h-[300px] sm:h-[400px]" animationData={login} loop={true}></Lottie>
          </div>
          <div className="card w-full lg:w-1/2 max-w-sm shadow-lg bg-green-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Enter your name"
                  className="mt-1 block w-full border input-bordered input-info rounded-md shadow-sm p-3"
                />
                {errors.name && <span className="text-red-600">This name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="mt-1 block w-full border input-bordered input-secondary rounded-md shadow-sm p-3"
                />
                {errors.photo && <span className="text-red-600">Photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="mt-1 block w-full border input-bordered input-warning rounded-md shadow-sm p-3"
                />
                {errors.email && <span className="text-red-600">This email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })}
                    placeholder="Enter your password"
                    className="mt-1 block w-full border input-bordered input-accent rounded-md shadow-sm p-3"
                  />
                  {errors.password && <span className="text-red-600">This password field is required</span>}
                  {errors.password?.type === "minLength" && <p className="text-red-600">Password must be at least 6 characters</p>}
                  {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be no more than 10 characters</p>}
                  {errors.password?.type === "pattern" && <p className="text-red-600">Password must include an uppercase letter, a lowercase letter, a number, and a special character</p>}
                  <span
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="text-2xl" />
                    ) : (
                      <FaEyeSlash className="text-2xl" />
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign up" />
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