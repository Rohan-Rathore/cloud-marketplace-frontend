import React from 'react'
import aws from '../Images/aws.svg'
import azure from '../Images/azure.svg'
import gcp from '../Images/gcp.svg'
import ibm from '../Images/ibm.svg'
import heroku from '../Images/heroku.svg'
import salesforce from '../Images/salesforce.svg'
import digitalO from '../Images/digital-ocean.svg'
import { Link } from 'react-router-dom'


function TopCSP() {
  const top_csp = [
    {
      'cspname' : 'Amazon Web Service',
      'csplogo' : aws,
      'id' : '6406cf08d839f23d04c4d59a'
    },
    {
      'cspname' : 'Google Cloud Provider',
      'csplogo' : gcp,
      'id': '640960015c6f2c4f6428452c'
    },
    {
      'cspname' : 'Microsoft Azure',
      'csplogo' : azure,
      'id': '64099417b2b43510e0c1c293'
    },
    {
      'cspname' : 'IBM Cloud',
      'csplogo' : ibm
    }
    ,{
      'cspname' : 'Heroku Cloud',
      'csplogo' : heroku
    },
    {
      'cspname' : 'Salesforce Cloud',
      'csplogo' : salesforce
    }
    ,{
      'cspname' : 'Digital Ocean',
      'csplogo' : digitalO
    }
  ]
  return (
    <div>
      {top_csp.map((csp, index)=>{
        return(
          <div className='d-flex align-items-center py-2 px-2 border' key={index}>
            <div className='col-sm-3'>
              <img src={csp.csplogo} alt={csp.cspname} />
            </div>
            <div className='col-sm-9'>
              <Link className='csp-name' to='/csp/services/aws' state={{cspid : csp.id}} > {csp.cspname}</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopCSP