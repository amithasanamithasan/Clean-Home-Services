import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className="menu bg-base-100 min-h-full w-30 p-6  py-20">
        {/* Sidebar content here */}
        <div className=" flex  flex-col gap-3 ">
            {/* Navbar menu content here */}
            <NavLink to="/"  
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
           <IoHomeOutline ></IoHomeOutline>Home</NavLink>
           <NavLink to="/about"
             className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
             <FaBookOpen></FaBookOpen>About</NavLink>
           <NavLink to="/contact"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
           <IoIosContact></IoIosContact>Contact</NavLink>
           <NavLink to="/login"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
         <IoMdLogIn></IoMdLogIn>Login</NavLink>
           <NavLink to="/register"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
            <FaRegRegistered></FaRegRegistered>Register</NavLink>
          </div>
      </div>
    );
};

export default Sidebar;