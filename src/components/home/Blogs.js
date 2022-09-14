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



const Blogs = () => {

  // latest, family, lifestyle,sports,travel,beauty
  
  const { postLoading, fetchAllPosts, setBlogItems, blogItems, currentUser } = useAuth()

  const [likes, setLikes] = useState(false);
  
  const [styles, setStyles] = useState({});

  // const likePost = (blogPostId) => {

  //       const likedPost = [...blogPosts];
        
  //       likedPost[blogPostId].isLiked = !likedPost[blogPostId].isLiked;
        
  //       setBlogPosts(likedPost);     
      
  // }
        
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
    <section className='dark:bg-slate-900 dark:text-white bg-gray-50 min-w-[22.6rem] min-h-[100vh] lg:px-[4.75rem] lg:py-[8rem] px-[1.8rem] py-[6rem]'>
      <h1 className='md:text-[4.75rem] text-[2.5rem] font-bold text-center font-serif mb-[2rem]'>BLOGS</h1>
      <div className="flex-container flex items-start justify-between flex-col-reverse md:flex-row md:min-w-[27rem]">
        <div className="blogs-grid min-h-full md:w-[60%] w-[100%] md:min-w-[21rem]">
          {
            postLoading === false && blogItems.length === 0 ?

            <p className="font-serif text-center text-[2rem] text-gray-700 dark:text-gray-200">OOPS!! poor internet connection</p>
            :
            null
          }
          
          
          {            
            postLoading === true ?

            <SkeletonTheme baseColor="#ffff" highlightColor="#D3D3D3">
              <Skeleton className="md:min-h-[10rem] h-[8rem]" count={ 5 }/>
            </SkeletonTheme>
            // <p className='font-bold text-[2rem]'>LOADING!!!</p>
            
            :
            blogItems.map((blogPost, index) => (
              

              <div className="blog flex items-top mb-[4rem] justify-between md:min-h-[10rem] h-[8rem]" key={ blogPost.id }>
                <div className={`blog-text ${ blogPost.img === null ? 'w-[100%]' : 'w-[63.1%]'}`}>
                  <Link to={`/userDetails/${blogPost.author.uid}`}>
                    <div className="blog-author flex">
                      {blogPost.author.img ?  <img src={ blogPost.author.img} alt={ blogPost.id}  className=" h-[1.65rem] w-[1.65rem] rounded-[100%] object-cover"/> : <p className='bg-red-800 h-[1.65rem] w-[1.65rem] rounded-[100%] text-[1.1rem] flex items-center justify-center font-semibold text-white'> { blogPost.author.name[0] }</p>}
                      <p className='author-name ml-[0.2rem]'>{ blogPost.author.name }</p>
                    </div>
                  </Link>
                  <Link to={`/details/${blogPost.id}`}>
                    <div className="blog-body w-[100%] mb-[1.2rem]">
                      <h1 className="blog-title md:text-[1.44rem] text-[1.2rem] font-bold">{ blogPost.title }</h1>
                      <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ blogPost.blog }</p>
                    </div>
                  </Link>
                  <div className="blog-date-data flex justify-between items-center">
                    <div className='flex text-gray-700 dark:text-gray-200 text-[0.9rem]'>
                      <p className="blog-time  mr-[0.6rem]">{ moment(blogPost.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>
                      <p className="mr-[0.6rem]">7min read</p>
                      <Link to={`/topicDetails/${ blogPost.category }/`}>
                        <div className="blog-category mr-[0.6rem] bg-gray-300 h-[1.5rem] px-[0.7rem] rounded-[13px] hidden md:block dark:text-gray-800">{ blogPost.category }</div>
                      </Link>
                    </div>
                    <div className="save-icon ml-[2rem]">
                      <svg width="25" height="25"  className="dark:fill-white"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                    </div>
                  </div>  
                </div>
                {
                  blogPost.img && 

                  <div className="blog-image w-[30%] min-h-[8rem]">
                    <Link to={`details/${blogPost.id}`}>
                      <img src={ blogPost.img} alt={ blogPost.id} className="object-cover w-[100%] h-[100%]" />
                    </Link>
                  </div>
                }  
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
                <Link to={`/topicDetails/${bT.category}/`} key={index}>
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