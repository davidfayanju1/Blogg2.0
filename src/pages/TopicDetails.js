import React from 'react'
import { useParams } from 'react-router-dom';
import { ImPriceTag } from 'react-icons/im';


function TopicDetails() {

    const { name } = useParams();

  return (
    <div className="mt-[4.5rem] font-bold text-[3rem] dark:bg-slate-900 bg-slate-200 dark:text-white min-h-[100vh] md:px-[6rem]">
      
      <main className="main-details">
        <div className="main-title flex items-center">
          <div className="tag-container rounded-full dark:bg-gray-500 bg-gray-300 h-[2.2rem] w-[2.2rem] text-xl flex items-center justify-center mr-3"><ImPriceTag /></div>
          <h1>{ name }</h1>
        </div>
      </main>
    </div>
  )
}

export default TopicDetails