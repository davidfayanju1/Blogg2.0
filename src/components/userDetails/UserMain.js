import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineBookmarkAdd } from 'react-icons/md';

const UserMain = ({person}) => {
  return (
    <div className='min-h-[100vh] md:px-[7rem] md:py-[3rem] px-[2rem] py-[3rem] w-[100%] dark:text-white md:border-solid border-r border-gray-300 border-none'>
      <div className="profile-name mb-[2rem]">
        <h1 className='text-[3rem] font-bold'>{person.name}</h1>
      </div>

      <nav className='mb-[3rem] after:block after:h-[.1rem] after:w-[100%] after:bg-gray-300'>
          <ul>
            <li><NavLink to={`/userDetails/${ person.name }`} className={({isActive}) => !isActive ? 'text-black dark:text-white after:block after:h-[.1rem] after:w-[3rem] after:bg-gray-700 after:dark:h-[.15rem] after:dark:bg-gray-300' : ''}>Home</NavLink></li>
          </ul>
      </nav>

      <div className="blog-card-container">
        {
        
          person.blogs.map((blogPost) => (

            <div className="blog-card flex items-top mb-[4rem] justify-between md:min-h-[14rem] h-[8rem] border-b dark:border-gray-300 border-gray-400 pb-[3rem]" key={blogPost.id}>
                <div className="blog-text w-[68.3%]">
                    <div className="blog-author">
                      <p className="blog-time  mr-[0.6rem]">{ blogPost.date}</p>
                    </div>
                  <Link to={`/details/${blogPost.id}`}>
                    <div className="blog-body w-[100%] mb-[1.2rem]">
                      <h1 className="blog-title md:text-[1.44rem] text-[1.2rem] font-bold">{ blogPost.title }</h1>
                      <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ blogPost.body }</p>
                    </div>
                  </Link>
                  <div className="blog-date-data flex justify-between items-center">
                    <div className='flex text-gray-700 dark:text-gray-200 text-[0.9rem]'>
                      <Link to={`/topicDetails/${ blogPost.category }`}>
                        <div className="blog-category mr-[0.6rem] bg-gray-300 h-[1.5rem] px-[0.7rem] rounded-[13px] hidden md:block dark:text-gray-800">{ blogPost.category }</div>
                      </Link>
                      <p className="mr-[0.6rem]">7min read</p>
                    </div>
                    <div className="save-icon ml-[2rem]">
                      <MdOutlineBookmarkAdd  className='text-[1.4rem]' title="Save"/>
                    </div>
                  </div>  
                </div>

                <div className="blog-image w-[30%] object-cover md:min-h-[8rem] min-h-[6rem]">
                  <Link to={`details/${blogPost.id}`}>
                    { blogPost.img && <img src={ blogPost.img} alt={ blogPost.id} className="w-[100%] h-[100%]" /> }
                  </Link>
                </div>
              </div>
          ))
      }
      </div>

    </div>
  )
}

export default UserMain