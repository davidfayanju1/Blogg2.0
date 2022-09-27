import React, { useState, useEffect } from 'react';
import { useAuth } from '../authContext';
import { Link } from 'react-router-dom';
import moment from 'moment';
import UserAsideLoader from '../components/userDetails/UserAsideLoader';

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
                userData.bookmark.map((blogPost) => (                    
                <div className="blog flex items-top mb-[4rem] justify-between md:min-h-[10rem] h-[8rem]" key={ blogPost.id }>
                    <div className={`blog-text ${ blogPost.img === null ? 'w-[100%]' : 'md:w-[65%]'}`}>
                        <Link to={`/userDetails/${blogPost.author.uid}/`}>
                            <div className="blog-author flex items-center">
                            {blogPost.author.img ?  <img src={ blogPost.author.img} alt={ blogPost.id}  className=" h-[1.65rem] w-[1.65rem] rounded-[100%] object-cover"/> : <p className='bg-red-800 h-[1.65rem] w-[1.65rem] rounded-[100%] text-[1.1rem] flex items-center justify-center font-semibold text-white'> { blogPost.author.name[0] }</p>}
                            <p className='author-name ml-[0.2rem] text-[.9rem] mr-[.2rem]'>{ blogPost.author.name } .</p>
                            {currentUser && <p className="blog-time text-[.85rem]">{ moment(blogPost.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>}
                            </div>
                        </Link>
                        <Link to={`/details/${blogPost.id}`}>
                            <div className="blog-body w-[100%] mb-[1.2rem]">
                            <h1 className="blog-title md:text-[1.44rem] text-[1.07rem] font-bold">{ blogPost.title }</h1>
                            <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ blogPost.blog }</p>
                            </div>
                        </Link>
                        <div className="blog-date-data flex justify-between items-center">
                        <div className={`flex text-gray-700 dark:text-gray-200 text-[0.9rem] ${currentUser && 'flex-row-reverse'} flex-row`}>
                            {!currentUser && <p className="blog-time  mr-[0.6rem] text-[.85rem]">{ moment(blogPost.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>}                      
                            <p className="read-time mr-[0.6rem] text-[.85rem]">
                                {
                                Math.ceil(blogPost.blog.trim().split(/\s+/).length / 200)
                                } min read
                            </p>
                            
                            <Link to={`/topicDetails/${ blogPost.category }/`}>
                                <div className={`blog-category mr-[0.6rem] text-[.77rem] md:text-[.8rem] bg-gray-300 h-[1.5rem] flex items-center justify-center px-[0.7rem] rounded-[13px] dark:text-gray-800 ${!currentUser && 'hidden'} md:block`}>{ blogPost.category }</div>
                            </Link>                            
                        </div>
                        <div className="save-icon ml-[2rem]">
                            <svg width="25" height="25"  className="dark:fill-white"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                        </div>
                    </div>  
                    </div>
                    {
                    blogPost.img && 

                    <div className="blog-image md:w-[30%] md:min-h-[8rem] h-[4rem] w-[5rem]">
                        <Link to={`details/${blogPost.id}`}>
                        <img src={ blogPost.img} alt={ blogPost.id} className="object-cover w-[100%] h-[100%]" />
                        </Link>
                    </div>
                    }  
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