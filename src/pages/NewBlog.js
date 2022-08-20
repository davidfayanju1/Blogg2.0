import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';


const NewBlog = () => {

    // write your posts here
    const user = {
        name: 'Billie Will',
    }
    
  return (
    <div className='new-blog'>
        <nav className='flex justify-between items-center md:px-[6.2rem] px-[2rem] h-[4.5rem]'>
            <div className="title">
                <Link to='/'>
                    <h1 className='font-serif text-[1.5rem]'>ECONOTES</h1>
                </Link>
            </div>
            <div className="newblog-controls flex items-center gap-[1rem]">
                <button className='bg-green-800 hover:bg-green-900 h-[2rem] w-[6rem] text-white font-semibold rounded-[20px]'>Publish</button>
                <div className="user">
                    {user.img ? <img src={user.img} alt="user" /> : <p className='bg-red-800 w-[2.2rem] h-[2.2rem] rounded-[100%] text-[1.3rem] flex items-center justify-center font-semibold text-white'> { user.name.charAt(0) }</p>}
                </div>
            </div>
        </nav>

        <div className="blog-post-body md:px-[12rem] mt-[2rem] px-[4rem]">
            <form>
                <div className="form-group mb-[2rem]">
                    <label htmlFor="title" className='font-serif md:text-[3.1rem] text-[2.2rem] opacity-[.3] mb-[2rem]'>Title</label>
                    <input type="text"  className='w-[100%] h-[3rem] placeholder:font-serif placeholder:text-[1.5rem] text-[1.5rem] outline-none border-none font-serif' placeholder='Tell your story...'/>
                </div>

                <div className="form-group mb-[2rem]">
                    <label htmlFor="title" className='font-serif md:text-[3.1rem] text-[2.2rem] opacity-[.3] mb-[2rem]'>Body</label>
                    <div className="container flex items-center">
                        <BsPlusCircle className=" text-[2rem] font-extralight text-gray-500 cursor-pointer" /><input type="text"  className='w-[100%] h-[3rem] placeholder:font-serif placeholder:text-[1.5rem] text-[1.5rem] outline-none border-none font-serif' placeholder='Tell your story...'/>
                    </div>
                </div>

                <div className="form-group mb-[2rem]">
                    <label htmlFor="title" className='font-serif md:text-[3.1rem] text-[2.2rem] opacity-[.3] mb-[2rem]'>Title</label>
                    <input type="text"  className='w-[100%] h-[3rem] placeholder:font-serif placeholder:text-[1.5rem] text-[1.5rem] outline-none border-none font-serif' placeholder='Tell your story...'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewBlog