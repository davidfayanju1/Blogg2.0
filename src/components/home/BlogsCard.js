import React, { useState, useEffect} from 'react';
import { useAuth } from '../../authContext';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogsCard = ({ blogPost, index }) => {

  const {updateBookmarkList, userData, postLoading, fetchAllPosts, setBlogItems, blogItems, currentUser } = useAuth()

  const [ bookmark, setBookmark] = useState(false);
  const [activeBlog, setActiveBlog ] = useState(null)

  const bookmarkBlog = () => {

    if(!userData.bookmarkedUsers.includes(blogPost.id)){

      userData.bookmarkedUsers.push(blogPost.id);
      userData.bookmark.push(blogPost);
      updateBookmarkList(userData.bookmark, userData.bookmarkedUsers);
      setActiveBlog(blogPost.id)

    }else {

      const index = userData.bookmark.indexOf(blogPost);
      const blogIndex = userData.bookmarkedUsers.indexOf(blogPost.id)
      userData.bookmark.splice(index, 1);
      userData.bookmarkedUsers.splice(blogIndex, 1);
      updateBookmarkList(userData.bookmark, userData.bookmarkedUsers);
      setActiveBlog(null)
        
    }
  
  }


  useEffect(() => {

    if(userData && !userData.bookmarkedUsers.includes(blogPost.id)){
        
        setActiveBlog(null)
        
    }else {
        
        setActiveBlog(blogPost.id)
                
    }

  }, []);

  return (
    <div>
        <div className="blog flex items-top mb-[4rem] justify-between md:min-h-[10rem] h-[8rem]" key={ blogPost.id }>
            <div className={`blog-text ${ blogPost.img === null ? 'w-[100%]' : 'md:w-[65%]'}`}>
                <Link to={`/userDetails/${blogPost.author.uid}/`}>
                <div className="blog-author flex items-center mb-[.7rem]">
                    {blogPost.author.img ?  <img src={ blogPost.author.img} alt={ blogPost.id}  className=" h-[1.65rem] w-[1.65rem] rounded-[100%] object-cover"/> : <p className='bg-red-800 h-[1.65rem] w-[1.65rem] rounded-[100%] text-[1.1rem] flex items-center justify-center font-semibold text-white'> { blogPost.author.name[0] }</p>}
                    <p className='author-name ml-[0.2rem] text-[.9rem] mr-[.2rem]'>{ blogPost.author.name } .</p>
                    {currentUser && <p className="blog-time text-[.85rem]">{ moment(blogPost.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>}
                </div>
                </Link>
                <Link to={`/details/${blogPost.id}`}>
                <div className="blog-body w-[100%] mb-[1.2rem]">
                    <h1 className="blog-title md:text-[1.44rem] text-[1.07rem] font-bold">{ blogPost.title }</h1>
                    <p className="blog-text text-gray-700 dark:text-gray-200 text-[1.05rem] md:line-clamp-2 hidden">{ blogPost.blog }</p>
                </div>
                </Link>
                <div className="blog-date-data flex justify-between items-center">
                <div className={`flex text-gray-700 dark:text-gray-200 text-[0.9rem] ${currentUser && 'flex-row-reverse'} flex-row`}>
                    {!currentUser && <p className="blog-time  mr-[0.6rem] text-[.85rem]">{ moment(blogPost.createdAt.toDate().toString()).format('ll').substring(0, 6)}</p>}                      
                    <p className="read-time mr-[0.6rem] text-[.85rem]">
                    {
                        Math.ceil(blogPost.blog.trim().split(/\s+/).length / 200)
                    } min read
                    </p>
                    
                    <Link to={`/topicDetails/${ blogPost.category }/`}>
                    <div className={`blog-category mr-[0.6rem] text-[.77rem] md:text-[.8rem] bg-gray-300 h-[1.5rem] flex items-center justify-center px-[0.7rem] rounded-[13px] dark:text-gray-800 ${!currentUser && 'hidden'} md:block`}>{ blogPost.category }</div>
                    </Link>
                    
                </div>
                {
                    !currentUser ?
                    <Link to="/login">
                        <svg  width="25" height="25"  className="dark:fill-white"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                    </Link>
                    :
                    <div className="save-icon ml-[2rem]" onClick={ bookmarkBlog }>
                        {
                        blogPost.id === activeBlog ?
                        <svg className='dark:fill-white fill-black' width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z"></path></svg>
                        :
                        <svg  width="25" height="25"  className="dark:fill-white"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path></svg>
                        }
                    </div>
                }
                </div>  
            </div>
            {
                blogPost.img && 

                <div className="blog-image md:w-[30%] md:min-h-[8rem] h-[4rem] w-[5rem]">
                <Link to={`details/${blogPost.id}`}>
                    <img src={ blogPost.img} alt={ blogPost.id} className="object-cover w-[100%] h-[100%]" />
                </Link>
                </div>
            }  
            </div>

        </div>
  )
}

export default BlogsCard