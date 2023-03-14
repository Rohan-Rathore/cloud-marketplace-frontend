import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from './Navbar'
import './style/navigation.css'
import './style/index.css'

function Index() {
  return (
    <div className=''>
      <Container>
        <div className='page-header'>
          <div>
              <span className='header-text'>
                Let's Groww your Business</span>
              <div  className='header-sub-text'>
                The Platform that suggest you best cloud service provider on the basis of your business requirements so you can choose best CSP provider.
              </div>

              <div className='header-btn-coll'>
                  <div>
                      <button className='header-btn-first'>Add Requirements</button>
                  </div>
                  <div>
                      <button className='header-btn-second'>Documentation</button>
                  </div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Index