import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import beauty from '../../img/beauty.jpg';
import football from '../../img/football.jpg';
import family from '../../img/family.jpg';
import './HomeStyles.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';

const Blogs = () => {

  // latest, family, lifestyle,sports,travel,beauty

  const [likes, setLikes] = useState(false);
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'First Trip To Ibiza',
      id: 1,
      body: 'Lorem, Ipsum dolor hamet...',
      author: 'James Tonly',
      date: 'February 23, 2022',
      img: beauty,
      category: 'Lifestyle',
      likes: 1,
      isLiked: false
    },

    {
      title: 'Fun Part of Having Kids',
      id: 2,
      body: 'Lorem, Ipsum dolor hamet...',
      author: 'James Tonly',
      date: 'February 23, 2022',
      img: beauty,
      category: 'Relationship',
      likes: 10,
      isLiked: false
    },

    {
      title: 'Beginning of new Season',
      id: 3,
      body: 'Lorem, Ipsum dolor hamet...',
      author: 'Patrick Vierra',
      date: 'Agust 3, 2022',
      img: football,
      category: 'Sports',
      likes: 2,
      isLiked: false
    },

    {
      title: 'The Northern Irelands and its peace',
      id: 4,
      body: 'Lorem, Ipsum dolor hamet...',
      author: 'James Tonly',
      date: 'February 23, 2020',
      img: family,
      category: 'Lifestyle',
      likes: 3,
      isLiked: false
    },
  ])

  const [styles, setStyles] = useState({});

  const likePost = (blogPostId) => {

        const likedPost = [...blogPosts];
        
        likedPost[blogPostId].isLiked = !likedPost[blogPostId].isLiked;
        
        setBlogPosts(likedPost);     
      
    }
    
    
    
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


  return (
    <section className='dark:bg-slate-900 dark:text-white bg-slate-200 min-w-[22.6rem] lg:px-[7.3rem] lg:py-[8rem] px-[1.8rem] py-[6rem] '>
      <h1 className='md:text-[4.75rem] text-[2.5rem] font-bold text-center font-serif mb-[2rem]'>BLOGS</h1>
      <div className="flex-container flex items-start justify-between flex-col-reverse md:flex-row md:min-w-[27rem]">
        <div className="blogs-grid min-h-full md:w-[57%] w-[100%] md:min-w-[21rem]">
          {
            blogPosts.map((blogPost, index) => (
              // <Link to={`details/${blogPost.id}`} >
                <div className="blog-card dark:bg-slate-700 bg-slate-100 flex flex-col min-h-[100%] md:w-full" key={index} >
                  <div className="blog-image h-[13rem]">
                    <img src={ blogPost.img } alt="beautiful woman"  className='w-full h-full object-cover'/>
                  </div>
                  <div className="blog-text py-[1.5rem] px-[1.3rem] text-center min-h-[15rem] grid">
                    <p className="category text-[1.2rem] text-slate-900 dark:text-gray-300">{ blogPost.category }</p>
                    <h1 className='text-[1.5rem] font-serif font-bold'>{blogPost.title}</h1>
                    <div className="flex-icons w-[50%] flex items-start pb-[1rem] justify-between mx-auto">
                      <div className={`like flex items-center`} id = { blogPost.id } onClick = {() => likePost(index) }>
                        { blogPost.isLiked ? <AiFillHeart className='text-[2rem] text-red-600'/> : <AiOutlineHeart  className='text-[2rem]'/>}<p className="text-[1.1rem] ml-[0.35rem]">{likes ? blogPost.likes + 1 : blogPost.likes - 1}</p>
                      </div>
                      <div className="comment">
                        <BiMessageRounded className="text-[2rem]"/>
                      </div>
                    </div>
                    <p className='blog-date dark:text-gray-300 text-gray-700 text-[1.05rem]'>{blogPost.date}</p>
                  </div>
                </div>
              // </Link>
            ))
          }
        </div>

        <div className="blog-topics h-full md:sticky top-[10rem] md:w-[36%] w-[100%] min-w-[18rem] min-h-[10rem] md:mb-0 mb-[3rem]">
          <div className="blog-topics-title mb-[1.2rem] min-w-[15.5rem]">
            <h1 className="md:text-[1.02rem] text-[0.92rem] font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</h1>
          </div>

          <div className="blog_topic_button_flex w-[100%] min-w-[16rem]  flex flex-wrap gap-[0.7rem] min-h-[4.76rem]">

            {
              blogsTopic.map((bT, index) => (
                <Link to={`/topicDetails/${bT.category}`} key={index}>
                  <button className='border-rounded bg-transparent h-[2.7rem] px-[1rem] border-solid border-[1.85px] rounded-[0.3rem] gap-1 border-gray-400 dark:border-white dark:text-white'>                  
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