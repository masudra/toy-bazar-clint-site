import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user ,setUser]= useState(null)
    const [loding,setLoding]= useState(true)

    const creatUser =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

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

    const loginUser = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const authinfo ={
        user,
        loding,
        creatUser,
        loginUser

    }
    return (
        <AuthContex.Provider value={authinfo}>
          { children }
        </AuthContex.Provider>
    );
};

export default AuthProvider;