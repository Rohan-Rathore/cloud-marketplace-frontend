import React ,{useState} from 'react'
import { Container } from 'react-bootstrap'
import TopCSP from './TopCSP'
import './style.css';
import CustomeReq from './CustomeReq';
import PredefineReq from './PredefineReq';

function Dashboard() {
  const [radio, setRadio] = useState('custom');
  return (
    <>
      <Container>
        <div className='row mt-4'>
          <div className='col-3'>
            <TopCSP />
          </div>

          <div className='col-9'>
            <div className='row justify-content-between gx-1'>
              <div className='col-sm-6 border d-flex bg-light'>
                <div className='mx-3 mt-2'>
                  <input type="radio" name='req-op' className='radio-inp' onChange={()=>setRadio('custom')} />
                </div>
                <div className='mt-1'>
                  <div className='fw-bold'>Coustome Requirement</div>
                  <p className=''>
                    we have created some predefine template so you can use it to solve your business problem.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 border d-flex'>
                <div className='mx-3 mt-2'>
                  <input type="radio" name='req-op' className='radio-inp' onChange={()=>setRadio('predefine')} />
                </div>
                <div className='mt-1'>
                  <div className='fw-bold'>Select Predefine Requirements</div>
                  <p className=''>
                    we have created some predefine template so you can use it to solve your business problem.
                  </p>
                </div>
              </div>
            </div>

            {
              radio === 'custom' ?
                <CustomeReq />
                :
                <PredefineReq />
            }

          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard