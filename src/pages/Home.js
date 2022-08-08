import React from 'react'
import Carousel from '../components/home/Carousel';
import Blogs from '../components/home/Blogs';


const Home = () => {

  // nav, slick, blogs
  return (
    <div>
      <Carousel />
      <Blogs />
    </div>
  )
}

export default Home