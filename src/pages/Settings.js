import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const Settings = ({toggleTheme, darkTheme}) => {

  const nameInputRef = useRef(null);
  const bioRef = useRef(null)
  const inputRef = useRef(null);
  const mailRef = useRef(null);
  const usernameRef = useRef(null);

  const navigate = useNavigate();

  const {updateMail, fetchUserData, userData, deleteUserAcct, currentUser, updateName, updateBio, updateUsername, updateUserImage } = useAuth()

  const [toggleField, setToggleField] = useState(false);
  const [ togglePage, setTogglePage] = useState(false);
  const [toggleFieldOne, setToggleFieldOne] = useState(false);
  const [toggleFieldTwo, setToggleFieldTwo] = useState(false);
  const [toggleEmailField, setToggleEmailField] = useState(false);
  const [toggleUsernameField, setToggleUsernameField] = useState(false);
  const [ toggleImageField, setToggleImageField] = useState(false);

  useEffect(() => {

    fetchUserData();

    
  }, []);
  
  const openInput = () => {

    console.log('ok');
  }

  const openInputOne = () => {

    setToggleFieldOne(true);
    nameInputRef.current.focus();

  }

  const openInputTwo = () => {

    setToggleFieldTwo(true);
    bioRef.current.focus();

  }

  const openEmailInput = () => {
    setToggleEmailField(true);
    mailRef.current.focus();
  }

  const openUsernameInput = () => {
    setToggleUsernameField(true);
    usernameRef.current.focus();
  }

  const openImageField = () => {
    setToggleImageField(true);
  }

  const changeName = () => {

    updateName(nameInputRef.current.value);
    nameInputRef.current.value = ''
    setToggleFieldOne(false);
    fetchUserData();

  }

  const changeBio = () => {
    updateBio(bioRef.current.value);
    bioRef.current.value = ''
    setToggleFieldTwo(false);
    fetchUserData();
  }

  const changeMail = () => {
    updateMail(mailRef.current.value);
    mailRef.current.value = ''
    setToggleEmailField(false);
    fetchUserData();
  }

  const changeUsername = () => {
    updateUsername(usernameRef.current.value);
    usernameRef.current.value = ''
    setToggleUsernameField(false);
    fetchUserData();
  }

  const [ file, setFile ] = useState(null);

  const [loading, setLoading] = useState(false);

  const uploadUserPic = (e) => {

    setLoading(true)
    const blogImage = e.target.files[0]
    const storage = getStorage()
    const storageRef = ref(storage, `userImage/${blogImage.name}`)

    uploadBytes(storageRef, blogImage)
    .then((snapshot) => {
        getDownloadURL(storageRef)
        .then((url) => {
            setFile(url)
            setLoading(false);
          })
          .catch((err)=> {
            console.log(err)
        })

    }).catch((err) => {
        console.log(err)
    })
  }
  
  const changeDisplayPicture = () => {

    updateUserImage(file)
    fetchUserData();
    setToggleImageField(false);

  }

  const deleteUser = () => {

    deleteUserAcct();
    navigate('/');

  }


  return (
    <div className='dark:bg-slate-800 dark:text-white'>
      <nav className='flex justify-between items-center md:px-[8rem] px-[1.2rem] h-[4.5rem]'>
        <div className="title">
          <Link to='/'>
              <h1 className='font-serif text-[1.5rem]'>SPACE.</h1>
          </Link>
        </div>
        <div className="newblog-controls flex items-center">
          <div className="user cursor-pointer mr-[1rem]">
              {userData && userData.img ? <img src={userData.img} alt="user" className='w-[2.1rem] h-[2rem] rounded-[100%]' /> : userData && <p className='bg-red-800 w-[2.1rem] h-[2rem] rounded-[100%] text-[1.3rem] flex items-center justify-center font-semibold text-white'> { userData.name[0] }</p>}
          </div>
          <div className="theme-toggle cursor-pointer text-lg" onClick={toggleTheme}>
              {darkTheme ? <HiSun /> : <BsFillMoonFill />}
          </div>
        </div>
      </nav>
      
      <div className='flex items-start justify-between md:px-[8.5rem] py-[4.5rem] px-[1.2rem]'>

        <aside className='sticky top-[3rem] bottom-[0rem] side-nav md:block hidden h-[100vh] w-[28%]'>        
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
                <h1 className='font-bold md:text-[1.6rem] text-[1.5rem] mb-[.6rem]'>About you</h1>
              </div>
              <div className="name flex w-[100%] justify-between md:flex-row flex-col">
                <div className="name-container md:w-[70%] w-[100%] md:mb-[0] mb-[1.2rem]">
                  <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Name</h1>
                  <input className="rounded-none mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full bg-transparent" maxLength={ 40 } placeholder={userData && userData.name} type="text" ref={ nameInputRef } disabled={ !toggleFieldOne }/>
                  <p className='text-[.95rem] w-full'>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                </div>
                <div className="edit-btn-container">
                    {
                      !toggleFieldOne ? 
                      <button onClick={ openInputOne } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                      :
                      <div className="flex">
                        <button onClick={ changeName } className="mr-[.5rem] text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                        <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleFieldOne(false)}>Cancel</button>
                      </div>
                    }
                </div>
              </div>
            </div>
            
            {/* Short bio */}
            
            <div className="short-bio mb-[4rem] flex w-[100%] justify-between md:flex-row flex-col">
              <div className="bio-container md:w-[70%] mb-[1.2rem] md:mb-[0] w-[100%]">
                <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Short bio</h1>
                <input ref={ bioRef } placeholder={ userData && userData.bio } className="rounded-none mb-[.8rem] bg-transparent text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" disabled={ !toggleFieldTwo }/>
                <p className='text-[.95rem] w-full'>Your short bio appears on your Profile and next to your stories. Max 160 characters.</p>
              </div>
              <div className="edit-btn-container">
                  {
                    !toggleFieldTwo ? 
                    <button onClick={ openInputTwo } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                    :
                    <div className="flex gap-[.5rem]">
                      <button onClick={ changeBio } className="mr-[.5rem] text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                      <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleFieldTwo(false)}>Cancel</button>
                    </div>
                  }
              </div>
            </div>
            
            {/* Photo */}
            
            <div className="mb-[4rem] photo flex w-[100%] justify-between md:flex-row flex-col">
              <div className="inner-flex flex items-center justify-between">
                <div className="photo-container w-[70%]">
                  <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Photo</h1>
                  <p className='mb-[1rem] text-[.95rem] w-full'>Your photo appears on your Profile page and with your stories across Space.</p>
                  <p className='text-[.95rem] w-full md:mb-0 mb-[1.2rem]'>Recommended size: Square, at least 1000 pixels per side. File type: JPG or PNG</p>                
                </div>
                <div onClick={ openImageField } className="user cursor-pointer w-[5rem] h-[5rem] rounded-[100%] relative">
                  {
                    toggleImageField ?
                    <label htmlFor='userImage' className="upload-image-icon z-10 absolute top-0 left-0 bg-black h-full w-full opacity-[.5] rounded-full flex items-center justify-center">                      
                      <input type="file" id="userImage"  className='hidden' onChange={ uploadUserPic }/>
                      {loading ? 
                      <p className='font-[1rem] text-gray-600'>...</p>
                      :  
                      <svg width="65" height="65" className='z-20 fill-white'><g><path d="M10.61 44.486V23.418c0-2.798 2.198-4.757 5.052-4.757h6.405c1.142-1.915 2.123-5.161 3.055-5.138L40.28 13.5c.79 0 1.971 3.4 3.073 5.14 0 .2 6.51 0 6.51 0 2.856 0 5.136 1.965 5.136 4.757V44.47c-.006 2.803-2.28 4.997-5.137 4.997h-34.2c-2.854.018-5.052-2.184-5.052-4.981zm5.674-23.261c-1.635 0-3.063 1.406-3.063 3.016v19.764c0 1.607 1.428 2.947 3.063 2.947H49.4c1.632 0 2.987-1.355 2.987-2.957v-19.76c0-1.609-1.357-3.016-2.987-3.016h-7.898c-.627-1.625-1.909-4.937-2.28-5.148 0 0-13.19.018-13.055 0-.554.276-2.272 5.143-2.272 5.143l-7.611.01z"></path><path d="M32.653 41.727c-5.06 0-9.108-3.986-9.108-8.975 0-4.98 4.047-8.966 9.108-8.966 5.057 0 9.107 3.985 9.107 8.969 0 4.988-4.047 8.974-9.107 8.974v-.002zm0-15.635c-3.674 0-6.763 3.042-6.763 6.66 0 3.62 3.089 6.668 6.763 6.668 3.673 0 6.762-3.047 6.762-6.665 0-3.616-3.088-6.665-6.762-6.665v.002z"></path></g></svg>
                    }
                    </label>
                    : null
                  }
                  {userData && userData.img ? <img src={userData.img} alt="user" className='rounded-[100%] w-full h-full object-cover' /> : userData && <p className='rounded-[100%] bg-red-800 w-full h-full text-[3rem] flex items-center justify-center font-semibold text-white'> { userData.name[0] }</p>}
                </div>
              </div>
              <div className="edit-btn-container">
                  {
                    !toggleImageField ? 
                    <button onClick={ openImageField } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                    :
                    <div className="flex gap-[.5rem]">
                      <button onClick={ changeDisplayPicture } className="mr-[.5rem] text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                      <button onClick={ () => setToggleImageField(false) } className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Cancel</button>
                    </div>
                  }
              </div>
            </div>
            
            
            {/* About page */}
            
            <div className=" mb-[4rem] flex w-full justify-between md:flex-row flex-col">
              <div className="about-container w-full md:w-[70%] md:mb-[0] mb-[1rem]">
                <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>About page</h1>
                <p className='text-[.95rem] w-full'>This page should tell your readers more about you and explain the benefits of reading your work.</p>
              </div>
              <div className="edit-btn-container">
                <Link to={`/userDetails/${currentUser.uid}/about`}><button onClick={ openInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit your about page</button></Link>
              </div>
            </div>
            

            {/* username */}
            
            <div className="user-name flex w-[100%] justify-between md:flex-row flex-col">
              <div className="name-container md:w-[70%] w-[100%]">
                <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Username</h1>
                <input placeholder={ userData && userData.username } className="rounded-none bg-transparent mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="text" ref={ usernameRef } disabled={ !toggleUsernameField }/>
              </div>
              <div className="edit-btn-container">
                  {
                    !toggleUsernameField ? 
                    <button onClick={ openUsernameInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit</button>
                    :
                    <div className="flex gap-[.5rem]">
                      <button onClick={ changeUsername } className="mr-[.5rem] text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                      <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleUsernameField(false)}>Cancel</button>
                    </div>
                  }
              </div>
            </div>
          </section>


          {/* email  */}
          <section id="emailSettings" className='mb-[3.5rem]'>
            <div className="bio-card">
              <div className="title-container mb-[1.5rem] after:block after:w-[100%] after:h-[.01rem] after:bg-gray-200 dark:after:bg-white">
                <h1 className='font-bold md:text-[1.6rem] text-[1.5rem] mb-[.6rem]'>Email settings</h1>
              </div>
              <div className="name flex w-[100%] justify-between md:flex-row flex-col">
                <div className="name-container md:w-[70%] w-100%">
                  <h1 className='font-semibold text-[1.2rem] mb-[.2rem]'>Your email</h1>
                  <input placeholder={ userData ? userData.email : 'coming...' } className="rounded-none bg-transparent mb-[.8rem] text-[16px] py-[.4rem] outline-none border-b-[.11rem] border-gray-200 w-full" maxLength={ 40 } type="email" ref={ mailRef } disabled={ !toggleEmailField }/>
                </div>
                <div className="edit-btn-container">
                  {
                    !toggleEmailField ? 
                    <button onClick={ openEmailInput } className="text-[.9rem] bg-transparent text-gray-700 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white">Edit email</button>
                    :
                    <div className="flex gap-[.5rem]">
                      <button onClick={ changeMail } className="mr-[.5rem] text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100">Save</button>
                      <button className="text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white" onClick={ () => setToggleEmailField(false)}>Cancel</button>
                    </div>
                  }
                </div>
              </div>
            </div>       
          </section>


          {/*security  */}
          <section id="security">
            <h1 className='font-bold text-[1.6rem] mb-[1rem]'>Security</h1>
              <div className="name-container w-[70%]">
                <h1 className='font-semibold text-[1.2rem] mb-[.8rem]'>Delete account</h1>
                <p className='text-[.95rem] w-full mb-[1.2rem]'>Permanently delete your account on Space</p>
                <p onClick={() => setTogglePage(true)}  className='hover:text-red-800 text-[.9rem] underline cursor-pointer'>Delete account</p>
              </div>
          </section>

        </main>
      </div>
      <>
        {
          togglePage && 
          <section className="dark:bg-slate-800 p-[2rem] confirmation bg-white fixed top-[0] left-[0] w-full h-full">
            <div className="cancel-page-btn text-right">
              <div className="cancel-icon md:mb-[4rem] mb-[2rem] text-[1.2rem] dark:text-gray-300 text-gray-500  cursor-pointer flex justify-end" onClick={() => setTogglePage(false)}>
                <svg className="svgIcon-use dark:fill-white" width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
              </div>
            </div>

            <div className="confirmation-body mx-auto max-w-[40rem] text-center">
              <h1 className='font-bold text-[1.5rem] mb-[1.6rem]'>Confirm account deletion</h1>
              <p className='text-[.95rem] mb-[2.2rem]'>We’re sorry to see you go. Once your account is deleted, all of your info will be permanently gone, including your profile, stories, publications, notes, and responses.</p>
              <div className="button-flex-container flex items-center justify-between max-w-[20rem] mx-auto">
                <button onClick={ deleteUser } className='mr-[.5rem] text-[.9rem] bg-transparent text-green-700 dark:text-gray-100 rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-green-700 dark:border-gray-100'>Confirm deletion</button>
                <button className='text-[.9rem] bg-transparent text-gray-600 dark:text-gray-100 hover:dark:text-white rounded-[10rem] border-[.1rem] py-[.4rem] px-[1rem] border-gray-400 hover:border-black hover:text-black dark:border-gray-100 hover:dark:border-white' onClick={ () => setTogglePage(false) }>Cancel</button>
              </div>
            </div>

          </section>
        }
      </>
    </div>
  )
}

export default Settings