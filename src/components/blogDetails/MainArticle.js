import React from 'react'

const MainArticle = ({ blog }) => {
  return (
    <div className='main-article h-[100%] w-[100%]'>
        <div>
            <div className="blog-author-details">
                <img src={ blog.img } alt={ blog.category} className="w-[4rem] h-[4rem] rounded-[100%]"/>
            </div>

            <div className="blog-details">
                <h1 className="font-bold text-[3.65rem] dark:text-white">{ blog.title}</h1>
            </div>
        </div>

    </div>
  )
}

export default MainArticle