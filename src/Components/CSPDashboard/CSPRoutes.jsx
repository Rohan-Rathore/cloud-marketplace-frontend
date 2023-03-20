import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddService from './AddService'
import CSPDashboard from './CSPDashboard'

function CSPRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/dashboard' element={<CSPDashboard />} />
            <Route path='/add-services' element={<AddService />} />				
        </Routes>	
    </div>
  )
}

export default CSPRoutes