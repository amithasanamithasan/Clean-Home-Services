import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../Config/firebase.config";
import PropTypes from 'prop-types';
import userAxiosPublic from "../Hooks/userAxiosPublic";

  export const AuthContext=createContext(null);
  //in social log in with google
  const googleProvider =new GoogleAuthProvider();
  const auth = getAuth(app);
const AuthProviders = ({children}) => {
   
    const [user, setUser]= useState(null);
    const [loading ,setLoading]=useState(true);
   const axiosPublic =userAxiosPublic()
// social login google auth using
const GoogleAuth= async()=>{
    setLoading(true);
    try {
        return await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error("Google sign-in error:", error);
        setLoading(false);
    }
}

      // createUser

      const createuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
//  Login

const singIn= (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// user parsentase bole bujie amr webapllication e user login ace kina 
// reloade dila user chole ji kina ta dekhar jonno
// ai user ke dhore rhaka bisoyta hocche user parsentenci..
// sideeffect er joto kaj ace ta useeffect er modhhe krte hoi
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{

    setUser(currentuser)
    setLoading(false);
  if(currentuser){
// get token and store client
const userinfo={email:currentuser.email}
    axiosPublic.post('/jwt',userinfo)
    .then(res=>{
    //  console.log(res.data);
    if(res.data.token){
        localStorage.setItem('access-token',res.data.token)
    }
    })
  }
// user ta jodi null hoia jie ba na powa jie tahole localstorage thake remove kore dibo
  else{
localStorage.removeItem('access-token')
  }
  
  
});
return () =>{
    return unsubscribe();
}
},[axiosPublic])

// logOut
const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}

// update profile photo Url
const UserupdateProfile=(name,photo)=>{
    return  updateProfile (auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }
    
    const authInfo={
        user, 
        loading,
        createuser,
        singIn,
        UserupdateProfile,
        GoogleAuth,
        logOut
    }
    return (
  
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProviders.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProviders;