import React from 'react';
import { useAuth } from '../../authContext';
import { Link } from 'react-router-dom';

const Comments = () => {
    const { userData, currentUser } = useAuth();

  return (
    <section className='comments mt-[4rem]'>
        <div className="comments-title mb-[1.35rem]">
          <h1 className='font-bold md:text-[2rem] text-[1.2rem]'>Comments</h1>
        </div>

        <div className="add-comment">
          {
            currentUser ?
            <div className="user-image">
                <div className="flex items-center mb-[1rem]">
                    {
                        userData.img ? 
                        <img src={userData.img} alt="user" className='w-[2.1rem] h-[2rem] rounded-[100%] object-cover'/>
                        :
                        <p  className='cursor-pointer bg-red-800 w-[2rem] h-[2rem] rounded-[100%] text-[1.3rem] flex items-center justify-center font-semibold text-gray-200'>{ userData.name[0] }</p>
                    }
                    {
                        userData.name && <p className='ml-[.7rem]'>{userData.name}</p>
                    }
                </div>
                <div className="comment-area">
                    <textarea placeholder='What are your thoughts' className='py-[.6rem] outline-none border-none w-full bg-transparent'></textarea>
                </div>
                <div className="blog-comments">
                    
                </div>
            </div>
            :
            <div className="disabled-field">
                <Link to='/login'>
                    <textarea placeholder='Share your thoughts' className='w-full bg-transparent' disabled></textarea>
                </Link>
            </div>
          }

        </div>
    </section>
  )
}

export default Comments