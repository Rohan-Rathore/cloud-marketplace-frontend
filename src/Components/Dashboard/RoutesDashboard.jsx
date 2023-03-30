import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard';
import { Container } from 'react-bootstrap'
import Navigation from '../SharedComponents/Navigation'
import ShowPredefineReq from './ShowPredefineReq';
function RoutesDashboard() {
  return (
    <div>
      <div className='nav-bar'>
        <Container>
          <Navigation />
        </Container>
      </div>
      <Routes>
        <Route path='/' element={ <Dashboard /> }  ></Route>
        <Route path='/dashboard/pre-requirement/:reqId' element={ <ShowPredefineReq /> }  ></Route>
      </Routes>
    </div>
  )
}

export default RoutesDashboard