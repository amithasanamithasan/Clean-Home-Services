import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="menu bg-base-100 min-h-full w-30 p-4">
        {/* Sidebar content here */}
        <div className=" flex  flex-col gap-3 ">
            {/* Navbar menu content here */}
           <NavLink to="/about"  className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>About</NavLink>
           <NavLink to="/contact"className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>Contact</NavLink>
           <NavLink to="/login"className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>Login</NavLink>
           <NavLink to="/register"className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>Register</NavLink>
          </div>
      </div>
    );
};

export default Sidebar;