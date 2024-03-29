import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLogin } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { GrLogin } from 'react-icons/gr';
import { useAuth } from '../authContext';
import ReactTooltip from 'react-tooltip';

const Nav = ({toggleTheme, darkTheme}) => {

    const {currentUser, fetchUserData, userData, logoutUser } = useAuth();
    const[ navToggle, setNavToggle] = useState(false);
    
    useEffect(() => {

       currentUser &&  fetchUserData();
        
    }, [currentUser]);
    

    const[popUp, setPopUp] = useState(false);

    const togglePopUp = () => {

        setPopUp(!popUp);
    }

    const signOut = () => {

        logoutUser();
        setPopUp(false);

    }
       
  return (
    <div className="w-full dark:bg-slate-900 bg-gray-50 dark:text-white flex justify-between items-center md:px-24 px-[1rem] fixed top-0 z-50 h-[4.5rem] border-solid border-b border-gray-300">
        <div className="nav-title md:text-3xl text-[1.3rem] font-bold font-serif">
            <Link to='/' onClick={() => setNavToggle(false)}>SPACE.</Link>
        </div>
        <div className="desktop-icons hidden md:flex items-center">

            <nav>
                {
                    currentUser ? 
                    <ul className='flex items-center gap-[2rem] mr-[3rem] text-[1.1rem]'>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/newBlog" title='Write'>Write</Link></li>
                        <li><Link to="/list" title='Reading List'>List</Link></li>
                        <li><Link to='/stories' title='Your Story'></Link></li>
                    </ul>
            
                    : 
                    null
                }
            </nav>

            <div className='desktop'>
                {currentUser ? 
                <>
                   
                    <>
                       {
                            userData ?
                            <>
                                {
                                    userData.img ? 
                                    <img onClick={ togglePopUp } src={userData.img} alt="user" className='w-[2.1rem] h-[2rem] rounded-[100%] object-cover'/>
                                    :
                                    <p onClick={ togglePopUp } className='cursor-pointer bg-red-800 w-[2rem] h-[2rem] rounded-[100%] text-[1.3rem] flex items-center justify-center font-semibold text-gray-200'>{ userData.name[0] }</p>
                                }
                            </>

                            :
                            <p className='text-[1.3rem]'>--</p>
                        }
                    </> 
                </>
                : 
                <Link to="/login"><button className="bg-black text-white rounded-[30px] w-[8rem] h-[2.4rem] dark:bg-white dark:text-black">Get Started</button></Link>}
            </div>

            <div className="theme-toggle ml-4 cursor-pointer text-lg" onClick={toggleTheme}>
                { darkTheme ? <HiSun /> : <BsFillMoonFill />}
            </div>
        </div>
        <div className="mobile-icons md:hidden flex items-center">
            <div>
                {
                    currentUser ? 
                    <>
                       {
                            userData ?
                            <>
                                {
                                    userData.img ? <img onClick={ togglePopUp } src={ userData.img} alt={ userData.id}  className=" h-[1.65rem] w-[1.65rem] rounded-[100%] object-cover"/>
                                    :
                                    <p onClick={ togglePopUp } className='cursor-pointer bg-red-800 w-[2rem] h-[2rem] rounded-[100%] text-[1.3rem]  flex items-center justify-center font-semibold text-gray-200'>{ userData.name[0] }</p>
                                }
                            </>

                            :
                            
                            <p className='text-[1.3rem]'>--</p>
                        }
                    </> 
                     : 
                     <Link to="/login"><button className="bg-black text-white dark:text-black rounded-[30px] text-[1rem] w-[8rem] h-[2rem] dark:bg-white dark:text-bla   ck">Get Started</button></Link>
                }
            </div>
            {
                currentUser && 
                <div className="hamburger d-block h-[2rem] w-[2rem] flex flex-col justify-center gap-[0.35rem] ml-[1rem] cursor-pointer" onClick={() => setNavToggle(!navToggle)}>
                    <span className="burger w-[100%] bg-black dark:bg-white h-[.15rem] rounded-[23px]"></span>
                    <span className="burger w-[100%] bg-black dark:bg-white h-[.15rem] rounded-[23px] my-[.35rem]"></span>
                    <span className="burger w-[100%] bg-black dark:bg-white h-[.15rem] rounded-[23px]"></span>
                </div>
            }
        </div>

        {
        navToggle && 
        <nav className="mobile-nav md:hidden bg-gray-400 dark:bg-slate-600 absolute top-[100%] left-[0] w-[100%] px-[1rem] py-[2rem] min-h-[16rem] text-[1.2rem] font-semibold">     
            <ul>
                <li className='mb-[.85rem]' onClick={() => setNavToggle(false)}><Link to="/">Home</Link></li>
                <li className='mb-[.85rem]' onClick={() => setNavToggle(false)}><Link to="/newBlog">Write</Link></li>
                <li className='mb-[1.5rem] ' onClick={() => setNavToggle(false)}><Link to="/list">List</Link></li>
                <li className="theme-toggle w-[100%] border-t-[.1rem] border-gray-500 dark:border-gray-700 pt-[.75rem] cursor-pointer" onClick={toggleTheme}>
                    { darkTheme ? <HiSun /> : <BsFillMoonFill />}
                </li>
            </ul>
        </nav>
        }

        {
            popUp &&
            
            <div className="nav-popup dark:bg-slate-700 py-[1.5rem] md:py-[.8rem] md:rounded-[6px] absolute md:top-[5rem] top-[4.5rem] md:right-[4.5%] right-[0%] bg-white md:min-h-[13rem] md:w-[15rem] min-h-[100vh] w-full">
                <nav>
                    <div className='after:h-[.01rem] after:block after:w-[100%] after:bg-gray-200'>
                        <p className='mb-[.8rem] md:mb-[0rem] font-bold px-[1.4rem] md:px-[.5rem] text-[1.1rem] md:text-[1rem]'>{ userData.email }</p>
                        <p className='px-[1.4rem] md:px-[.5rem] mb-[.8rem] text-[1.1rem] md:text-[1rem]'>{ userData.name }</p>
                    </div>
                    <div className='px-[1.4rem] md:px-[.5rem] mt-[1.2rem]'>
                        <Link onClick={ () => setPopUp(false) } to={`/userDetails/${ userData.uid }/`}><button className='py-[.4rem] md:py-[0rem] mb-[.8rem] md:mb-[.5rem] text-[1rem] md:text-[.9rem] w-[100%] block bg-transparent rounded-[10rem] border-black border-[.1rem] dark:border-white'>View Profile</button></Link>
                        <Link to='/settings' onClick={ () => setPopUp(false)} className='text-[1.1rem] md:text-[1rem]'>Settings</Link>
                        <p onClick={ signOut } className='cursor-pointer mt-[1rem] md:mt-[.5rem] text-[1.1rem] md:text-[1rem]'>Sign out</p>
                    </div>
                </nav>
            </div>

        }
    </div>
  )
}

export default Nav