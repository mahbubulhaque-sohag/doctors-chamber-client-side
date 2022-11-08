import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import app from '../../firebase/firebase.config';

 export const authContext = createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createNewUser,
        login,
        googleLogin
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;