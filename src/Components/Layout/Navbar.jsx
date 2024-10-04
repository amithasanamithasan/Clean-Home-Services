import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo2.jpg"
import { IoHomeOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa6";
import { MdCleaningServices } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";
import { MdAddHomeWork } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { IoLogOut } from "react-icons/io5";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
const [theme , setTheme]=useState('light');

useEffect(()=>{

  localStorage.setItem( 'theme',theme)
const localTheme = localStorage.getItem('theme')
document.querySelector('html').setAttribute('data-theme',localTheme)

} , [theme])

const handelToggle = e =>{
  // console.log(e.target.value);
 if(e.target.checked){
  setTheme('coffee')
 }else{
  setTheme('light')
 }
 
}
// console.log(theme)
  const {user ,logOut}=useContext(AuthContext);
  // useCart tanstack queriyes
  const [cart]=useCart([]);
  
  const handelLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
     
    })
  }
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
            <IoHomeOutline></IoHomeOutline> Home </NavLink>

           <NavLink to="/menu"  
           className={({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm "}>
          <MdCleaningServices></MdCleaningServices>  Our Menu Services </NavLink>

          <NavLink to="/orderservice"  
           className={({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm "}>
          <SiCcleaner className="text-2xl"></SiCcleaner>Order Services </NavLink>

          <NavLink to="/dashboard/cart"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm badge badge-secondary"}>
          <MdAddHomeWork></MdAddHomeWork><button >
 Add Services
  <div >+{cart.length}</div>
</button> </NavLink>

       
        {
          user?<>
         <span>
         </span>
       
       <button     onClick={handelLogout} className=" btn btn-info btn-lg? hover:btn-warning"> <IoLogOut></IoLogOut>LOG_OUT</button> 
          </>
          :
          <>
              <NavLink to="/login"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
        <IoMdLogIn></IoMdLogIn>    Login</NavLink>
          </>
        }

           <NavLink to="/register"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <FaRegRegistered></FaRegRegistered>  Register</NavLink>
          </div>
        </div>
        <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
      <li>
        <details>
          <summary className="font-semibold ">ABOUT_US</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li>
            <NavLink to="/about"  
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <FaBookOpen></FaBookOpen>  About</NavLink>

            </li>
            <li>
            <NavLink to="/contact"
           className={ ({ isActive })=>isActive?"btn btn-primary btn-sm":"btn btn-ghost btn-sm"}>
          <IoIosContact></IoIosContact>  Contact</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

<label className="grid cursor-pointer place-items-center">
<input 
 onChange={handelToggle}
  type="checkbox"

  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
<svg
  className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">
  <circle cx="12" cy="12" r="5" />
  <path
    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
</svg>
<svg
  className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>
</label>

  
        </div>
    );
};

export default Navbar;