import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../Config/firebase.config";
import PropTypes from 'prop-types';

  export const AuthContext=createContext(null);
  //in social log in with google
  const googleProvider =new GoogleAuthProvider();
  const auth = getAuth(app);
const AuthProviders = ({children}) => {
   
    const [user, setUser]= useState(null);
    const [loading ,setLoading]=useState(true);
  
// social login google auth using
const GoogleAuth=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
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
    setLoading(false);
     setUser(currentuser);
});
return () =>{
    return unsubscribe();
}
},[])

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