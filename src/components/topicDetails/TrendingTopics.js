import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogsLoader from '../home/BlogsLoader';

const TrendingTopics = ({ filteredBlog, topicLoading }) => {
  // console.log(filteredBlog, topicLoading)

  return (
    <div>

      {
        filteredBlog.length === 0 && topicLoading === false ?

        <p>Start Contributing to this community. <Link to="/newblog">Write</Link></p>

        : null
      }

      {
        filteredBlog.length === 0 && topicLoading === true ?
        
          <BlogsLoader amount={ 2 }/>
        
        :
                
        filteredBlog.map((blogPost) => (

        <div className="blog-card-container" key={blogPost.id}>
          <div className="blog-card flex items-top mb-[4rem] justify-between md:min-h-[11rem] h-[8rem] border-b dark:border-gray-300 border-gray-400 pb-[3rem]">
            <div className={`blog-text ${blogPost.img !== null ? 'w-[68.3%]' : 'w-[100%]'}`}>
                <div className="blog-author">
                  <p className="blog-time  mr-[0.6rem]">{ moment(blogPost.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>
                </div>
              <Link to={`/details/${blogPost.id}`}>
                <div className="blog-body w-[100%] mb-[1.2rem]">
                  <h1 className="blog-title md:text-[1.44rem] text-[1.2rem] font-bold">{ blogPost.title }</h1>
                  <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ blogPost.blog }</p>
                </div>
              </Link>
              <div className="blog-date-data flex justify-between items-center">
                <div className='flex text-gray-700 dark:text-gray-200 text-[0.9rem]'>
                  <Link to={`/topicDetails/${ blogPost.category }/`}>
                    <div className="blog-category mr-[0.6rem] bg-gray-300 h-[1.5rem] px-[0.7rem] rounded-[13px] hidden md:block dark:text-gray-800">{ blogPost.category }</div>
                  </Link>
                  <p className="mr-[0.6rem]">7min read</p>
                </div>
                <div className="save-icon ml-[2rem]">
                  <svg width="25" height="25"  className="dark:fill-white" title="Save"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                </div>
              </div>  
            </div>

            { blogPost.img && 

                <div className="blog-image w-[30%]  md:min-h-[8rem] min-h-[6rem]">
                  <Link to={`details/${blogPost.id}`}>
                    <img src={ blogPost.img} alt={ blogPost.id} className="object-cover w-[100%] h-[100%]" /> 
                  </Link>
                </div>
            }
          </div>
        </div>

          ))
        }
    </div>
  )
}

export default TrendingTopics