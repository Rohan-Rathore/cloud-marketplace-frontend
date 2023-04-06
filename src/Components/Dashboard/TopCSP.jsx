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
      'csplogo' : aws
    },
    {
      'cspname' : 'Google Cloud Provider',
      'csplogo' : gcp
    },
    {
      'cspname' : 'Microsoft Azure',
      'csplogo' : azure
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
              <Link className='csp-name' to='/csp/services/aws'>{csp.cspname}</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopCSP