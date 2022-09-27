import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import BlogsLoader from '../home/BlogsLoader';
import BlogsCard from '../home/BlogsCard';


const LatestTopics = ({ filteredBlog, topicLoading}) => {
  return (
    <div className='latest-topics-container'>
      <>
        {
          topicLoading === false && filteredBlog.length === 0 ?

          <p>Start Contributing to this community. <Link to='/newBlog'>Write</Link></p>

          : null
        }
      </>
      <>
        {
          topicLoading === true && filteredBlog.length === 0 ?

          <BlogsLoader amount={2}/>
                    
          :

           filteredBlog.map((blogPost, index) => (

            <div className="latest-container" key={ index }>
              <BlogsCard blogPost={ blogPost } index={ index} />
            </div>

          ))
        }
      </>  
    </div>
  )
}

export default LatestTopics