import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Session/Logout';
import { useNavigate } from 'react-router-dom'

import './style/navigation.css'


function Navigation() {
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
      { localStorage.getItem('token') ?
          <div className='nav-links-2'>
            { localStorage.getItem('role') === '1' &&
              <div> <Link className='n-link logout-btn' to='/csp/dashboard' >CSP Dashboard</Link> </div>
            }
            <div>
              <span onClick={()=>Logout()} className='n-link logout-btn' >Logout</span>
            </div>
          </div>
          
        :
          <div className='nav-links-2'>
            <div>
              <Link to='/session/signup' className='n-link' >Signup</Link>
            </div>
            <div>
              <Link to='/session/login' className='n-link' >Login</Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Navigation