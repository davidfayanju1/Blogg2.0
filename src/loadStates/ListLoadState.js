import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import BlogsLoader from '../components/home/BlogsLoader';

const ListLoadState = () => {
  return (
    <div>
      <div className="mb-[4rem]">
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#ffff">
          <div className="user-card flex items-center">
            <Skeleton className='rounded-full w-[3rem] h-[3rem] mr-[.5rem]'/>
            <div>
              <Skeleton className="w-[4rem] h-[.7rem]" />
              <Skeleton className="w-[6rem] h-[.7rem]" />
            </div>
          </div>
        </SkeletonTheme>
      </div>
      <BlogsLoader amount={3} />
    </div>
  )
}

export default ListLoadState