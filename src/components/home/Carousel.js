import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import form from '../../img/form.jpg';
import formPicture from '../../img/formPicture.png';
import beauty from '../../img/beauty.jpg';
import family from '../../img/family.jpg';
import './HomeStyles.css';


const Carousel = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
  };

  const blogs = [
    {
      image: form,
      categories: 'BEAUTY',
      title: 'The Guide That Makes Dental Care Affordable',
      date: 'Jane Doe - February 21, 2020',
      id: 1
    },
    {
      image: formPicture,
      categories: 'LIFESTYLE',
      title: 'The Best Place To Travel in The United States',
      date: 'Brad Doe - February 21, 2020',
      id: 2
    },
    {
      image: beauty,
      categories: 'BEAUTY',
      title: 'The Guide That Makes Dental Care Affordable',
      date: 'Jane Doe - February 21, 2020',
      id: 3
    },
    {
      image: family,
      categories: 'FAMILY',
      title: 'The Guide That Makes Dental Care Affordable',
      date: 'Jane Doe - February 21, 2020',
      id: 4
    }
  ]

  return (
    <div className="bg-slate-400 w-full h-96 mt-[4.5rem]">
        <Slider {...settings}>
          {

            blogs.map((blog) => (


              <Link to={`/details/${blog.id}`} key={blog.id}>
                <div className="image-card h-96 w-full text-center relative">
                  <div className="absolute top-0 left-0 opacity-70 h-full w-full bg-gray-900 ">
                    <img src={ blog.image } alt="girl-glasses" className='w-full h-full object-cover'/>
                    <div className='absolute top-32 left-3 text-white' styled={{zIndex: '10000'}}>
                      <h2 className='blog-category mb-4'>{blog.categories}</h2>
                      <h1 className="hover:underline blog-title font-serif text-3xl mb-4 font-bold">{ blog.title }</h1>
                      <small>{ blog.date }</small>
                    </div>
                  </div>
                </div>
              </Link> 

            ))
          }
        </Slider>
        
    </div>
  )

}

export default Carousel