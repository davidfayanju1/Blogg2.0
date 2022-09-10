import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {

  const inputRef = useRef(null);

  const [toggleField, setToggleField] = useState(false);

  const openInput = () => {

    setToggleField(true);
    inputRef.current.focus();

    console.log(inputRef.current.focus())

  }

  return (
    <div className='mt-[4.5rem] dark:bg-slate-800 dark:text-white md:px-[9.6rem] py-[8rem] px-[1.2rem] flex items-start justify-between'>
      <aside className='side-nav md:block hidden h-[100vh] w-[28%]'>        
        <h1 className='mb-[1rem] font-bold text-[1.35rem]'>Settings</h1>
        {/* About you, Email, Security */}
        <nav className='flex flex-col'>
          <a href="#aboutYou" className='mb-[1.2rem] text-[1.1rem] text-gray-700 dark:text-white'>About you</a>
          <a href="#emailSettings" className='mb-[1.2rem] text-[1.1rem] text-gray-700 dark:text-white'>Email Settings</a>
          <a href="#security" className='text-[1.1rem] text-gray-700 dark:text-white'>Security</a>
        </nav>
      </aside>

      <main className='main-page md:w-[70%] w-[100%]'>
        <section id="aboutYou" className='mb-[3.5rem]'>
          
          {/* name */}
          <div className="bio-card mb-[4rem]">
            <div className="title-container mb-[1.5rem] after:block after:w-[100%] after:h-[.01rem] after:bg-gray-200 dark:after:bg-white">
              <h1 className='font-bold md:text-[1.6rem] mb-[.6rem]'>About you</h1>
            </div>
            <div className="name flex w-[100%] justify-between">
              <div className="name-container w-[70%]">
                <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Name</h1>
                <input className=" mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" ref={ inputRef } disabled={ !toggleField }/>
                <p className='text-[.95rem] w-full'>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
              </div>
              <div className="edit-btn-container">
                  {
                    !toggleField ? 
                    <button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                    :
                    <div className="flex gap-[.5rem]">
                      <button className="text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                      <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleField(false)}>Cancel</button>
                    </div>
                  }
              </div>
            </div>
          </div>
          
          {/* Short bio */}
          
          <div className="short-bio mb-[4rem] flex w-[100%] justify-between">
            <div className="bio-container w-[70%]">
              <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Short bio</h1>
              <input className=" mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" ref={ inputRef } disabled={ !toggleField }/>
              <p className='text-[.95rem] w-full'>Your short bio appears on your Profile and next to your stories. Max 160 characters.</p>
            </div>
            <div className="edit-btn-container">
                {
                  !toggleField ? 
                  <button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                  :
                  <div className="flex gap-[.5rem]">
                    <button className="text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                    <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleField(false)}>Cancel</button>
                  </div>
                }
            </div>
          </div>
          
          {/* Photo */}
          
          <div className="mb-[4rem] photo flex w-[100%] justify-between">
            <div className="photo-container w-[70%]">
              <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Photo</h1>
              <p className='mb-[1rem] text-[.95rem] w-full'>Your photo appears on your Profile page and with your stories across Space.</p>
              <p className='text-[.95rem] w-full'>Recommended size: Square, at least 1000 pixels per side. File type: JPG or PNG</p>                
            </div>
            <div className="edit-btn-container">
                {
                  !toggleField ? 
                  <button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                  :
                  <div className="flex gap-[.5rem]">
                    <button className="text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                    <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleField(false)}>Cancel</button>
                  </div>
                }
            </div>
          </div>
          
          
          {/* About page */}
          
          <div className=" mb-[4rem] flex w-[100%] justify-between">
            <div className="about-container w-[70%]">
              <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>About page</h1>
              <p className='text-[.95rem] w-full'>This page should tell your readers more about you and explain the benefits of reading your work.</p>
            </div>
            <div className="edit-btn-container">
                {
                  !toggleField ? 
                  <button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                  :
                  <div className="flex gap-[.5rem]">
                    <button className="text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                    <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleField(false)}>Cancel</button>
                  </div>
                }
            </div>
          </div>
          

          {/* username */}
          
          <div className="user-name flex w-[100%] justify-between">
            <div className="name-container w-[70%]">
              <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Username</h1>
              <input className=" mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" ref={ inputRef } disabled={ !toggleField }/>
            </div>
            <div className="edit-btn-container">
                {
                  !toggleField ? 
                  <button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                  :
                  <div className="flex gap-[.5rem]">
                    <button className="text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                    <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleField(false)}>Cancel</button>
                  </div>
                }
            </div>
          </div>
        </section>

        <section id="emailSettings" className='mb-[3.5rem]'>
          <div className="bio-card">
            <div className="title-container mb-[1.5rem] after:block after:w-[100%] after:h-[.01rem] after:bg-gray-200 dark:after:bg-white">
              <h1 className='font-bold md:text-[1.6rem] mb-[.6rem]'>Email settings</h1>
            </div>
            <div className="name flex w-[100%] justify-between">
              <div className="name-container w-[70%]">
                <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Your email</h1>
                <input className=" mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" ref={ inputRef } disabled={ !toggleField }/>
                <p className='text-[.95rem] w-full'>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
              </div>
              <div className="edit-btn-container">
                {
                  !toggleField ? 
                  <button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit email</button>
                  :
                  <div className="flex gap-[.5rem]">
                    <button className="text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                    <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleField(false)}>Cancel</button>
                  </div>
                }
              </div>
            </div>
          </div>       
        </section>

        <section id="security">
          <h1 className='font-bold text-[1.6rem]'>Security</h1>
           <div className="bio-card">
            <div className=" flex w-[100%] justify-between">
              <div className="name-container w-[70%]">
                <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Delete account</h1>
                <input className=" mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" ref={ inputRef } disabled={ !toggleField }/>
                <p className='text-[.95rem] w-full'>Permanently delete your account.</p>
              </div>
            </div>
          </div>     
        </section>
      </main>
    </div>
  )
}

export default Settings