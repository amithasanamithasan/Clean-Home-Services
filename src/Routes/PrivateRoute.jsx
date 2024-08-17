import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user ,loading}=useContext(AuthContext);
    const location =useLocation();
    // condition using
    // user thakle amra children e patia dibo 
    // r user jodi na thake tahole login e patea dibo 
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}}replace></Navigate>
        
};

export default PrivateRoute;