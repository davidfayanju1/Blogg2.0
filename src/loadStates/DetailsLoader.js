import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const DetailsLoader = () => {
  return (
    <div className="md:px-[7rem] md:py-[4rem] px-[1.2rem] py-[3rem]">
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#ffff">
            <div className="user flex items-center mb-[3rem]">
                <Skeleton className='rounded-full w-[3rem] h-[3rem] mr-[.5rem]'/>
                <div className='user-name-date'>
                    <Skeleton className="w-[4rem] h-[.7rem]" />
                    <Skeleton className="w-[6rem] h-[.7rem]" />
                </div>
            </div>
            <div className="mb-[.8rem] blog-title">
                <Skeleton className='w-[10rem] h-[2rem]' />
            </div>
            <div className="blog-image mb-[2rem]">
                <Skeleton className='w-full h-[40vh]'/>
            </div>
            <div className="blog-text">
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
                <Skeleton className='w-full h-[.8rem]' />
            </div>
        </SkeletonTheme>
    </div>
  )
}

export default DetailsLoader