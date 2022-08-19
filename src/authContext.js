import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './firebase';

const authContext = createContext();

export const useAuth = () => useContext(authContext);



export const AuthProvider = ({children}) => {
    const [ loading, setLoading ] = useState(true);
    const [currentUser, setCurrentUser ] = useState(null);
    
    
    useEffect(()=> {

        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
            setLoading(false);
        })
        
        return unsubscribe;

    }, [])


    const value = {

    }

    return (
        <authContext.Provider value={ value }>
            {!loading && children }
        </authContext.Provider>
    )
}