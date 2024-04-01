import React from 'react';
import "./Header.css";

export const Header = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>LOGIN FORM</h1>
            <div className='input-box'>
                <input type='text' placeholder='username' required/>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Password' required/>
            </div>
        </form>
    </div>

  )
}
