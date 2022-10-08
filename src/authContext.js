import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './firebase';
import { v4 as uuidv4 } from 'uuid';
import { ref, set, getDatabase } from 'firebase/database';
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({children}) => {
    const [ loading, setLoading ] = useState(true);
    const [currentUser, setCurrentUser ] = useState(null);
    
    const registerUser = async (name, email, bio, password, bookmark, bookmarkedUsers, about) => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            const user = res.user;

            await db.collection('users').doc(user.uid)
            .set({
                uid: user.uid,
                name,
                authProvider: 'local',
                email,
                bio,
                bookmark,
                password,
                bookmarkedUsers,
                about
            })          

        }catch(error) {

            console.log(error)

        }
    }

    const [ loginError, setLoginError] = useState('');

    const loginUser = async (email, password) => {

        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch (err){
            setLoginError('You do not have an account with us');
        }
        
    }

    const logoutUser = async () => {

        try{
             await auth.signOut();
        } catch(err){
            console.log(err);
        }

    }

    
    const deleteUserAcct = async () => {

        try{
            await auth.currentUser.delete()
        }catch (err){
            console.log(err)
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

    const [users , setUsers] = useState([]);

    const fetchAllUsers = async () => {
        try{
            const query = await db
            .collection('users')
            .get();

            setUsers([]);
            const data = query.docs;
            
            setUsers(data);
            
        }catch (err){
            setDisplayError('Error! Inavlid Data');  
            console.log(err);         
        }
    }


    const updateName = (name) => {

        db.collection('users').doc(currentUser.uid).update({
            'name' : name
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })

    }

    const updateBio = (bio) => {

        db.collection('users').doc(currentUser.uid).update({
            'bio' : bio
        })
        .then(() => {
            console.log('successful')
        })
        .catch((err) => {
            console.log(err);
        })

    }

    const updateMail = (mail) => {

        db.collection('users').doc(currentUser.uid).update({
            'email' : mail
        })
        .then(() => {
            console.log('successful')
        })
        .catch((err) => {
            console.log(err);
        })

    }

    const updateUsername = (username) => {

        db.collection('users').doc(currentUser.uid).update({
            'username' : username
        })
        .then(() => {
            console.log('successful')
        })
        .catch((err) => {
            console.log(err);
        })

    }

    const updateUserAbout = async (about) => {

        try{
            await db.collection('users').doc(currentUser.uid).update({
                 'about' : about
             })
        }catch (err) {
            console.log(err);
        }
        

    }

    const updateUserImage = (image) => {

        db.collection('users').doc(currentUser.uid).update({
            'img' : image
        })
        .then(() => {
            console.log('successful')
        })
        .catch((err) => {
            console.log(err);
        })

    }

       
    // blogs
    const blogUID = uuidv4();

    const postBlog = async (title, blog, category, clap, img, likedUsers) => {

        try{
             
             await db.collection('posts').doc(blogUID)
             .set({
                 uid: userData.uid, 
                 author: userData,
                 title,
                 blog,
                 createdAt: new Date(),
                 id: blogUID,
                 category,
                 clap,
                 img,
                 likedUsers
             })
             
 
        }catch(err){
            console.log(err);
            // setBlogError('Error With Blog')  
        }
    }

    const updateApplause = async ( claps, likedUsers, blogId) => {

        try{

            db.collection('posts').doc(blogId).update({
                'clap' :claps,
                'likedUsers': likedUsers
            })

        }catch(error) {

            console.log(error);

        }

    }

    const updateBookmarkList = async(bookmarkList, bookmarkUsers) => {

        try {
            db.collection('users').doc(currentUser.uid).update({
                'bookmark' : bookmarkList,
                'bookmarkedUsers': bookmarkUsers
            })

        }catch(err) {
            console.log(err)
        }
    }

    // comments

    const commentId = uuidv4();

    const postComments = async (body, id) => {

        try{
             
             await db.collection('comments')
             .add({
                 blogId: id, 
                 author: userData,
                 body,
                 createdAt: new Date()
             })
             
 
        }catch(err){
            console.log(err);
            // setBlogError('Error With Blog')  
        }
    }

    const [comments, setComments] = useState([]);

    const fetchComments = async (blogId) => {

     
        try{
            const response = db.collection('comments')
            .where('blogId', '==', blogId)
            .orderBy('createdAt', 'desc')
            
            const data = await response.get()
            setComments([]);
            
            data.docs.forEach((comment) => {

                setComments(items => [...items, comment.data()]);             
               
            });            
            
        }catch(error) {
            console.log(error)
        }
        
    }    
  
    const [ blogItems, setBlogItems ] = useState([]);
    const [postLoading, setPostLoading] = useState(true);    
    
    const fetchAllPosts = async () => {
        
        try{
            const response = db.collection('posts')
            .orderBy('createdAt', 'desc')

            const data = await response.get()
            
            setBlogItems([]);

            data.docs.forEach(blog => { setBlogItems(item => [...item, blog.data()])});
            setPostLoading(false);

            
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

            setUserBlogs([])

            const filter = data.docs.filter((blogItem => (blogItem.data().uid === userData.uid)))    
            
            filter.forEach(item => {

                setUserBlogs(b => [...b, item.data()])

            })

            
            setNumber(filter);
                                           
        }catch(error) {
            console.log(error)
        }
            
    }

    
    useEffect(() => {
        
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
        userBlogs,
        fetchAllUsers,
        users,
        logoutUser,
        deleteUserAcct,
        updateName,
        updateBio,
        updateMail,
        updateUsername,
        updateUserImage,
        postLoading,
        postComments,
        fetchComments,
        comments,
        updateApplause,
        updateBookmarkList,
        loginError,
        updateUserAbout
    }

    return (
        <authContext.Provider value={ value }>
            {!loading && children }
        </authContext.Provider>
    )
}