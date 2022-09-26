import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Comments from './Comments';
import { useAuth } from '../../authContext';

const MainArticle = ({ blogItems }) => {

  const[ stuck, setStuck ] = useState(false);

  const { comments, fetchComments, userData, updateApplause, updateBookmarkList } = useAuth();
  
  const [ clapCount, setClapCount ] = useState(blogItems[0].clap)
  const [clapStyle, setClapStyle] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  
  const handleApplause = () => {

    if (!blogItems[0].likedUsers.includes(userData.uid.trim())) {

      setClapStyle(false);

      blogItems[0].likedUsers.push(userData.uid)
      
      updateApplause( ++blogItems[0].clap, blogItems[0].likedUsers, blogItems[0].id)
      setClapCount(blogItems[0].clap);

    } else {

      setClapStyle(true);
      updateApplause( ++blogItems[0].clap, blogItems[0].likedUsers, blogItems[0].id)
      setClapCount(blogItems[0].clap);

    }

  }

  const bookmarkBlog = () => {

    if(!userData.bookmarkedUsers.includes(blogItems[0].id)){
      setBookMark(true);
      userData.bookmark.push(blogItems[0]);
      userData.bookmarkedUsers.push(blogItems[0].id);
      updateBookmarkList(userData.bookmark, userData.bookmarkedUsers);

    }else {

      const index = userData.bookmark.indexOf(blogItems[0]);
      const blogIndex = userData.bookmarkedUsers.indexOf(blogItems[0].id)
      userData.bookmark.splice(index, 1);
      userData.bookmarkedUsers.splice(blogIndex, 1);
      updateBookmarkList(userData.bookmark, userData.bookmarkedUsers);
      setBookMark(false);

    }

  }

  useEffect(() => {

    if (blogItems[0].likedUsers.includes(userData.uid.trim())) {

      setClapStyle(true);
     
    } else {

      setClapStyle(false);
      
    }

    
  }, [blogItems[0].clap]);


  useEffect(() => {
      
    if(userData.bookmarkedUsers.includes(blogItems[0].id)) {
      
      console.log(userData)
      setBookMark(true);

    }else {
      
      setBookMark(false);
    
    }     

  }, [userData]);
  

  return (
    <main className='main-article min-h-[100vh] md:px-[7rem] md:py-[4rem] px-[1.2rem] py-[3rem] w-[100%] dark:text-white md:border-solid border-r border-gray-300 border-none'>
      {
        blogItems.length === 0 ?
        
        <p className="font-bold">LOADING</p>
        
        :

        blogItems.map((blog) => (
          <div key={ blog.id }>    
            <div className='blog-author-details flex justify-between items-center mb-[1rem]'>
              <div className="flex items-center">
                <Link to={`/userDetails/${ blog.author.uid }/`}>
                  {!blog.author.img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.9rem] flex items-center justify-center font-semibold text-gray-200'> { blog.author.name[0] }</p> : <img src={ blog.author.img } alt={ blog.category} className="w-[3rem] h-[3rem] rounded-[100%]"/> }
                </Link>
                <div className="info ml-[0.8rem]">
                  <p className='text-gray-900 dark:text-gray-200 text-[1.15rem] mb-[.2rem]'>{ blog.author.name }</p>
                  <div className="inner-flex flex items-center text-gray-700 dark:text-gray-200 text-[0.9rem]">
                    <p className='flex items-center'>{ moment(blog.createdAt.toDate().toString()).format('ll').substring(0, 6) }.</p>
                    <p className="read-time ml-[0.4rem]">
                    {
                      Math.ceil(blog.blog.trim().split(/\s+/).length / 200)
                    } min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="userbookmark-icons" onClick={ bookmarkBlog }>
                {
                  bookMark ?
                  <svg className='dark:fill-white fill-black' width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z"></path></svg>
                  :
                  <svg width="25" height="25"  className="dark:fill-white cursor-pointer" title="Save"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                }
              </div>
            </div>
            
            <div className="blog-details mb-[3rem]">
              <h1 className="blog-title font-bold md:text-[2.4rem] text-[1.8rem] mb-[2rem] dark:text-white ">{ blog.title}</h1>
              { blog.img &&  <img src={ blog.img } alt={ blog.title }  className="w-[100%] md:h-[60vh] h-[50vh] object-cover mb-[2rem]"/> }
              <article className='font-serif md:text-[1.25rem] text-[1.1rem] text-gray-800 dark:text-gray-300'>{ blog.blog }</article>    
            </div>

            <div className={`blog-icons-section flex items-center justify-between dark:text-white text-gray-700 text-[1.65rem] sticky bottom-[0] bg-gray-50 dark:bg-slate-900 h-[3.6rem] border-b-[.1rem] border-gray-800 dark:border-white`}>
              <div className={`blog-like-comment flex items-center w-full  ${ stuck ? 'justify-between px-[1rem] gap-[0rem]' : ''}`}>
                <div onClick={ handleApplause } className="clap cursor-pointer flex items-center dark:fill-white mr-[2rem]">
                  {
                    clapStyle ?
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap"><path fill-rule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"></path></svg>
                    :
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap"><path  d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path></svg>  
                  }
                  <p className='text-[.83rem]'>{ clapCount }</p>
                </div>
                <div className="comment flex items-center dark:fill-white cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-label="responses"><path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path></svg>
                  <p className='text-[.83rem]'>{ comments && comments.length }</p>
                </div>
              </div>

              <div>
                <svg width="25" height="25"  className="dark:fill-white cursor-pointer" title="Save"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
              </div>
            </div>
            <div className="comments mt-[4rem]">
              <Comments blog={ blog }/>
            </div>
          </div>
        ))
      }

      
    </main>
  )
}

export default MainArticle