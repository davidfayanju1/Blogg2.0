import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { useAuth } from '../../authContext';
import moment from 'moment';


const UserMain = ({id}) => {

  const { blogItems, fetchAllPosts, fetchAllUsers, users } = useAuth();

  const [ pageBlogs, setPageBlogs ] = useState([]);

  const [ blogAuthor, setBlogAuthor ] = useState([]);
  
  useEffect(() => {
    
    fetchAllUsers();

    fetchAllPosts();
    
  }, [])
  
  useEffect(() => {

    setBlogAuthor([]);
    const newArr = users.filter((mainUser) => mainUser.data().uid === id)
    setBlogAuthor(newArr);
    
  }, [users]);

  useEffect(() => {

    setPageBlogs([]);
    const pageBlog = blogItems.filter((blog) => blog.uid === id)
    setPageBlogs(pageBlog)

  }, [blogItems]);
  
  

  return (
    <div className='min-h-[100vh] md:px-[7rem] md:py-[3rem] px-[2rem] py-[3rem] w-[100%] dark:text-white md:border-solid border-r border-gray-300 border-none'>
      <>
        {
          blogAuthor && blogAuthor.map((author) => (
            <div key={ id }>
              <div className="profile-name mb-[2rem]">
              <h1 className='text-[3rem] font-bold'>{ author.data().name }</h1>
              </div>
              <nav className='mb-[3rem] after:block after:h-[.1rem] after:w-[100%] after:bg-gray-300'>
                  <ul>
                    <li><NavLink to={`/userDetails/${ author.data().uid }`} className={({isActive}) => !isActive ? 'text-black dark:text-white after:block after:h-[.1rem] after:w-[3rem] after:bg-gray-700 after:dark:h-[.15rem] after:dark:bg-gray-300' : ''}>Home</NavLink></li>
                  </ul>
              </nav>
            </div>
          ))
        }
      </>
      {
        pageBlogs &&  pageBlogs.map((person) => (
          <div className="blog-card-container" key={person.id}>
            <div className="blog-card flex items-top mb-[4rem] justify-between md:min-h-[11rem] h-[8rem] border-b dark:border-gray-300 border-gray-400 pb-[3rem]">
              <div className={`blog-text ${person.img !== null ? 'w-[68.3%]' : 'w-[100%]'}`}>
                  <div className="blog-author">
                    <p className="blog-time  mr-[0.6rem]">{ moment(person.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>
                  </div>
                <Link to={`/details/${id}`}>
                  <div className="blog-body w-[100%] mb-[1.2rem]">
                    <h1 className="blog-title md:text-[1.44rem] text-[1.2rem] font-bold">{ person.title }</h1>
                    <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ person.blog }</p>
                  </div>
                </Link>
                <div className="blog-date-data flex justify-between items-center">
                  <div className='flex text-gray-700 dark:text-gray-200 text-[0.9rem]'>
                    <Link to={`/topicDetails/${ person.category }`}>
                      <div className="blog-category mr-[0.6rem] bg-gray-300 h-[1.5rem] px-[0.7rem] rounded-[13px] hidden md:block dark:text-gray-800">{ person.category }</div>
                    </Link>
                    <p className="mr-[0.6rem]">7min read</p>
                  </div>
                  <div className="save-icon ml-[2rem]">
                    {/* <MdOutlineBookmarkAdd  className='text-[1.4rem]'/> */}
                    <svg width="25" height="25"  className="dark:fill-white" title="Save"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                  </div>
                </div>  
              </div>

              { person.img && 

                  <div className="blog-image w-[30%]  md:min-h-[8rem] min-h-[6rem]">
                    <Link to={`details/${person.id}`}>
                      <img src={ person.img} alt={ person.id} className="object-cover w-[100%] h-[100%]" /> 
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

export default UserMain