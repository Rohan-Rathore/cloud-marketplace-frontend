import React from 'react'
import { Link } from 'react-router-dom'

function CustomeReq() {
  const coustom_req = [
    'We want to host a website',
    'We want a dedicated hardware',
    'We want a remote SQL database',
    'We want a remote NoSQL database'
  ]
  return (
    <div className='mt-4'>
      <div className='d-flex flex-column'>
        {coustom_req.map((req,index)=>{
          return(
            <div className='border w-100 p-2 mb-3' key={index}>
              <Link to='/dashboard/show-csp-on-req' className='custom-req' state={{reqname: req}}>
                {req}
              </Link>
            </div>
          )
        })}
        
        <div className='border w-100 p-2 mb-3 mt-3 text-center bg-light' style={{color:'#F0A04B'}}>
          Other Requirement
        </div>
      </div>
    </div>
  )
}

export default CustomeReq