import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { useForm } from 'react-hook-form';


const NewBlog = () => {

    // write your posts here
    const user = {
        name: 'Billie Will',
    }

    const [ open, setOpen ] = useState(false);
    const [ blogData, setBlogData ] = useState({})

    const openInput = (e) => {

        e.preventDefault();
        setOpen(true);

    }

    const titleRef = useRef();
    const bodyRef = useRef();

    const [ newBlog, setNewBlog ] = useState(false);

    const postBlog = () => {


        console.log({
            title:titleRef.current.value,
            body: bodyRef.current.value 
        })

        

    }

    const updatePostBtn = (e) => {


        if(e.target.value){
            
            setNewBlog(true);

        }


    }

    const { register, getValues } = useForm();

    
  return (
    <div className='new-blog min-h-[100vh] dark:bg-slate-800 bg-white dark:text-white'>
        <nav className='flex justify-between items-center md:px-[12rem] px-[2rem] h-[4.5rem]'>
            <div className="title">
                <Link to='/'>
                    <h1 className='font-serif text-[1.5rem]'>ECONOTES</h1>
                </Link>
            </div>
            <div className="newblog-controls flex items-center gap-[1rem]">
                <button className='bg-green-800 hover:bg-green-900 h-[2rem] w-[6rem] text-white font-semibold rounded-[20px] disabled:opacity-[.6]' disabled={ !newBlog } onClick={ postBlog }>Publish</button>
                <div className="user">
                    {user.img ? <img src={user.img} alt="user" /> : <p className='bg-red-800 w-[2.2rem] h-[2.2rem] rounded-[100%] text-[1.3rem] flex items-center justify-center font-semibold text-white'> { user.name.charAt(0) }</p>}
                </div>
            </div>
        </nav>

        <div className="blog-post-body md:px-[22rem] mt-[1.5rem] px-[2.3rem]">
            <form onSubmit={ openInput }>
                <div className="form-group mb-[.75rem]">
                    <input type="text" name='title' onChange = { updatePostBtn } autoFocus  ref={ titleRef } className='w-[100%] dark:bg-slate-800 h-[4.5rem] placeholder:font-serif md:placeholder:text-[2.6rem] placeholder:text-[1.8rem] md:text-[2.6rem] text-[1.8rem] outline-none border-none font-serif text-gray-700 dark:text-white' placeholder='Title' required/>
                </div>

                {
                    open &&

                    <div className="form-group">
                        <div className="container flex items-center relative">
                            <BsPlusCircle className="md:text-[2rem] text-[1.4rem] absolute top-[0%] md:top-[0%] left-[-7%] font-extralight text-gray-800 cursor-pointer dark:text-white" title="Upload Image"/><textarea type="text" ref={bodyRef} name='body' className='resize-none dark:text-gray-300 dark:bg-slate-800 w-[100%] min-h-[70vh] overflow-hidden overflow-y-auto text-gray-700 placeholder:font-serif md:placeholder:text-[1.29rem] placeholder:text-[1.1rem] md:text-[1.29rem] text-[1.1rem] outline-none border-none font-serif' placeholder='Tell your story...'></textarea>
                        </div>
                    </div>
                }
            </form>
        </div>
    </div>
  )
}

export default NewBlog