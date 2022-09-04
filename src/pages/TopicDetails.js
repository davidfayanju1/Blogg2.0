import React, { useState, useEffect } from 'react'
import { useParams, NavLink, Routes, Route } from 'react-router-dom';
import football from '../img/football.jpg';
import family from '../img/family.jpg';
import TopicMain from '../components/topicDetails/TopicMain';
import TopicAside from '../components/topicDetails/TopicAside'; 
import { ImPriceTag } from 'react-icons/im';
import TrendingTopics from '../components/topicDetails/TrendingTopics';
import LatestTopics from '../components/topicDetails/LatestTopics';
import { useAuth } from '../authContext';



function TopicDetails() {

    const { name } = useParams();

    
    const { blogItems, fetchAllPosts } = useAuth();

    const [ filteredBlog, setFilteredBlog ] = useState([]);
    
    
    useEffect(() => {
      
      fetchAllPosts();
      
    }, []);

    useEffect(() => {

      const newBlog = blogItems.filter((blog) => blog.category === name)    
      setFilteredBlog(newBlog);
      
    }, [blogItems]);
    
  
  return (
    <div className="mt-[4.5rem] dark:bg-slate-900 bg-gray-50 dark:text-white min-h-[100vh]">
      <main className='md:border-solid border-r border-gray-300 border-none md:px-[5rem] px-[2.2rem] min-h-[100vh] md:w-[75%] w-[100%]'>
        <div className="topic-name h-[100%]">
          <div className="main-title flex items-center">
            <div className="tag-container rounded-full dark:bg-gray-300 dark:text-slate-800 bg-gray-300 md:h-[2.2rem] md:w-[2.2rem]  h-[1.7rem] w-[1.8rem] md:text-xl text-md flex items-center justify-center mr-3"><ImPriceTag /></div>
            <h1 className='font-bold md:text-[2.5rem] text-[1.7rem]'>{ name }</h1>
          </div>

          <div className="pt-[1.3rem] pb-[2.2rem]">
            <NavLink to='/newBlog' className='bg-transparent text-green-800 dark:text-gray-100 px-[1.1rem] py-[.5rem] border-green-800 dark:border-gray-100 border-solid border-[.02rem] rounded-[20px]'>Start Writing</NavLink>
          </div>
        </div>
        <nav className="topic-links after:w-[100%] after:bg-gray-300 after:h-[.02rem] after:block mb-[2rem]">
          <ul className='flex items-center gap-[2rem]'>
            <NavLink to={`/topicDetails/${ name }/`} className={({isActive}) => isActive ? ' text-black dark:text-white after:block after:h-[.04rem] after:w-[100%] after:bg-gray-500 after:dark:h-[.15rem] after:dark:bg-gray-300' : null}>Trending</NavLink>
            <NavLink to={`/topicDetails/${ name }/latest`} className={ ({isActive}) => isActive ? 'text-black dark:text-white after:block after:h-[.04rem] after:w-[100%] after:bg-gray-500 after:dark:h-[.15rem] after:dark:bg-gray-300' : null}>Latest</NavLink>
          </ul>
        </nav>

        {/* inner routes */}
        <Routes>
          <Route path='/' element={<TrendingTopics />} />
          <Route path='latest' element={<LatestTopics />} />
        </Routes>
      </main>

      <aside>

      </aside>      
    </div>
  )
}

export default TopicDetails