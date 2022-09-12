import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authContext';

const UserAside = ({id, user }) => {

  const { userData, fetchAllUsers, users, blogItems } = useAuth();
  const [ blogAuthor, setBlogAuthor ] = useState([]);
  const [ postNumber, setPostNumber ] = useState(0);
  const newArr = users.filter((mainUser) => mainUser.data().uid === id)
  
  useEffect(() => {
    
    fetchAllUsers();
    
  }, [])
  
  useEffect(() => {

    setBlogAuthor(newArr);

  }, [users]);

  useEffect(() => {

    const pageBlog = blogItems.filter((blog) => blog.uid === id)
    setPostNumber(pageBlog.length);

  }, [blogItems]);
  
  
  return (
    <div className='dark:text-white md:sticky top-[9rem] md:px-[2rem]'>
      {
        blogAuthor && blogAuthor.map((author) => (

          <div className="author-card" key={id}>
            <Link to={`/userDetails/${ id }`}>
              {!author.data().img ? <p className='bg-red-800 w-[3rem] h-[3rem] rounded-[100%] text-[1.8rem] flex items-center justify-center font-semibold text-gray-200'>{ author.data().name[0] }</p> : <img src='' alt={ author.data().name }  className=" h-[5.5rem] w-[5.6rem] rounded-[100%] mb-[.85rem] object-cover"/> }
              <p className='author_bio font-bold text-[1.23rem]'>{ author.data().name }</p>
            </Link>
            <p className='post_number text-[1.1rem] text-gray-600 dark:text-gray-300 mb-[1rem]'>{ postNumber > 1 ? `${postNumber} Posts` : `${postNumber} Post` }</p>
            <p className="bio text-gray-600 dark:text-gray-300 mb-[1.2rem]">{ author.data().bio }</p>

            {
              author.data().uid === userData.uid ?

              <Link to='/settings' className='text-green-800 dark:text-gray-300'>Edit profile</Link>
              : 
              null
            }
          </div>
        ))
      }
    </div>
  )
}

export default UserAside