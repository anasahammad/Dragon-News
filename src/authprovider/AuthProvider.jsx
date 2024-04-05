import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailVerify = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const authInfo = {createUser, emailVerify}
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;