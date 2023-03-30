import React from 'react'
import Signup from './Signup';
import {Route, Routes} from 'react-router-dom'
import Login from './Login';
import Logout from './Logout';
import { Container } from 'react-bootstrap';
import Navigation from '../SharedComponents/Navigation';

function SessionRoutes() {
  return (
    <div>
        <div className='nav-bar'>
          <Container>
            <Navigation />
          </Container>
        </div>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />				
        </Routes>	
    </div>
  )
}

export default SessionRoutes;