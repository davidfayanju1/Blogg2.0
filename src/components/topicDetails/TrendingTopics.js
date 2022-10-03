import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogsLoader from '../home/BlogsLoader';
import BlogsCard from '../home/BlogsCard';
import { useAuth } from '../../authContext';

const TrendingTopics = ({ filteredBlog, topicLoading }) => {

  const { currentUser } = useAuth();

  return (
    <div>

      <>
        {
          filteredBlog.length === 0 && topicLoading === false ?

          <p>Start Contributing to this community. {currentUser ? <Link to='/newBlog'>Write</Link> :  <Link to='/login'>Write</Link>}</p>

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