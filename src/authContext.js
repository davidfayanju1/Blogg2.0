import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './firebase';
import { v4 as uuidv4 } from 'uuid';


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

    const logoutUser = async () => {

        try{
             await auth.signOut();
        } catch(err){
            console.log(err);
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
    
    // blogs
    const postBlog = async (title, blog, category, clap, img) => {

        try{
             
             await db.collection('posts')
             .add({
                 uid: currentUser.uid, 
                 author: userData,
                 title,
                 blog,
                 createdAt: new Date(),
                 id: uuidv4(),
                 category,
                 clap,
                 img
                //  photo: currentUser.photoURL
             })
             
 
        }catch(err){
            console.log(err);
            // setBlogError('Error With Blog')  
        }
    }

    const [ blogs, setBlogs ] = useState([])

    const fetchUserBlogposts = async () => {

        try{
            const response = db.collection('posts').orderBy('createdAt', 'desc')

            const data = await response.get()

            setBlogs([])

            data.docs.forEach(blogItem => {

                if(blogItem.data().uid ===  currentUser.uid){
                    
                    setLoading(false)
                    setBlogs(item => [...item, blogItem.data()])

                }else{
                    return null
                }

            })
                                
        }catch(error) {
            console.log(error)
        }
            
    }

    const [ blogItems, setBlogItems ] = useState([]);
    
    const fetchAllPosts = async () => {

        try{
            const response = db.collection('posts')
            .orderBy('createdAt', 'desc')

            const data = await response.get()


            // data.docs.forEach(blogItem => setBlogItems(item => [...item, blogItem.data() ]))
            setBlogItems([]);
            data.docs.forEach(blog => { setBlogItems(item => [...item, blog.data()])});

            console.log(blogItems);
                        
        }catch(error) {
            console.log(error)
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
        loginUser,
        postBlog,
        fetchUserBlogposts,
        fetchAllPosts,
        setBlogItems,
        blogItems
    }

    return (
        <authContext.Provider value={ value }>
            {!loading && children }
        </authContext.Provider>
    )
}