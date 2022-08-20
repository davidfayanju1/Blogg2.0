import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import UserAside from '../components/userDetails/UserAside';
import UserMain from '../components/userDetails/UserMain';
import beauty from '../img/beauty.jpg';



const UserDetails = () => {

    const { user } = useParams();

    const data = [
      {
        name: user,
        id: Math.random(),
        img: beauty,
        blogs: [
          {
            title: 'First Trip To Ibiza',
            id: 1,
            body: 'Ok, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
            author: 'James Tonly',
            date: 'Feb 23',
            category: 'Lifestyle',
            img: beauty,            
            likes: 1,
            isLiked: false
          },
      
          {
            title: 'Fun Part of Having Kids',
            id: 2,
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
            author: 'James Tonly',
            date: 'Feb 23',
            img: beauty,
            category: 'Relationship',
            likes: 10,
            isLiked: false
          },
        ]
      },

      
    ]



  return (
    <div className='mt-[4.5rem] dark:bg-slate-900 bg-gray-200 min-h-[100vh] w-[100%]'>
        {
          data.map((person) => (
            <div className="flex justify-between" key={ person.id }>
              <div className="main-article md:w-[75%] w-[100%]">
                <UserMain person={ person }/>
              </div>
              <div className="article-sidebar md:w-[25%] hidden md:block">
                <UserAside person={ person }/>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default UserDetails