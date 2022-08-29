import React, { useState, useEffect } from 'react'
import { useParams, NavLink, Routes, Route } from 'react-router-dom';
import football from '../img/football.jpg';
import family from '../img/family.jpg';
import TopicMain from '../components/topicDetails/TopicMain';
import TopicAside from '../components/topicDetails/TopicAside'; 
import { ImPriceTag } from 'react-icons/im';
import TrendingTopics from '../components/topicDetails/TrendingTopics';
import LatestTopics from '../components/topicDetails/LatestTopics';


function TopicDetails() {

    const { name } = useParams();

    const [ filteredBlog, setFilteredBlog ] = useState([]);


    const blogs = [

      {
        title: 'Brothers in Arms',
        id: 3,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
        author: 'Patrick Vierra',
        date: 'Aug 3',
        img: football,
        category: 'Gaming',
        likes: 2,
        isLiked: false
      },
      {
        title: 'Who Died??..oh False Alarm',
        id: 3,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
        author: 'Patrick Vierra',
        date: 'Aug 3',
        img: football,
        category: 'Entertainment',
        likes: 2,
        isLiked: false
      },
      {
        title: 'Beginning of new Season',
        id: 3,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
        author: 'Patrick Vierra',
        date: 'Aug 3',
        img: football,
        category: 'Sports',
        likes: 2,
        isLiked: false
      },
  
      {
        title: 'Beginning of new Season',
        id: 5,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
        author: 'Patrick Vierra',
        date: 'Aug 3',
        category: 'Lifestyle',
        likes: 2,
        isLiked: false
      }
    ]

    
    const newBlog = blogs.filter((blog) => blog.category === name)    
    
    useEffect(() => {
            
      setFilteredBlog(newBlog);

    }, []);

    console.log(filteredBlog);
    
    

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
            <NavLink to={`/topicDetails/${ name }/trending`} className={({isActive}) => isActive ? ' text-black dark:text-white after:block after:h-[.04rem] after:w-[100%] after:bg-gray-500 after:dark:h-[.15rem] after:dark:bg-gray-300' : null}>Trending</NavLink>
            <NavLink to={`/topicDetails/${ name }/latest`} className={ ({isActive}) => isActive ? 'text-black dark:text-white after:block after:h-[.04rem] after:w-[100%] after:bg-gray-500 after:dark:h-[.15rem] after:dark:bg-gray-300' : null}>Latest</NavLink>
          </ul>
        </nav>

        {/* inner routes */}
        <Routes>
          <Route path='trending' element={<TrendingTopics />} />
          <Route path='latest' element={<LatestTopics />} />
        </Routes>
      </main>

      <aside>

      </aside>
      
    </div>
  )
}

export default TopicDetails