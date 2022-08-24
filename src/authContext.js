import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './firebase';

const authContext = createContext();

export const useAuth = () => useContext(authContext);



export const AuthProvider = ({children}) => {
    const [ loading, setLoading ] = useState(true);
    const [currentUser, setCurrentUser ] = useState(null);
    
    const registerUser = async (name, email, password) => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            const user = res.user;

            await db.collection('users')
            .add({
                uid: user.uid,
                name,
                authProvider: 'local',
                email,
                password
            })

        }catch(error) {

            console.log(error)

        }


    }

    const loginUser = async (email, password) => {

        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch (err){
            console.log(err);
            // setLoginError('You do not have an account with us');
        }
        
    }

    const [userData, setUserData] = useState(null);
    const[displayError, setDisplayError] = useState('');

    const fetchUserData = async () => {

        try{
            const query = await db
            .collection('users')
            .where("uid", "==", currentUser.uid)
            .get();

            const data = query.docs[0].data();
            
            setUserData(data.name);

        }catch (err){
            setDisplayError('Error! Inavlid Data');  
            console.log(err);         
        }

    }


    useEffect(()=> {

        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
            setLoading(false);
        })
        
        return unsubscribe;

    }, [])


    const value = {
        registerUser,
        currentUser,
        fetchUserData,
        userData,
        loginUser
    }

    return (
        <authContext.Provider value={ value }>
            {!loading && children }
        </authContext.Provider>
    )
}