import React from 'react'
import { Link } from 'react-router-dom'


function PredefineReq() {
  const requirements = [
    {
      'id': 'req-1',
      'title' : 'Store user profile image and retrive profile image.',
      'details' : {
        'csp_name' : 'Amazon Web Service',
        'service_name' : 'S3',
        'price' : '1.0 USD'
      }
    },
    {
      'id': 'req-2',
      'title' : 'Store user profile image and retrive profile image.'
    },
    {
      'id': 'req-3',
      'title' : 'Store all students marksheet as a PDF and retrive when it required.'
    },
    {
      'id': 'req-4',
      'title' : 'Store user profile image and retrive profile image.'
    },
    {
      'id': 'req-5',
      'title' : 'Store user profile image and retrive profile image.'
    },
    {
      'id': 'req-6',
      'title' : 'Store user profile image and retrive profile image.'
    },
  ]
  return (
    <div className='mt-4 show-pred-req'>
      <div className='row gy-5'>
        {requirements.map((req, index)=>{
          return(
            <div className="card mx-3 shadow-sm" style={{width: '18rem'}} key={index}>
              <div className="card-body">
                <p className=''>{req.title}</p>
              </div>
              <div className='text-center mb-2'>
                <Link style={{color:'#F0A04B'}} to={'/dashboard/pre-requirement/'+req.id} >Check</Link>  
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PredefineReq