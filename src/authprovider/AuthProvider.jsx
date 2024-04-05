import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
   const gProvider = new GoogleAuthProvider();
   const xProvider = new TwitterAuthProvider()
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailVerify = ()=>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }
    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, gProvider)
    }
   const twitterLogin = ()=>{
    setLoading(true);
    return signInWithPopup(auth, xProvider)
   }
   

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("observing", currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user,createUser, emailVerify, logIn, resetPassword, logOut, googleLogin, twitterLogin, loading}
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;