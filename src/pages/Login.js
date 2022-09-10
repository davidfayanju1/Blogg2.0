import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import form from '../img/form.jpg';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useAuth } from '../authContext';

const Login = () => {

  // take email and password
  const { loginUser } = useAuth();

  const [showPassword, setShowPassword] = useState(true); 
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  
  const submitForm = () => {

    loginUser(email.current.value, password.current.value);
    navigate('/');

  }

  return (
    <div className='bg-slate-300  dark:bg-slate-900 min-h-screen flex items-center justify-center'>
      <div className="flex items-center bg-slate-100 max-w-4xl w-11/12">        
        <div className="form-image w-6/12 md:block hidden">
          <img src={ form } alt="form"/>
        </div>

        <form className='py-6 px-6 w-full md:w-11/12' onSubmit={ submitForm }>
          <h1 className='mb-8 md:text-5xl text-4xl'>BLOGG.</h1>
          <div className="form-group w-100">
            <input type="email"  placeholder='Email' ref={ email } className="w-full px-3 py-3.5 outline-0" />
          </div>
          <div className="form-group mt-3 w-100 relative">
            <input type={ showPassword ? "password" : "text"} ref={ password }  placeholder='password' className="w-full px-3 py-3.5 outline-0"/>
            <div className=" absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
              { showPassword ? <VscEye /> : <VscEyeClosed />}
            </div>
          </div>
          <div className="form-btn mt-6 w-100">
            <button type="submit" className='bg-stone-900 py-[.45rem] w-32 text-white hover:bg-slate-800 rounded-[25px] text-[1.1rem]'>Login</button> or <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login