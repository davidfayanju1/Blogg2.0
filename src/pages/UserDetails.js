import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import UserAside from '../components/userDetails/UserAside';
import UserMain from '../components/userDetails/UserMain';
import beauty from '../img/beauty.jpg';
import { useAuth } from '../authContext';


const UserDetails = () => {

  const { id } = useParams();
  const { number, userBlogs } = useAuth();

  return (
    <div className='mt-[4.5rem] dark:bg-slate-900 bg-gray-50 min-h-[100vh] w-[100%]'>
      <div className="flex justify-between">
        <div className="main-article md:w-[75%] w-[100%]">
          <UserMain id={ id }/>
        </div>
        <div className="article-sidebar md:w-[25%] hidden md:block">
          <UserAside id={ id }/>
        </div>
      </div>
    </div>
  )
}

export default UserDetails