import React from 'react'
import { useParams } from 'react-router-dom';


function TopicDetails() {

    const { name } = useParams();

  return (
    <div className="mt-[4.5rem] font-serif text-[3rem] dark:bg-slate-900 bg-slate-200 dark:text-white min-h-[100vh] md:px-[6rem]">{ name }</div>
  )
}

export default TopicDetails