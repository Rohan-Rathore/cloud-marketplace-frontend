import React from 'react'
import { Route, Routes } from 'react-router-dom'

function CSPRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />				
        </Routes>	
    </div>
  )
}

export default CSPRoutes