import React, { useEffect, useState } from 'react'
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { useAuth } from '../../authContext';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogsLoader from '../home/BlogsLoader';
import DetailsHome from './DetailsHome';
import DetailsAbout from './DetailsAbout';


const UserMain = ({id}) => {

  const { blogItems, fetchAllPosts, fetchAllUsers, users, userData, currentUser } = useAuth();

  const [ pageBlogs, setPageBlogs ] = useState([]);

  const [ blogAuthor, setBlogAuthor ] = useState([]);
  const [ loading, setLoading ] = useState(true);


  useEffect(() => {
    
    fetchAllUsers();

    fetchAllPosts();
    
  }, [])
  
  useEffect(() => {

    setLoading(true);
    setBlogAuthor([]);
    const newArr = users.filter((mainUser) => mainUser.data().uid === id)
    setBlogAuthor(newArr);
    
  }, [users]);

  useEffect(() => {

    setPageBlogs([]);
    const pageBlog = blogItems.filter((blog) => blog.uid === id)
    setPageBlogs(pageBlog)

    blogItems.length && setLoading(false);

  }, [blogItems]);
  

  return (
    <div className='min-h-[100vh] md:px-[7rem] md:py-[3rem] px-[1.6rem] py-[3rem] w-[100%] dark:text-white md:border-solid border-r border-gray-300 border-none'>
      <>
        {
          blogAuthor.length !== 0 ? 

          blogAuthor.map((author) => (
            <div key={ id }>
              <div className="profile-name mb-[2rem]">
                <h1 className='text-[3rem] font-bold'>{ author.data().name }</h1>
              </div>

              <nav className='mb-[3rem] after:block after:h-[.1rem] after:w-full after:bg-gray-300'>
                <ul className='flex items-center'>
                  <NavLink to={`/userDetails/${ id }/`} className={({isActive}) => isActive ? 'text-black dark:text-white after:block after:h-[.1rem] after:w-[3rem] after:bg-gray-700 after:dark:h-[.15rem] after:dark:bg-gray-300 mr-[2rem]' : 'mr-[2rem]'}>Home</NavLink>
                  { currentUser !== null && userData.uid === author.data().uid ? <NavLink to={`/userDetails/${ id }/about`} className={({isActive}) => isActive ? 'text-black dark:text-white after:block after:h-[.1rem] after:w-[3rem] after:bg-gray-700 after:dark:h-[.15rem] after:dark:bg-gray-300' : ''}>About</NavLink> : author.data().about !== '' && <NavLink to={`/userDetails/${ id }/about`} className={({isActive}) => isActive ? 'text-black dark:text-white after:block after:h-[.1rem] after:w-[3rem] after:bg-gray-700 after:dark:h-[.15rem] after:dark:bg-gray-300' : ''}>About</NavLink>}
                </ul>
              </nav>
              {/* inner routes */}
              <Routes>
                <Route path='/' element={<DetailsHome pageBlogs={ pageBlogs } loading={ loading }/>} />
                <Route path='about' element={<DetailsAbout author={ author }/>} />
              </Routes>
            </div>


          ))

          :

          <SkeletonTheme baseColor="#ffff" highlightColor="#D3D3D3">
            <Skeleton className='max-w-[20rem] h-[3rem] mb-[2rem]'/>
          </SkeletonTheme>
        }
      </>
      
      
    </div>
  )
}

export default UserMain