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
    <div className="mt-[4.5rem] dark:bg-slate-900 bg-gray-50 dark:text-white min-h-[100vh] px-[5rem]">
      <div className="topic-name h-[100%]">
        <div className="main-title flex items-center">
          <div className="tag-container rounded-full dark:bg-gray-300 bg-gray-300 h-[2.2rem] w-[2.2rem] text-xl flex items-center justify-center mr-3"><ImPriceTag /></div>
          <h1 className='font-bold text-[3rem]'>{ name }</h1>
        </div>

        <div className="py-[1.3rem]">
          <NavLink to='/newBlog' className='bg-transparent text-green-800 dark:text-gray-100 px-[1.2rem] py-[.3rem] border-green-800 dark:border-gray-100 border-solid border-[.02rem] rounded-[15px]'>Start Writing</NavLink>
        </div>
      </div>
      <nav className="topic-links">
        <ul className='flex items-center gap[2rem]clear'>
          <NavLink to={`/topicDetails/${ name }`}>Trending</NavLink>
          <NavLink to={`/topicDetails/${ name }/latest`}>Latest</NavLink>
        </ul>
      </nav>

      {/* inner routes */}
      <Routes>
        <Route path='/' element={<TrendingTopics />} />
        <Route path='/latest' element={<LatestTopics />} />
      </Routes>
      
    </div>
  )
}

export default TopicDetails