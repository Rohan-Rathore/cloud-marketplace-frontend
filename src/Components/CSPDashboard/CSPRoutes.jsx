import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../SharedComponents/Navigation'
import AddService from './AddService'
import CSPDashboard from './CSPDashboard'
import ShowCSPServices from './ShowCSPServices'
import CompletePorfile from './CompletePorfile'

function CSPRoutes() {
  return (
    <div>
      <div className='nav-bar'>
        <Container>
          <Navigation />
        </Container>
      </div>
      <Routes>
        <Route path='/dashboard' element={<CSPDashboard />} />
        <Route path='/add-services' element={<AddService />} />
        
        <Route path='/complete-profile' element={<CompletePorfile />} />				
        <Route path='/services/:cspname' element={<ShowCSPServices />} />				
      </Routes>	
    </div>
  )
}

export default CSPRoutes