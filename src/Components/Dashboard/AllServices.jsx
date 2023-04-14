import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Navigation from '../SharedComponents/Navigation';
function AllServices() {

  const showTages = (tages) =>{
    return tages.split(',');
  }
  const getRandomBadge = () =>{
    let badges = ['dark', 'secondary', 'success', 'primary'];
    let randomIndex = Math.floor(Math.random() * badges.length);
    return badges[randomIndex];
  }

  const [services, setservices] = useState([])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8000/api/services/',
    })
   .then((res)=>{
      setservices(res.data);
    }).catch((err)=>{
      console.log(err); //handle error
    })
  }, [])

  const ProviderName = (csp_id) =>{
    let name = '';
    if (csp_id === '6406cf08d839f23d04c4d59a') {
      name = 'Amazon Web Service'; 
    } 
    else if(csp_id === '640960015c6f2c4f6428452c') {
      name = 'Google Cloud Provider'; 
    }
    else if(csp_id === '64099417b2b43510e0c1c293') {
      name = 'Microsoft Azure'; 
    }
    return name;
  }
  return (
    <>
      <div className='nav-bar'>
        <Navigation />
      </div>
      <div className='all-services1'>
        <div className='row row-cols-3 gy-4 gx-4'>
          {services.map((service, index) => {
            return(
              <div className='col service-card' key={index}>
                <div className="card ">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <div className=''>
                      <div style={{fontSize: '1rem', fontWeight:'bold'}}>{ProviderName(service.csp_id)}</div>
                      <div style={{fontSize: '13px', marginTop:'4px'}}>
                        {service['category'].toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{service['name'].toUpperCase()}</h5>
                    <p className="card-text serivce-detail">{service['description']}.</p>
                    <span className='read-more'>Read more</span>

                    <div className='mt-2'>
                      <span><strong>Price - </strong>${service['price']} / {service['category'] === 'storage' ? 'GB' : 'Hour'}</span> 
                    </div>
                  </div>
                  <div className='my-2'>
                    {showTages(service['tages']).map((tag, index)=>{
                      let classes = `badge bg-${getRandomBadge()} mx-1`;
                      return(
                        <span className={classes} key={index} >#{tag.trim()}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AllServices