import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style/navigation.css'
import './style/index.css'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <>
      <div className='nav-bar'>
        <Container>
          <Navigation />
        </Container>
      </div>
      <div className=''>
        <Container>
          <div className='page-header'>
            <div>
                <span className='header-text'>
                  Let's Grow your Business</span>
                <div  className='header-sub-text'>
                  The Platform that suggest you best cloud service provider on the basis of your business requirements so you can choose best CSP provider.
                </div>

                <div className='header-btn-coll'>
                    <div className='header-btn-first'>
                        <Link className='add-req' to='/dashboard'>Add Requirements</Link>
                    </div>
                    <div>
                        <button className='header-btn-second'>Documentation</button>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Index