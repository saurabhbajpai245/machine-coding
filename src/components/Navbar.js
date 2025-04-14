import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './css/navbar.css';
import { useTheme } from '../utils/theme-context';

const Navbar = () => {
  const theme = useTheme();

  const changeTheme = (e) => {
    console.log(e.target.checked);
    theme.toggleTheme()
  }

  
  return (
    <div className='navbar'>
        <Link className='item' to={'/'}>Home</Link>
        <Link className="item" to='/timer'>Timer</Link>
        <Link className='item' to='/counter'>Counter</Link>
        <Link className='item' to={'/infiniteScroll'}>Infinite scroll</Link>
        <Link  className="item" to={'/pagination'}>Pagination</Link>
        <Link className='item' to={'/tabform'}>Multi-step form</Link>
        <Link className='item' to={'/otp'}>OTP</Link>
        <div className='changeTheme'>
          <label>
            <input type='checkbox' id='themeMode' onChange={changeTheme}></input>
            <span className='slider round'></span>
          </label>
        </div>
    </div>
  )
}

export default Navbar