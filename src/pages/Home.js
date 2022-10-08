import React from 'react'
import Carousel from '../components/home/Carousel';
import Blogs from '../components/home/Blogs';
import { useAuth } from '../authContext';
import Hero from '../components/home/Hero';

const Home = () => {

  // nav, slick, blogs

  const { currentUser } = useAuth();
  return (
    <div>
      { currentUser ? <Carousel /> : <Hero /> }
      <Blogs />
    </div>
  )
}

export default Home