import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import TopCSP from './TopCSP';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ShowCSPOnReq(props) {
  const location = useLocation();

  const showAvaliableServices = (reqservices) =>{
    console.log(reqservices);
    const logo = `fa fa-${reqservices.logo}`;
    return(
      reqservices.services.map((ser)=>{
        return(
          <div className='my-3 cu-show-service'>
            <div className='d-flex justify-content-center service-logo'>
              <i className={logo}></i>
            </div>
            <div className='mt-2 d-flex justify-content-center'>
              <span>{ser.service}</span>
            </div>
          </div>
        )
      })
    )
  } 
  const showResult = (getlogo) =>{
    console.log(result);
    const logo = `fa fa-${getlogo}`;
    return(
      <div className='my-3 cu-show-service'>
        <div className='d-flex justify-content-center service-logo'>
          <i className={logo}></i>
        </div>
        <div className='mt-2 d-flex justify-content-center'>
          <span>{result['service_name']}</span>
        </div>
      </div>
    )
  }
  const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
  const [traffic, settraffic] = useState('');
  const [timep, settimep] = useState('');
  const [security, setsecurity] = useState('');
  const [result, setresult] = useState([]);
  const [resultFetch, setresultFetch] = useState(false);

  const FindBestService = () =>{
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/find-best-service/',
      headers: header,
      data: {
        req_traffic: traffic,
        req_timep: timep,
        req_security: security,
        more_req: location.state.reqname
      }
    })
   .then((res)=>{
      setresult(res.data);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err); //handle error
    })
  }
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
              <span className='text-decoration-underline' style={{marginLeft: '10px'}}>{location.state.reqname.name}</span>
            </div>

            <div className='csp-service-show'>
              <div className='d-flex justify-content-between'>
                {resultFetch === true ?
                  showResult(location.state.reqname.logo)
                :
                  showAvaliableServices(location.state.reqname)
                }
              </div>
            </div>
            <div className='s-input mt-4'>
              <input type="number" onChange={(e)=>settraffic(e.target.value)} required />
              <p className=''>How many user's can visit / access in your website <strong>(in month)</strong>.</p>
            </div>

            <div className='s-input mt-3'>
              <input type="number" onChange={(e)=>settimep(e.target.value)}  required />
              <p className=''>For how much time you want to access this service <strong>(in month)</strong>.</p>
            </div>

            <div className='s-input mt-3'>
              <select className='select-op' onChange={(e)=>setsecurity(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <p className=''>select level of security for server.</p>
            </div>
            
            <div className='mt-3'>
              <button className='find-service-btn' onClick={()=>FindBestService()}>Find Service</button>
            </div>


          </div>
        </div>
      </Container>
    </>
  )
}

export default ShowCSPOnReq