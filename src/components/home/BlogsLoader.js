import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const BlogsLoader = ({ amount }) => {

    const loadCards = Array(amount).fill(1);

  return loadCards.map ((_, i) => (
    <div className='blog-loader w-[70%] mb-[4rem]' key={ i }>
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#ffff">
            <div className="blog-author mb-[1rem]">
                <Skeleton className="w-[6rem] h-[2rem]" count={ 1 }/>                       
            </div>
            <div className="blog-body">
                <h1><Skeleton className="w-full h-[2rem] md:mb-[1rem]" /></h1>
                <p><Skeleton className="w-full h-[1rem] md:block hidden" /></p>
                <p><Skeleton className="w-full h-[1rem] md:block hidden" /></p>
            </div>
            <div className="blog-date save-icon">
                <p><Skeleton className="w-full h-[1rem]" /></p>
            </div>
        </SkeletonTheme>
    </div>
  ))
}

export default BlogsLoader