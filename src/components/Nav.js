import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLogin } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { GrLogin } from 'react-icons/gr';

const Nav = ({toggleTheme, darkTheme}) => {

    const isLoggedIn = true;

    const[ navToggle, setNavToggle] = useState(false);



  return (
    <div className="w-full dark:bg-slate-900 bg-slate-200 dark:text-white flex justify-between items-center md:px-24 px-[1rem] fixed top-0 z-50 h-[4.5rem] border-solid border-b border-gray-300">
        <div className="nav-title md:text-3xl text-[1.3rem] font-bold font-serif">
            <Link to='/' onClick={() => setNavToggle(false)}>ECONOTES.</Link>
        </div>
        <div className="desktop-icons hidden md:flex items-center">

            <nav>
                {
                isLoggedIn ? 
                <ul className='flex items-center gap-[2rem] mr-[3rem] text-[1.1rem]'>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/newBlog">Write</Link></li>
                    <li><Link to="/list" title='Reading List'>List</Link></li>
                </ul>
            
            : 
            null
                }
            </nav>

            <div>
                {isLoggedIn ? <Link to="/dashboard"><FaUserAlt title='Login'/></Link> : <Link to="/login"><button className="bg-black text-white rounded-[30px] w-[8rem] h-[2.4rem] dark:bg-white dark:text-black">Get Started</button></Link>}
            </div>

            <div className="theme-toggle ml-4 cursor-pointer text-lg" onClick={toggleTheme}>
                { darkTheme ? <HiSun /> : <BsFillMoonFill />}
            </div>
        </div>
        <div className="mobile-icons md:hidden flex items-center">
            <div>
                {
                    isLoggedIn ? <Link to="/dashboard"><FaUserAlt /></Link> : <Link to="/login"><button className="bg-black text-white rounded-[30px] text-[1rem] w-[8rem] h-[2rem] dark:bg-white dark:text-black">Get Started</button></Link>
                }
            </div>
            {
                isLoggedIn && 
                <div className="hamburger d-block h-[2rem] w-[2rem] flex flex-col justify-center gap-[0.35rem] ml-[1rem] cursor-pointer" onClick={() => setNavToggle(!navToggle)}>
                    <span className="burger w-[100%] bg-black dark:bg-white h-[.15rem] rounded-[23px]"></span>
                    <span className="burger w-[100%] bg-black dark:bg-white h-[.15rem] rounded-[23px]"></span>
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
    </div>
  )
}

export default Nav