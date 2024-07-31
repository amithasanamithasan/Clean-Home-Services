// import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { useContext, useEffect } from "react";
// import { createContext } from "react";
// import { auth } from "../Config/firebase.config";

// const  AuthContext=createContext();

// const AuthProviders = ({children}) => {
//     const  [user ,setUser]=useContext(null);
//     const [loading, setIsLoading]=useContext(true);

//     const Createuser=(email,password)=>{
//         setIsLoading(true);
//       return createUserWithEmailAndPassword (auth,email,password)
//     }
//     const Loginuser=(email,password)=>{
//         setIsLoading(true);
//       return signInWithEmailAndPassword(auth,email,password)
//     }
// // user parsentase bole bujie amr webapllication e user login ace kina 
// // reloade dila user chole ji kina ta dekhar jonno
// // ai user ke dhore rhaka bisoyta hocche user parsentenci..
// // sideeffect er joto kaj ace ta useeffect er modhhe krte hoi
// useEffect(()=>{
// const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
//     setIsLoading(false);
//      setUser(currentuser);
// });
// return () =>{
//     return unsubscribe();
// }


// },[])

//     const values={
//      user,
//      Createuser,
//      Loginuser,
//      loading,
//     }
//     return (
//         <AuthContext.Provider value={values} >
//             {children}
//         </AuthContext.Provider >
//     );
// };

// export default AuthProviders;