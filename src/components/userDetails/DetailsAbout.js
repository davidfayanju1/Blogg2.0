import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../authContext';

const DetailsAbout = ({ author }) => {

  const [ openInput, setOpenInput ] = useState(false);
  const about = useRef();
  const { fetchUserData, userData, updateUserAbout, currentUser } = useAuth();
  const [ aboutState, setAboutState ] = useState('')

  useEffect(() => {

    fetchUserData();

  }, []);

  const closeAboutInput = () => {

    setOpenInput(false)
    fetchUserData();

  }
  
  const openTextArea = () => {

    setOpenInput(true);
    about.current.focus();
    
  }

  const updateAbout = () => {

    if(about.current.value === ''){
      alert('This Field cannot be left empty')
    } else {
      updateUserAbout(about.current.value);
      fetchUserData();
      setOpenInput(false);    
    }

  }

  
  return (
    <section className='about-section'>
      <div className="edit-buttons mt-[2rem] flex items-end w-full justify-end">
       
       {
        currentUser && currentUser.uid === author.data().uid ?
        
          !openInput ?

          <button onClick={ openTextArea } className='text-green-700 hover:text-black dark:text-white'>Edit</button>
          :
          <div className="flex items-center">
            <button onClick={ closeAboutInput } className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Cancel</button>
            <button onClick={ updateAbout }  className="ml-[.5rem] text-[.9rem] bg-black text-white dark:bg-white dark:text-black rounded-[10rem] py-[.4rem] px-[1rem]">Save</button>
          </div>
        :

        null

       }
      </div>
      <div className="about-you w-full mt-[.6rem]">
        {
        currentUser &&  currentUser.uid === author.data().uid 
         
         ?

         <textarea ref={ about } defaultValue={ author.data().about === undefined ? 'Tell us about yourself' : author.data().about } className="outline-none w-full bg-transparent font-serif min-h-[30vh]" required disabled={ !openInput }></textarea>

         :

         <div className="w-full  min-h-full">
          { author.data().about }
         </div>
        }        
      </div>
    </section>
  )
}

export default DetailsAbout