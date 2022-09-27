import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import BlogsLoader from '../home/BlogsLoader';
import BlogsCard from '../home/BlogsCard';

const DetailsHome = ({ pageBlogs }) => {
  return (
    <div>
        <>
        {
          pageBlogs.length !== 0 ?
          
          pageBlogs.map((blogPost, index) => (
            <div className="blog-card-container" key={blogPost.id}>
              <BlogsCard blogPost={ blogPost } index={ index } />
            </div>
          ))
          :
          <BlogsLoader amount={3}/>
        }
      </>
    </div>
  )
}

export default DetailsHome