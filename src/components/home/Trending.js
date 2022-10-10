import React, { useEffect } from 'react'
import { useAuth } from '../../authContext';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Trending = () => {
    const { fetchTrendingPosts, trending } = useAuth();
    
    useEffect(() => {
        
        fetchTrendingPosts();
        
    }, [])
      
    return (
    <div className='min-h-[40vh] w-full lg:px-[6rem] bg-gray-50 lg:py-[6rem] px-[1.2rem] py-[4rem] dark:bg-slate-800 dark:text-white'>
        <div className="container mx-auto w-full">
            <h1 className="flex items-center mb-[1.2rem] font-bold">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clipPath="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" strokeLinecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                <span className='ml-[1rem] text-[1.6rem]'></span>TRENDING ON SPACE
            </h1>

            <section className='flex md:flex-row flex-col flex-wrap w-full'>
                {
                    trending && trending.map((trendItem, index) => (

                        <div className="trending-card flex items-start mb-[3rem] md:mr-[4rem] md:w-[20.4rem] w-full" key={ index }>
                            <span className='text-[2rem] font-bold text-gray-300 dark:text-slate-500'>0{ index + 1 }</span>
                            <div className="trend-card ml-[1.2rem]">
                                <Link to={`/userDetails/${trendItem.author.uid}/`}>                            
                                    <div className="author flex items-center mb-[.5rem]">
                                        {trendItem.author.img ?  <img src={ trendItem.author.img} alt={ trendItem.id}  className=" h-[1.55rem] w-[1.55rem] rounded-full object-cover"/> : <p className='bg-red-800 h-[1.55rem] w-[1.55rem] rounded-full text-[.95rem] flex items-center justify-center font-semibold text-white'> { trendItem.author.name[0] }</p>}
                                        <p className='author-name ml-[0.2rem] text-[.9rem] mr-[.2rem]'>{ trendItem.author.name }</p>
                                    </div>
                                </Link>
                                <Link to={`/details/${trendItem.id}`}>
                                    <div className="title mb-[1rem]">
                                        <h1 className="md:text-2xl text-[1.2rem] font-bold">{ trendItem.title }</h1>
                                    </div>
                                </Link>
                                <div className=" w-full">
                                    {/* <p className="blog-date text-[.8rem]">{ moment(trendItem.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p> */}
                                    <p className="read-time text-[.8rem]">
                                        {Math.ceil(trendItem.blog.trim().split(/\s+/).length / 200)} min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    </div>
  )
}

export default Trending