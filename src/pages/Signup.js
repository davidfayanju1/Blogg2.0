import React, { useState, useRef } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useAuth } from '../authContext';
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';

const Signup = () => {

  const { registerUser } = useAuth();

  const name = useRef();
  const password = useRef();
  const email = useRef();
  const confirmPassword = useRef();
  const bio = null;
  const bookmark = [];
  const bookmarkedUsers = [];

  // name, email, password,confirmpassword
  const [showPassword, setShowPassword] = useState(true); 
  const [showSecondPassword, setShowSecondPassword] = useState(true); 
  const [passwordError, setPasswordError] = useState('');
  const [matchError, setMatchError] = useState('');
  const navigate = useNavigate();
  
  const submitForm = (e) => {

    // signup user
    e.preventDefault()
    if(password.current.value.length < 6){
      
      setPasswordError('Password should be at least 6 characters')

    }else if(password.current.value !== confirmPassword.current.value){

      setMatchError('Passwords do not match');

    }else {

      registerUser(name.current.value, email.current.value, bio, password.current.value, bookmark, bookmarkedUsers)
      navigate('/');
    }


  }


   return (
    <div className='bg-slate-300 dark:bg-slate-900 min-h-screen flex items-center justify-center'>
      <form className='py-6 px-6 bg-slate-100 max-w-xl w-11/12' onSubmit={ submitForm }>
       <h1 className='mb-11 mt-4 md:text-5xl text-2xl'>SPACE.</h1>
        <div className="form-group w-100">
          <input type="text"  ref={ name } placeholder='Full name' className="w-full px-3 py-3.5 outline-0" required/>
        </div>
        <div className="form-group w-100 mt-6">
          <input type="email" ref={ email } placeholder='Email' className="w-full px-3 py-3.5 outline-0" required/>
        </div>
        <div className="form-group mt-6 w-100 relative">
          <input type={ showPassword ? "password" : "text"} ref={password} placeholder='Password' className={`w-full px-3 py-3.5 outline-0 ${ passwordError ? 'border-red-700 border-[.1rem]' : null }`} required/>
          <div className=" absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
            { showPassword ? <VscEye /> : <VscEyeClosed />}
          </div>
          <small className='text-red-700'>{passwordError}</small>
        </div>
        <div className="form-group mt-6 w-100 relative">
          <input ref={ confirmPassword } type={ showSecondPassword ? "password" : "text"}  placeholder='Confirm Password' className={`w-full px-3 py-3.5 outline-0 ${ matchError && 'border-red-700 border-[.1rem]'}`} required/>
          <div className=" absolute top-4 right-4" onClick={() => setShowSecondPassword(!showSecondPassword)}>
            { showSecondPassword ? <VscEye /> : <VscEyeClosed />}
          </div>
          <small className='text-red-700'>{matchError}</small>           
        </div>
        <div className="form-btn mt-11 w-100 mb-4">
          <button type="submit" className='bg-stone-900 py-[.45rem] w-32 text-white hover:bg-slate-800 rounded-[25px] text-[1.1rem]'>Sign Up</button>
        </div>            
      </form>   
    </div>
  )
}

export default Signup