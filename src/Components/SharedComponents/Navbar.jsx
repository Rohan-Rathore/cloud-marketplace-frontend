import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Session/Logout';
import './style/navigation.css'
const sessionLink = () =>
{
  console.log(localStorage.getItem('token'));
  if(localStorage.getItem('token'))
  {
    return(
      <div className='nav-links-2'>
        <div>
          <span onClick={()=>Logout()} className='n-link' >Logout</span>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className='nav-links-2'>
        <div>
          <Link to='/session/signup' className='n-link' >Signup</Link>
        </div>
        <div>
          <Link to='/session/login' className='n-link' >Login</Link>
        </div>
      </div>
    )
  }
}
function Navbar() {
  return (
    <div className='nav-links'>
      <div className='nav-links-1'>
        <div>
          <Link to='/' className='n-link active'>Home</Link>
        </div>
        <div>
          <Link to='/about' className='n-link' >About</Link>
        </div>
        <div>
          <Link to='/contact' className='n-link' >Contact</Link>
        </div>
        <div>
          <Link to='/contact' className='n-link' >Docs</Link>
        </div>
        <div>
          <Link to='/contact' className='n-link' >Service</Link>
        </div>
      </div>
      {sessionLink()}
    </div>
  )
}

export default Navbar