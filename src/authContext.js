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
            

            setUserData(data);

            
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
                 author: userData.name,
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

    
    const [ blogItems, setBlogItems ] = useState([]);
    
    const fetchAllPosts = async () => {
        
        try{
            const response = db.collection('posts')
            .orderBy('createdAt', 'desc')

            const data = await response.get()

            
            // data.docs.forEach(blogItem => setBlogItems(item => [...item, blogItem.data() ]))
            setBlogItems([]);
            data.docs.forEach(blog => { setBlogItems(item => [...item, blog.data()])});
            
            
        }catch(error) {
            console.log(error)
        }
            
    }


    
    
    const [ blogs, setBlogs ] = useState([])

    const [ number, setNumber ] = useState([])
    const [ userBlogs, setUserBlogs ] = useState([]);

    const fetchUserBlogposts = async () => {

        try{
            const response = db.collection('posts').orderBy('createdAt', 'desc')

            const data = await response.get()

            setNumber([]);

            // data.docs.forEach(blogItem => {

            //     // console.log(blogItem.data());

            //     if(blogItem.data().uid ===  userData.uid){
                    
            //         // setLoading(false)
            //         console.log([blogItem.data()].length)

            //     }else{
            //         return null;
            //     }
                
            //     // console.log(blogs)
            // })

            // console.log(userData.uid);

            setUserBlogs([])

            const filter = data.docs.filter((blogItem => (blogItem.data().uid === userData.uid)))    
            
            filter.forEach(item => {

                setUserBlogs(item.data())

            })
            
            setNumber(filter);
            console.log(userBlogs);
            


                                
        }catch(error) {
            console.log(error)
        }
            
    }

    
    
    useEffect(() => {
        
        // fetchUserData()

       userData && fetchUserBlogposts();

    }, [userData])
    
    
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
        blogItems,
        number,
    }

    return (
        <authContext.Provider value={ value }>
            {!loading && children }
        </authContext.Provider>
    )
}