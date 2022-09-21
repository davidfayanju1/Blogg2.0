import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../authContext';
import { useNavigate } from 'react-router-dom';

const PopupPost = ({setOpenPostPage, blogPost}) => {

  // const title = useRef();
  const category = useRef();

  const navigate = useNavigate();

  const { postBlog, userData, fetchUserData } = useAuth();

  const noImage = true;
  const clap = 0;

  const publishBlog = () => {
    
    postBlog(blogPost.title, blogPost.body, category.current.value, clap, blogPost.img);

    navigate('/');
  }


  useEffect(() => {

    // blogPost && console.log(blogPost)
    fetchUserData();

    console.log(blogPost.img);

  }, [userData.name]);

  return (
    <div className='container md:w-[75%] mx-auto md:py-[2rem] pb-[4rem] w-[85%]'>
      <div className="cancel-page-btn text-right">
        <div className="cancel-icon md:mb-[4rem] mb-[2rem] text-[1.2rem] dark:text-gray-300 text-gray-500  cursor-pointer flex justify-end" onClick={() => setOpenPostPage(false)}>
          <svg className="svgIcon-use dark:fill-white" width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
      </div>
      {/* flex-container */}
      <div className="blog-content flex justify-between items-start md:flex-row flex-col">
          
          {/* story preview  */}
          <div className="story-preview md:w-[48%] w-full mb-[4rem] md:mb-[0rem]">
            <h1 className='font-bold mb-[1rem] text-gray-700 dark:text-gray-200'>Story Preview</h1>
            <div className="image-preview-container mb-[1rem]">
              {blogPost.img ? <div className="image-container rounded-[3px] h-[14rem] w-[100%]"><img src={ blogPost.img } alt="" className='h-full w-full object-cover'/></div> : <div className="image-container rounded-[3px] h-[14rem] w-[100%] bg-gray-200  dark:bg-slate-500 flex items-center justify-center text-center"><small className='text-gray-600 dark:text-gray-300'>Include a high quality image in your story to make it pop!</small></div> }
            </div>
            <h1 className='font-bold text-[1.1rem] text-gray-700 mb-[.27rem] dark:text-gray-200'>New Title</h1>
            <div className='mb-[.55rem]'>
              <input type="text" className="rounded-none bg-transparent outline-none w-[100%] story-title border-slate-500 dark:border-slate-300 border-solid border-b border-t pt-[.55rem] pb-[.1rem] placeholder:text-gray-600 dark:placeholder:text-gray-200" placeholder={blogPost.title}></input>
            </div> 
            <div className="sidenote">
              <p className='text-gray-600 text-[.9rem] dark:text-gray-200'><span className='font-bold mr-[.25rem]'>Note:</span>Changes here will affect how your story appears in public places like the homepage — not the contents of the story itself.</p>
            </div>
          </div>

          <div className="publish-section md:w-[44%] w-full">
            <div className="publiser mb-[.8rem] text-gray-600 dark:text-gray-100">
              <p>Publishing to : <span className='font-bold'>{ userData.name }</span></p>
            </div>
            <div className="body">
              <p className='text-[.85rem] mb-[1rem]'>Add a topic so readers know what your story is about</p>

              <div className="topics-update">
                <select name="topics" ref={category} onChange={() => console.log(category)} className='w-full text-black py-[1.2rem] px-[.9rem] outline-none border-solid border-[0.1rem] rounded-[5px] border-gray-300 mb-[2rem] bg-transparent dark:bg-slate-500 dark:text-gray-200' required>
                  <option value="" disabled>Add a topic...</option>
                  <option value="Relationship">Relationship</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Sports">Sports</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Gaming">Gaming</option>
                </select>
              </div>
            </div>

            <div className="publish-btn">
              <button className='bg-green-800 hover:bg-green-900 h-[2rem] w-[6rem] text-white font-semibold rounded-[20px] disabled:opacity-[.6]' onClick={ publishBlog }>Publish</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PopupPost