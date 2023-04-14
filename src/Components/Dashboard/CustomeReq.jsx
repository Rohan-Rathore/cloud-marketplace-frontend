import React from 'react'
import { Link } from 'react-router-dom'

function CustomeReq() {
  const coustom_req = [
    {
      'name' : 'I want to host a website',
      'category': 'compute',
      'logo': 'server',
      'services': [
        {
          'service_id': '6436602e42d95e08bc51aed7',
          'csp_name': 'amazon web services',
          'service': 'EC2',
          'score': 0  
        },
        {
          'service_id': '642fbc6f066a673f1cba1ed8',
          'csp_name': 'Microsoft Azure',
          'service': 'Virtual Machines',
          'score': 0
        },
        {
          'service_id': '642fb1226306080b50d5334b',
          'csp_name': 'Google service provider',
          'service': 'Compute Engine',
          'score': 0
        },
      ]
    },
    {
      'name' : 'I want a remote SQL database',
      'category': 'database',
      'logo': 'database',
      'services': [
        {
          'service_id': '',
          'csp_name': 'amazon web services',
          'service': 'Amazon RDS'
        },
        {
          'service_id': '',
          'csp_name': 'Microsoft Azure',
          'service': 'Azure SQL Database'
        },
        {
          'service_id': '',
          'csp_name': 'Google service provider',
          'service': 'Cloud SQL'
        },
      ]
    },
    {
      'name' :  'I want a dedicated hardware',
    },
    {
      'name' : 'I want a remote NoSQL database',
    },
    {
      'name' : "I want to host a website but don't want to manage server configuration",
    }
  ]
  return (
    <div className='mt-4'>
      <div className='d-flex flex-column'>
        {coustom_req.map((req,index)=>{
          return(
            <div className='border w-100 p-2 mb-3' key={index} id={index}>
              <Link to='/dashboard/show-csp-on-req' className='custom-req' state={{reqname: req}}>
                {req.name}.
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