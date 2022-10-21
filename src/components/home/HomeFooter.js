import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authContext';

const HomeFooter = () => {

    const { currentUser } = useAuth();

  return (
    <footer className='bg-black text-white dark:bg-gray-300 dark:text-black min-h-[6rem] p-[1.3rem]'>
        <div className="title after:block after:w-full after:h-[.1rem] after:bg-white dark:after:bg-black">
            <h1 className=" mb-[1rem] title font-serif text-[1.6rem] md:text-[2rem] font-bold">SPACE.</h1>
            <ul className='flex mb-[1rem] text-[1rem]'>
                <Link to='/' className='mr-[1rem]'>Home</Link>
                <Link to={!currentUser ? '/login' : '/settings'} className='mr-[1rem]'>Settings</Link>
                <Link to={!currentUser ? '/login' : '/list'}>List</Link>
            </ul>   
        </div>
        <div className="mt-[1rem]">
            <p className="text-[.9rem]">Every creative needs a Space to create. </p>
        </div>
    </footer>
  )
}

export default HomeFooter