import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { IoIosHeartEmpty } from 'react-icons/io';

const MainArticle = ({ blog }) => {

  const[ stuck, setStuck ] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const view = ref.current;

    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    )

    observer.observe(view)
      return () => observer.unobserve(view)

  },[ref]);

  return (
    <main className='main-article min-h-[100vh] md:px-[7rem] md:py-[4rem] px-[2rem] py-[3rem] w-[100%] dark:text-white md:border-solid border-r border-gray-300 border-none'>
        
      <div className='blog-author-details flex justify-between items-center mb-[1rem]'>
        <div className="flex items-center">
            {!blog.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.9rem] flex items-center justify-center font-semibold text-gray-200'> { blog.author.charAt(0) }</p> : <img src={ blog.img } alt={ blog.category} className="w-[3rem] h-[3rem] rounded-[100%]"/> }
            <div className="info ml-[0.8rem]">
              <p className='text-gray-900 dark:text-gray-200 text-[1.15rem] mb-[.2rem]'>{ blog.author }</p>
              <div className="inner-flex flex items-center text-gray-700 dark:text-gray-200 text-[0.9rem]">
                <p className='flex items-center'>{ blog.date }.</p>
                <p className="read-time ml-[0.4rem]">7 min read</p>
              </div>
            </div>
        </div>
        <div className="user-icons">
          <MdOutlineBookmarkAdd  className='text-[1.8rem] cursor-pointer' title="Save"/>
        </div>
      </div>
      
      <div className="blog-details mb-[3rem]">
        <h1 className="blog-title font-bold md:text-[2.4rem] text-[1.8rem] mb-[2rem] dark:text-white ">{ blog.title}</h1>
        { blog.img &&  <img src={ blog.img } alt={ blog.title }  className="w-[100%] md:h-[60vh] h-[50vh] object-cover mb-[2rem]"/> }
        <article className='font-serif md:text-[1.25rem] text-[1.1rem] text-gray-800 dark:text-gray-300'>{ blog.body }</article>    
      </div>

      <div className={`blog-icons-section ${ stuck ? 'w-[8.2rem] h-[2.8rem] rounded-[22px] text-center mx-[auto]' : 'w-[100%]'} flex justify-between dark:text-white text-gray-700 text-[1.65rem] sticky bottom-[-1px] bg-gray-200 dark:bg-slate-900`} ref={ ref }>
        <div className={`blog-like-comment flex items-center w-full gap-[2rem] ${ stuck ? 'justify-between px-[1rem] gap-[0rem]' : ''}`}>
          <div className="like flex items-center">
            <IoIosHeartEmpty title='clap' className='cursor-pointer'/> <p className='text-[.9rem]'>22</p>
          </div>
          <div className="comment flex items-center">
            <BiMessageRounded  className='cursor-pointer' title="comment"/><p className='text-[.9rem]'>2</p>
          </div>
        </div>

        <div className={ stuck ? 'hidden' : '' }>
          <MdOutlineBookmarkAdd  className='text-[1.8rem] cursor-pointer' title="Save"/>
        </div>
      </div>
    </main>
  )
}

export default MainArticle