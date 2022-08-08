import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Signup = () => {

  // name, email, password,confirmpassword
  const [showPassword, setShowPassword] = useState(true); 
  const [showSecondPassword, setShowSecondPassword] = useState(true); 
  

   return (
    <div className='bg-slate-300 dark:bg-slate-900 min-h-screen flex items-center justify-center'>
     <form className='py-6 px-6 bg-slate-100 max-w-xl w-11/12'>
       <h1 className='mb-11 mt-4 md:text-5xl text-4xl'>BLOGG.</h1>
        <div className="form-group w-100">
          <input type="text"  placeholder='Full name' className="w-full px-3 py-3.5 outline-0" />
        </div>
        <div className="form-group w-100 mt-6">
          <input type="email"  placeholder='Email' className="w-full px-3 py-3.5 outline-0" />
        </div>
        <div className="form-group mt-6 w-100 relative">
          <input type={ showPassword ? "password" : "text"}  placeholder='Password' className="w-full px-3 py-3.5 outline-0"/>
          <div className=" absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
            { showPassword ? <VscEye /> : <VscEyeClosed />}
          </div>
        </div>
        <div className="form-group mt-6 w-100 relative">
          <input type={ showSecondPassword ? "password" : "text"}  placeholder='Confirm Password' className="w-full px-3 py-3.5 outline-0"/>
          <div className=" absolute top-4 right-4" onClick={() => setShowSecondPassword(!showSecondPassword)}>
            { showSecondPassword ? <VscEye /> : <VscEyeClosed />}
          </div>
        </div>
        <div className="form-btn mt-11 w-100 mb-4">
          <button type="submit" className='bg-stone-900 p-3.5 w-32 text-white hover:bg-slate-800'>Sign Up</button>
        </div>            
      </form>   
    </div>
  )
}

export default Signup