import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user ,setUser]= useState(null)
    const [loding,setLoding]= useState(true)

    //user Regster code
    const creatUser =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password);

    }

    // Set user code
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,curentUser =>{
            setUser(curentUser)
            console.log(curentUser)
            setLoding(false)
        })
        return()=>{
            return unsubscribe();
        }
    },[])

    // Login user code
    const loginUser = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Updet user code
    const updetuser = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name ,photoURL:photo
        })
    }
    // LogOut code 

    const logout = ()=>{
        signOut(auth)
    }



    const authinfo ={
        user,
        loding,
        creatUser,
        loginUser,
        updetuser,
        logout

    }
    return (
        <AuthContex.Provider value={authinfo}>
          { children }
        </AuthContex.Provider>
    );
};

export default AuthProvider;