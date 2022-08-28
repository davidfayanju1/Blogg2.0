import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { TwitterShareButton, TwitterIcon } from 'react-share';
import { useAuth } from '../../authContext';
const Aside = ({ blog }) => {

  const { fetchUserBlogPosts, userData, blogs, number } = useAuth();

  // useEffect(() => {

  //   fetchUserBlogPosts();

  // }, []);

  return (
    <div className='dark:text-white md:sticky top-[9rem] md:px-[2rem]'>
      
      {/* <TwitterShareButton title='Blog Post' url='medium.com'>
        <TwitterIcon size={32} round/>
      </TwitterShareButton> */}
      <Link to={`/userDetails/${ blog.author }`}>
        {!blog.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.8rem] flex items-center justify-center font-semibold text-gray-200'> { blog.author.charAt(0) }</p> : <img src={ blog.img } alt={ blog.title }  className=" h-[5.5rem] w-[5.6rem] rounded-[100%] mb-[.85rem] object-cover"/> }
        <p className='author_bio font-bold text-[1.23rem]'>{ blog.author }</p>
      </Link>
      <p className='post_number text-[1.1rem] text-gray-600 mb-[1rem] dark:text-gray-200'>{ number.length > 1 ? `${number.length} Posts` : `${number.length} Post` }</p>
      <p className="bio text-gray-600 mb-[1rem] dark:text-gray-200">Lead Frontend Engieer at Google and strategic expert</p>
    </div>
  )
}

export default Aside