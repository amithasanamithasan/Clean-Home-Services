import { useContext } from "react";
import AuthProviders from "../Providers/AuthProviders";


const useAuth = () => {
  const auth =useContext(AuthProviders);
  return auth;
};

export default useAuth;