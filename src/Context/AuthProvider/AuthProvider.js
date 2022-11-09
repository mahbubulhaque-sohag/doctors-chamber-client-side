import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config';

 export const authContext = createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
   
    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser)
            setLoading(false);
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        createNewUser,
        login,
        googleLogin,
        logOut,
        user,
        updateUserProfile,
        loading,
        setLoading
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