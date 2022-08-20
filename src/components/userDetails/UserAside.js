import React from 'react';
import { Link } from 'react-router-dom';

const UserAside = ({ person }) => {
  return (
    <div className='dark:text-white md:sticky top-[9rem] md:px-[2rem]'>
      <Link to={`/userDetails/${ person.name }`}>
        {!person.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.8rem] flex items-center justify-center font-semibold text-gray-200'>{ person.name.charAt(0) }</p> : <img src={ person.img } alt={ person.name }  className=" h-[5.5rem] w-[5.6rem] rounded-[100%] mb-[.85rem] object-cover"/> }
        <p className='author_bio font-bold text-[1.23rem]'>{ person.name }</p>
      </Link>
      <p className='post_number text-[1.1rem] text-gray-600 dark:text-gray-300 mb-[1rem]'>{`${person.blogs.length} Posts`}</p>
      <p className="bio text-gray-600 dark:text-gray-300">Lead Frontend Engieer at Google and strategic expert</p>
    </div>
  )
}

export default UserAside