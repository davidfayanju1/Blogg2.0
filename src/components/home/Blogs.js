import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import beauty from '../../img/beauty.jpg';
import football from '../../img/football.jpg';
import family from '../../img/family.jpg';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import './HomeStyles.css';
import { useAuth } from '../../authContext';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogsLoader from './BlogsLoader';
import { useReadingTime } from "react-hook-reading-time";
import BlogsCard from './BlogsCard';



const Blogs = () => {

  // latest, family, lifestyle,sports,travel,beauty
  
  const { userData, postLoading, fetchAllPosts, setBlogItems, blogItems, currentUser } = useAuth()

  const [likes, setLikes] = useState(false);
  
  const [styles, setStyles] = useState({});
        
  const blogsTopic = [
    { 
      id: 1,
      category : 'Relationship'
    },

    { 
      id: 2,
      category : 'Lifestyle'
    },

    { 
      id: 3,
      category : 'Sports'
    },

    { 
      id: 4,
      category : 'Entertainment'
    },

    { 
      id: 5,
      category : 'Gaming'
    },
  ]


    
  useEffect(() => {

    fetchAllPosts();

  }, []);

  
  return (
    <section className='dark:bg-slate-900 dark:text-white bg-gray-50 min-w-[22.6rem] min-h-[100vh] '>
      {/* <h1 className='md:text-[4.75rem] text-[2.5rem] font-bold text-center font-serif mb-[2rem]'>BLOGS</h1> */}
      <div className="flex-container flex items-start justify-between flex-col-reverse md:flex-row md:min-w-[27rem]">
        <div className="blogs min-h-full md:w-[60%] w-[100%] md:min-w-[21rem] lg:px-[4.75rem] lg:py-[5rem] px-[1.2rem] py-[6rem]">
          {
            postLoading === false && blogItems.length === 0 ?

            <p className="font-serif text-center text-[2rem] text-gray-700 dark:text-gray-200">OOPS!! poor internet connection</p>
            :
            null
          }
          
           
          {            
            postLoading === true && userData ?

            
            <BlogsLoader amount={ 5 } />

            :

            blogItems.map((blogPost, index) => (
              

              <div className="new" key={ index }>
                <BlogsCard blogPost={ blogPost } index={index}/>
              </div>

            ))
          }
        </div>

        {/* topics */}
        <div className="blog-topics h-full self-start md:sticky top-[10rem] md:w-[40%] w-[100%] min-w-[18rem] min-h-[10rem] border-gray-400 border-b-[.08rem] md:border-none md:py-[4rem] py-[2rem] px-[1rem]">
          <div className="blog-topics-title mb-[1.2rem] min-w-[15.5rem]">
            <h1 className="md:text-[1.02rem] text-[0.92rem] font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</h1>
          </div>

          <div className="blog_topic_button_flex w-[100%] min-w-[16rem]  flex flex-wrap min-h-[4.76rem]">

            {
              blogsTopic.map((bT, index) => (
                <Link to={`/topicDetails/${bT.category}/`} key={index}>
                  <button className='mr-[0.7rem] mb-[.7rem] border-rounded bg-transparent h-[2.4rem] px-[.9rem] border-solid border-[1px] rounded-[0.3rem] border-gray-400 dark:border-white dark:text-white text-gray-500 text-[.8rem] py-[.1rem]'>                  
                    {bT.category}
                  </button>
                </Link>  
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs