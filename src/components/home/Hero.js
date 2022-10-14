import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

  const fontStyles = ['Arial, sans-serif', 'Gill Sans, sans-serif', 'Optima, sans-serif', 'Palatino, URW Palladio L, serif', 'Times, Times New Roman, serif', 'Andale Mono, monospace', 'FreeMono, monospace', 'Brush Script MT, Brush Script Std, cursive', 'Blippo, fantasy', 'Trattatello, fantasy']
  let index = Math.random() * 10;
  const c = Math.floor(index);

  return (
    <div className='w-full min-h-[40vh] bg-red-[500] mt-[4.5rem] dark:bg-slate-900 dark:text-white bg-gray-50 lg:px-[4.75rem] lg:py-[8rem] px-[1.2rem] py-[6rem] border-b-[.08rem] border-gray-400'>
        <h1 className="md:text-[4rem] text-[3rem] mb-[2rem]" style={{fontFamily: fontStyles[c]}}>Stay Creative.</h1>
        <p className='mb-[1rem] md:text-[1.2rem]'>Write, react, speak and read on people's thoughts and yours as well </p>
        <Link to='/login'><button className="text-[1rem] bg-black text-white dark:bg-white dark:text-black rounded-[10rem] py-[.7rem] px-[1.85rem]">Start reading</button></Link>
    </div>
  )
}

export default Hero