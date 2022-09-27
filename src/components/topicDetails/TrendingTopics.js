import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogsLoader from '../home/BlogsLoader';
import BlogsCard from '../home/BlogsCard';

const TrendingTopics = ({ filteredBlog, topicLoading }) => {

  return (
    <div>

      <>
        {
          filteredBlog.length === 0 && topicLoading === false ?

          <p>Start Contributing to this community. <Link to="/newblog">Write</Link></p>

          : null
        }
      </>

      <>
        {
          filteredBlog.length === 0 && topicLoading === true ?
          
            <BlogsLoader amount={ 2 }/>
          
          :
                  
          filteredBlog.map((blogPost, index) => (

          <div className="blog-card-container" key={blogPost.id}>
            <BlogsCard blogPost={ blogPost } index={ index }/>
          </div>  
          ))
          
          }
      </>

    </div>
  )
}

export default TrendingTopics