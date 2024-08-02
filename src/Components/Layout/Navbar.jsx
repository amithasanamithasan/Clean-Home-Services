import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo2.jpg"
import { IoHomeOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa6";

const Navbar = () => {
    return (
      
        <div className='w-full h-[60px] max-w-[1340px] px-[25px] mx-autonavbar fixed z-10 bg-opacity-40 bg-green-600 mx-auto '>
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 ">
          <img src={logo} alt="logo"  className="w-[60px] h-[50px] rounded-xl  relative " /> 
      
        </div>
        <div className="hidden flex-none lg:block">
          <div className=" flex gap-3 ">
            {/* Navbar menu content here */}
            <NavLink to="/"  
           className={({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm outline"}>
           <IoHomeOutline ></IoHomeOutline> Home </NavLink>
           <NavLink to="/about"  
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <FaBookOpen></FaBookOpen>  About</NavLink>
           <NavLink to="/contact"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <IoIosContact></IoIosContact>  Contact</NavLink>
           <NavLink to="/login"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
        <IoMdLogIn></IoMdLogIn>    Login</NavLink>
           <NavLink to="/register"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <FaRegRegistered></FaRegRegistered>  Register</NavLink>
          </div>
        </div>
        </div>
    );
};

export default Navbar;