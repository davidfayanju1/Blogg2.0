import React, { useState, useEffect } from 'react';
import { useAuth } from '../authContext';
import { Link } from 'react-router-dom';
import moment from 'moment';
import UserAsideLoader from '../components/userDetails/UserAsideLoader';
import BlogsCard from '../components/home/BlogsCard';

const List = () => {

    const { userData, currentUser, number } = useAuth();

    const time  = new Date();

  return (
    <div className='mt-[4.5rem] dark:bg-slate-900 bg-gray-50 dark:text-white min-h-[100vh] flex'>
       <div className='list min-h-[100vh] py-[2rem] md:border-solid border-r border-gray-300 border-none md:px-[5rem] px-[1.3rem] md:w-[75%] w-[100%]'>
       {
        !userData ?

        <p>LOADING PLEASE </p>
        
        :

        <main>
            <div className="user-data">
            <div className="flex items-center">
                <Link to={`/userDetails/${ userData.uid }/`}>
                  {!userData.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.9rem] flex items-center justify-center font-semibold text-gray-200'> { userData.name[0] }</p> : <img src={ userData.img } alt={ userData.name} className="w-[3rem] h-[3rem] rounded-[100%]"/> }
                </Link>
                <div className="info ml-[0.8rem]">
                  <p className='text-gray-900 dark:text-gray-200 text-[1.15rem] mb-[.2rem]'>{ userData.name }</p>
                  <div className="inner-flex flex items-center text-gray-700 dark:text-gray-200 text-[0.9rem]">
                    <p className='flex items-center'>{ moment(time.toDateString()).format('MMM Do YYYY, h:mm:ss a').substring(0, 6)}.</p>
                    <p className="read-time ml-[0.4rem]">{ userData.bookmark.length } Stories</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="title mt-[1.6rem]">
                <h1 className="font-bold md:text-[2.5rem] text-[1.4rem]">Reading list</h1>
            </div>

            <div className="blogs-section mt-[3rem]">
            {
                userData.bookmark.map((blogPost, index) => (                    
                  
                <div className="container" key={ blogPost.id}>
                  <BlogsCard blogPost={ blogPost } index={ index }/>
                </div>            

                ))
            }
            </div>
        </main>
       } 
       </div>
       <div className='dark:text-white md:sticky top-[9rem] md:px-[2rem] py-[2rem] md:block hidden'>
       {
        !userData ?
        <UserAsideLoader amount={ 1 }/> 
        :
        <aside className="user-card">
            <Link to={`/userDetails/${ userData.uid }/`}>
              {!userData.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-full text-[1.8rem] flex items-center justify-center font-semibold text-gray-200'>{ userData.name[0] }</p> : <img src={ userData.img } alt={ userData.name }  className=" h-[5.5rem] w-[5.6rem] rounded-full mb-[.85rem] object-cover"/> }
              <p className='author_name font-bold text-[1.23rem]'>{ userData.name }</p>
            </Link>
            <p className='post_number text-[1.1rem] text-gray-600 dark:text-gray-300 mb-[1rem]'>{ number.length > 1 ? `${number.length} Posts` : `${number.length} Post` }</p>
            <p className="author_bio text-gray-600 dark:text-gray-300 mb-[1.2rem]">{ userData.bio }</p>
            <Link to='/settings' className='text-green-800 dark:text-gray-300'>Edit profile</Link>            
        </aside>
       }
       </div>

    </div>
  )
}

export default List