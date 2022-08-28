import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ImPriceTag } from 'react-icons/im';


const TopicMain = ({ name, topic}) => {


  return (
    <main className='min-h-[100vh] md:px-[5rem] md:py-[2rem] px-[2rem] py-[3rem] w-[100%] dark:text-white md:border-solid border-r border-gray-300 border-none'>
        <div className="main-title flex items-center">
          <div className="tag-container rounded-full dark:bg-gray-300 bg-gray-300 h-[2.2rem] w-[2.2rem] text-xl flex items-center justify-center mr-3"><ImPriceTag /></div>
          <h1 className='font-bold text-[3rem]'>{ name }</h1>
        </div>    
    </main>
  )
}

export default TopicMain