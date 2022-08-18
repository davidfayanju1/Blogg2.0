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
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
      author: 'Patrick Vierra',
      date: 'Aug 3',
      img: football,
      category: 'Sports',
      likes: 2,
      isLiked: false
    },

    {
      title: 'Beginning of new Season',
      id: 5,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
      author: 'Patrick Vierra',
      date: 'Aug 3',
      category: 'Sports',
      likes: 2,
      isLiked: false
    },

    {
      title: 'Beginning of new Season',
      id: 4,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi dicta aperiam odio, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum inventore dolorem labore aliquid est eos dicta natus quae quia, officia quos rem iste eveniet, eligendi ex. Quis, rerum asperiores reprehenderit, delectus maxime, veritatis alias quisquam ipsum error ducimus obcaecati.',
      author: 'Darla Martins',
      date: 'Aug 3',
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
    <div className='mt-[4.5rem] dark:bg-slate-900 bg-gray-200 w-[100%] min-h-[100vh]'>
      {
        blogsArray.map((blog) => (
          <div className="flex justify-between" key={ blog.id }>
            <div className="main-article md:w-[75%] w-[100%]">
              <MainArticle blog={ blog }/>
            </div>
            <div className="article-sidebar md:w-[25%] hidden md:block">
              <Aside blog={ blog }/>
            </div>
          </div>
      ))
      }
    </div>
  )
}
