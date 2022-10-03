import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../authContext';

const DetailsAbout = () => {

  const [ openInput, setOpenInput ] = useState(false);
  const about = useRef();
  const { fetchUserData, userData, updateUserAbout } = useAuth();
  const [ aboutState, setAboutState ] = useState('')

  useEffect(() => {

    fetchUserData();

  }, []);
  
 

  const updateAbout = () => {

    updateUserAbout(about.current.value);
    fetchUserData();
    setOpenInput(false);    

  }

  return (
    <section className='about-section'>
      <div className="edit-buttons mt-[2rem] flex items-end w-full justify-end">
        {
          !openInput ?

          <button onClick={() => setOpenInput(true)} className='text-green-700 hover:text-black dark:text-white'>Edit</button>
          :
          <div className="flex items-center">
            <button onClick={() => setOpenInput(false) } className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Cancel</button>
            <button onClick={ updateAbout }  className="ml-[.5rem] text-[.9rem] bg-black text-white dark:bg-white dark:text-black rounded-[10rem] py-[.4rem] px-[1rem]">Save</button>
          </div>
        }
      </div>
      <div className="about-you w-full mt-[.6rem]">
        <textarea ref={ about } defaultValue={ userData && userData.about === undefined ? 'Tell us about yourself' : userData && userData.about } className="w-full bg-transparent font-serif"></textarea>
      </div>
    </section>
  )
}

export default DetailsAbout