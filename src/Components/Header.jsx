import React from 'react'
import './Header.css';
import {FaUser,FaLock} from "react-icons/fa";

export const Header = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>LOGIN-FORM</h1>
            <div className='input-box'>
                <input type='text' placeholder='username' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='password' required/>
                <FaLock className='icon'/>
            </div>
            <div className='remember-forget'>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forget Password</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>DON't have an account? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  )
}
