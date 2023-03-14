import React from 'react'
import Signup from './Signup';
import {Route, Routes} from 'react-router-dom'
import Login from './Login';
import Logout from './Logout';

function SessionRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />				
        </Routes>	
    </div>
  )
}

export default SessionRoutes;