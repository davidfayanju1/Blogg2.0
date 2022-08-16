import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import beauty from '../img/beauty.jpg'
import football from '../img/football.jpg';
import family from '../img/family.jpg';
import MainArticle from '../components/blogDetails/MainArticle';
import Aside from '../components/blogDetails/Aside';

export const Details = () => {

  const [ details, setDetails ] = useState([]);

 const blogs = [
    {
      title: 'First Trip To Ibiza',
      id: 1,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
      author: 'James Tonly',
      date: 'Feb 23',
      img: beauty,
      category: 'Lifestyle',
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

    {
      title: 'Beginning of new Season',
      id: 3,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae',
      author: 'Patrick Vierra',
      date: 'Aug 3',
      img: football,
      category: 'Sports',
      likes: 2,
      isLiked: false
    },
  ]


    const { id } = useParams();
    
    const blogsArray = blogs.filter((blog) => blog.id.toString() === id)

    useEffect(() =>{

      setDetails(blogsArray);

    }, [])


  return (
    <div className='mt-[4.5rem] md:px-[4rem] md:py-[4rem] dark:bg-slate-900 bg-gray-200 w-[100%] min-h-[100vh]'>
      {
        blogsArray.map((blog) => (
          <div className="flex justify-between" key={ blog.id }>
            <div className="main-article">
              <MainArticle blog={ blog }/>
            </div>
            <div className="article-sidebar">
              <Aside blog={ blog }/>
            </div>
          </div>
      ))
      }
    </div>
  )
}
