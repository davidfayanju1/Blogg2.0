import React from 'react'
import { Link } from 'react-router-dom';
import BlogsLoader from '../home/BlogsLoader';
import BlogsCard from '../home/BlogsCard';

const DetailsHome = ({ pageBlogs, loading }) => {

  return (
    <div>
        <>
          {
            pageBlogs.length === 0 && loading === false ?
            <p className='text-center'>Have something to share ? <Link to='/newBlog'>Write your first story</Link></p>
            :
            null
          }
        </>
        <>
          {
            loading === true && pageBlogs.length === 0 ?
            
            <BlogsLoader amount={3}/>
            :
            pageBlogs.map((blogPost, index) => (
              <div className="blog-card-container" key={blogPost.id}>
                <BlogsCard blogPost={ blogPost } index={ index } />
              </div>
            ))
          }
      </>
    </div>
  )
}

export default DetailsHome