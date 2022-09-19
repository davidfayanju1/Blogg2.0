import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { TwitterShareButton, TwitterIcon } from 'react-share';
import { useAuth } from '../../authContext';
import UserAsideLoader from '../userDetails/UserAsideLoader';

const Aside = ({ blogItems }) => {

  const { fetchUserBlogPosts, userData, blogs, number } = useAuth();

  return (
    
    <div className='dark:text-white md:sticky top-[9rem] md:px-[2rem]'>
      {
       blogItems.length === 0 ?
       
       <UserAsideLoader amount={ 1} />
       
       :

       blogItems.map((blog) => (

        <div key={blog.id}>
          <Link to={`/userDetails/${ blog.author.uid }`}>
            {!blog.author.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.8rem] flex items-center justify-center font-semibold text-gray-200'> { blog.author.name[0] }</p> : <img src={ blog.author.img } alt={ blog.title }  className=" h-[5.5rem] w-[5.6rem] rounded-[100%] mb-[.85rem] object-cover"/> }
            <p className='author_bio font-bold text-[1.23rem]'>{ blog.author.name }</p>
          </Link>
          <p className='post_number text-[1.1rem] text-gray-600 mb-[1rem] dark:text-gray-200'>{ number.length > 1 ? `${number.length} Posts` : `${number.length} Post` }</p>
          <p className="bio text-gray-600 mb-[1rem] dark:text-gray-200">{ blog.author.bio }</p>
          {
            blog.author.uid === userData.uid ? 
            <Link to='/settings' className='text-green-800 dark:text-gray-300'>Edit profile</Link>
            : 
            null
          }
        </div>
       ))

      }
    </div>
  )
}

export default Aside