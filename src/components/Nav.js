import React from 'react';
import { Link } from 'react-router-dom';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLogin } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { GrLogin } from 'react-icons/gr';

const Nav = ({toggleTheme, darkTheme}) => {

    const isLoggedIn = true;

  return (
    <div className="w-full dark:bg-slate-900 bg-slate-100 dark:text-white flex justify-between items-center md:py-4 md:px-24 fixed top-0 z-50">
        <div className="nav-title text-3xl font-bold">
            <Link to='/'>BLOGG.</Link>
        </div>
        <nav className="desktop-nav md:block hidden">
            <ul className='flex items-center'>
                <li className="ml-7 text-lg"><Link to='/'>Home</Link></li>
                <li className="ml-7 text-lg"><Link to='/'>Blog</Link></li>
                <li className="ml-7 text-lg"><Link to='/'>About</Link></li>
                <li className='ml-7 text-lg'><Link to='/'>Contact</Link></li>
            </ul>
        </nav>

        <div className="desktop-icons hidden md:flex items-center">
            <div>
                {
                    isLoggedIn ? <Link to="/dashboard"><FaUserAlt/></Link> : <Link to="/login"><MdLogin className='text-2xl'/></Link>
                }
            </div>

            <div className="theme-toggle ml-4 cursor-pointer text-lg" onClick={toggleTheme}>
                { darkTheme ? <HiSun /> : <BsFillMoonFill />}
            </div>
        </div>
        <div className="mobile-icons md:hidden flex">
            <div className='text-3xl'>
                {
                    isLoggedIn ? <Link to="/dashboard"><FaUserAlt /></Link> : <Link to="/login"><MdLogin /></Link>
                }
            </div>
            <div className="hamburger d-block">
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>
            </div>
        </div>

        <nav className="mobile-nav md:hidden bg-red-500">     
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li>
                    <div className="theme-toggle" onClick={toggleTheme}>
                        { darkTheme ? <HiSun /> : <BsFillMoonFill />}
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav