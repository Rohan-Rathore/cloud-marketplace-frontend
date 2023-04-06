import React from 'react'
import { Container } from 'react-bootstrap';
import TopCSP from './TopCSP';
import { useLocation } from 'react-router-dom';
function ShowCSPOnReq(props) {
  const location = useLocation();
  return (
    <>
      <Container>
        <div className='row mt-4'>
          <div className='col-3'>
            <TopCSP />
          </div>

          <div className='col-9'>
            <div className='d-flex align-items-center'>
              <strong> Requirment :-</strong>
              <span className='text-decoration-underline' style={{marginLeft: '10px'}}>{location.state.reqname}</span>
            </div>
            
            <div className='s-input mt-4'>
              <input type="number" required />
              <p className=''>How many user's can visit / access in your website <strong>(per month)</strong>.</p>
            </div>

            <div className='s-input mt-3'>
              <input type="number" required />
              <p className=''>What is your budget for this project.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShowCSPOnReq