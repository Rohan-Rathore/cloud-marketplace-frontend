import React from 'react'
import { Link } from 'react-router-dom'
import AddService from './AddService'
import './style.css'
import ShowCSPServices from './ShowCSPServices'

function CSPDashboard() {
  return (
    <div className=''>
      <div className='csp-header-btn'>
          <h3 className='lead'>Welcome <span>AWS</span> in Cloud-Market-Place</h3>
          <Link to='/csp/add-services' className='add-service-link'>Add New Service</Link>
      </div>

      {/* search services box */}
      <ShowCSPServices />
    </div>
  )
}

export default CSPDashboard