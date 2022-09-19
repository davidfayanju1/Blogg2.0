import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const UserAsideLoader = ({amount}) => {

    const asideLoader = Array(amount).fill();
  
    return asideLoader.map((_, i) =>(
        <div className='aside-loader' key={ i }>
            <SkeletonTheme baseColor="#D3D3D3" highlightColor="#ffff">
                <div className="author-card">
                   <Skeleton className='author-img rounded-full w-[5.5rem] h-[5.6rem] mb-[.85rem] '/> 
                   <Skeleton className="author-name w-[6rem]" />
                   <Skeleton className='post-number w-[4rem] mb-[2rem]'/>
                   <Skeleton className='author-bio w-[12rem]'/>
                </div>
            </SkeletonTheme>
        </div>

  ))
}

export default UserAsideLoader