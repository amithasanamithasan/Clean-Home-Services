import { Navigate, useLocation } from "react-router-dom";
import useAdmin from"../Hooks/useAdmin"
import useAuth from "../Hooks/useAuth";

const AdminRoute = (children) => {
    const [user,loading]=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    
    const location =useLocation();
    // condition using
    // user thakle amra children e patia dibo 
    // r user jodi na thake tahole login e patea dibo 
    if(loading || isAdminLoading ){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user && isAdmin ){
        return children;
    }
    return <Navigate to="/login" state={{from:location}}replace></Navigate>
};

export default AdminRoute;