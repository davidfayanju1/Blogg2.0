import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import beauty from '../../img/beauty.jpg';
import football from '../../img/football.jpg';
import family from '../../img/family.jpg';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import './HomeStyles.css';


const Blogs = () => {

  // latest, family, lifestyle,sports,travel,beauty

  const [likes, setLikes] = useState(false);
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'First Trip To Ibiza',
      id: 1,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
      author: 'James Tonly',
      date: 'Feb 23',
      img: beauty,
      category: 'Lifestyle',
      likes: 1,
      isLiked: false
    },

    {
      title: 'Fun Part of Having Kids',
      id: 2,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
      author: 'James Tonly',
      date: 'Feb 23',
      img: beauty,
      category: 'Relationship',
      likes: 10,
      isLiked: false
    },

    {
      title: 'Beginning of new Season',
      id: 3,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
      author: 'Patrick Vierra',
      date: 'Aug 3',
      img: football,
      category: 'Sports',
      likes: 2,
      isLiked: false
    },

    {
      title: 'The Northern Irelands and its peace',
      id: 4,
      body: 'Lorem, Ipsum dolor hamet. sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
      author: 'James Tonly',
      date: 'Feb 23',
      img: family,
      category: 'Lifestyle',
      likes: 3,
      isLiked: false
    },
    {
      title: 'The Northern Irelands and its peace',
      id: 5,
      body: 'Lorem, Ipsum dolor hamet sit amet consectetur adipisicing elit. Eius quasi dicta aperiam',
      author: 'James Tonly',
      date: 'Feb 23',
      img: family,
      category: 'Lifestyle',
      likes: 3,
      isLiked: false
    }
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
    <section className='dark:bg-slate-900 dark:text-white bg-slate-200 min-w-[22.6rem] lg:px-[4.75rem] lg:py-[8rem] px-[1.8rem] py-[6rem] '>
      <h1 className='md:text-[4.75rem] text-[2.5rem] font-bold text-center font-serif mb-[2rem]'>BLOGS</h1>
      <div className="flex-container flex items-start justify-between flex-col-reverse md:flex-row md:min-w-[27rem]">
        <div className="blogs-grid min-h-full md:w-[60%] w-[100%] md:min-w-[21rem]">
          {
            blogPosts.map((blogPost, index) => (
              <div className="blog flex items-top mb-[4rem] justify-between md:min-h-[10rem] h-[8rem] " key={blogPost.id}>
                <div className="blog-text w-[68.3%]">
                  <div className="blog-author flex">
                    <img src={ blogPost.img} alt={ blogPost.id}  className=" h-[1.65rem] w-[1.65rem] rounded-[100%] object-cover"/>
                    <p className='author-name ml-[0.2rem]'>{ blogPost.author }</p>
                  </div>
                  <Link to={`details/${blogPost.id}`} >
                    <div className="blog-body w-[100%] mb-[1.2rem]">
                      <h1 className="blog-title md:text-[1.44rem] text-[1.2rem] font-bold">{ blogPost.title }</h1>
                      <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ blogPost.body }</p>
                    </div>
                  </Link>
                  <div className="blog-date-data flex justify-between items-center">
                    <div className='flex text-gray-700 dark:text-gray-200 text-[0.9rem]'>
                      <p className="blog-time  mr-[0.6rem]">{ blogPost.date}</p>
                      <p className="mr-[0.6rem]">7min read</p>
                      <Link to={`/topicDetails/${ blogPost.category }`}>
                        <div className="blog-category mr-[0.6rem] bg-gray-300 h-[1.5rem] px-[0.7rem] rounded-[13px] hidden md:block dark:text-gray-800">{ blogPost.category }</div>
                      </Link>
                    </div>
                    <div className="save-icon ml-[2rem]">
                      <MdOutlineBookmarkAdd  className='text-[1.4rem]' title="Save"/>
                    </div>
                  </div>  
                </div>

                <div className="blog-image w-[30%] object-cover min-h-[8rem]">
                  <img src={ blogPost.img} alt={ blogPost.id} className="w-[100%] h-[100%]" />
                </div>
              </div>
            ))
          }
        </div>

        <div className="blog-topics h-full md:sticky top-[10rem] md:w-[33%] w-[100%] min-w-[18rem] min-h-[10rem] md:mb-0 mb-[3rem]">
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