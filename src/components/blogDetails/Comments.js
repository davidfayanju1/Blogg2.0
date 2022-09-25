import React, { useState, useEffect } from 'react';
import { useAuth } from '../../authContext';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Comments = ({ blog }) => {
    const { comments, fetchComments, userData, currentUser, postComments } = useAuth();
    const [comment, setComment ] = useState('');

    const postComment = (e) => {

        e.preventDefault();
        postComments(comment, blog.id);
        setComment('');
        fetchComments(blog.id)
    }

    useEffect(() => {

      blog && fetchComments(blog.id);
      
    }, []);
    
  
    return (
    <section className='comments mt-[4rem]'>
        <div className="comments-title mb-[1.35rem]">
          <h1 className='font-bold md:text-[2rem] text-[1.2rem]'>Comments ({comments && comments.length})</h1>
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
                  <form onSubmit={ postComment }>
                    <textarea onChange={ (e) => setComment(e.target.value) } value={ comment } placeholder='What are your thoughts' className='py-[.6rem] outline-none border-none w-full bg-transparent'></textarea>
                    <button className='bg-green-700 hover:bg-green-800 h-[2rem] w-[5rem] text-white font-semibold rounded-[20px] disabled:opacity-[.6]' disabled={ !comment }>Post</button>
                  </form>
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

        <div className="show-comments dark:text-white mt-[3rem]">
          <h1 className='font-semibold text-[1.2rem] md:text-[1.7rem] mb-[1.5rem]'>Most Recent</h1>
          
          <>
            {
              comments && comments.map((comment) => (

                <div className="comment-card mb-[1.5rem] border-gray-[600] border-b-[.01rem] pb-[1rem]" key={comment.createdAt}>
                   <div className="comment-author flex items-center mb-[1.5rem]">
                    <>
                      {
                        comment.author.img ? 
                        <img src={comment.author.img} alt="user" className='w-[2.1rem] h-[2rem] rounded-[100%] object-cover'/>
                        :
                        <p  className='cursor-pointer bg-red-800 w-[2rem] h-[2rem] rounded-[100%] text-[1.3rem] flex items-center justify-center font-semibold text-gray-200'>{ comment.author.name[0] }</p>

                      }
                      <div className="name-date ml-[.3rem]">
                        <p className='text-[.76rem] md:text-[.9rem]'>{comment.author.name}</p>
                        <p className='text-[.76rem] text-gray-[700] md:text-[.8rem]'>{ moment(comment.createdAt.toDate().toString()).startOf('second').fromNow() }</p>
                      </div>
                    </>
                    </div>
                    <div className="comment-body">
                      <article>{comment.body}</article>  
                    </div> 
                </div>

              ))
            }
          
          </>
        </div>
    </section>
  )
}

export default Comments