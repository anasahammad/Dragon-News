import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
   const gProvider = new GoogleAuthProvider();
   const xProvider = new TwitterAuthProvider()
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailVerify = ()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, gProvider)
    }
   const twitterLogin = ()=>{
    return signInWithPopup(auth, xProvider)
   }
   

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("observing", currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user,createUser, emailVerify, logIn, resetPassword, logOut, googleLogin, twitterLogin}
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;