import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import SearchService from './SearchService';
import { useLocation } from 'react-router-dom';
import ConfirmDelete from './ModelComponent/ConfirmDelete';
import NotFound from './Images/no-service-found.svg';

function ShowCSPServices() {
  const [services, setservices] = useState([]);
  const [search, setsearch] = useState([]);
  const [deleteservice, setdeleteservice] = useState(false);
  const location = useLocation();
  const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
  useEffect(() => {
    var cspid = localStorage.getItem('id') ? localStorage.getItem('id') : location.state.cspid ;
    
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/csp/services/',
      headers: header,
      data: { 
        csp_id: cspid
      }
    })
   .then((res)=>{
      setservices(res.data);
      setsearch(res.data);
      setdeleteservice(false);
    }).catch((err)=>{
      console.log(err); //handle error
    })
  }, [deleteservice])
  
  const showTages = (tages) =>{
    return tages.split(',');
  }
  const getRandomBadge = () =>{
    let badges = ['dark', 'secondary', 'success', 'primary'];
    let randomIndex = Math.floor(Math.random() * badges.length);
    return badges[randomIndex];
  }

  const filterService = (query) =>{
    setsearch(services);
    console.log(search);
    return search.filter((e) => e['name'].toUpperCase() == query.toUpperCase());
  }
  const searchServices = (query) =>{
    if (query === '') {
      setsearch(services);
    }
    else{
      let newd = filterService(query);
      setsearch(newd);
    }
  }
  
  const [modalShow, setmodalShow] = useState(false);
  const [serviceId, setserviceId] = useState()
  return (
    <div className='show-services'>
      <div className='w-100'>
        {/* search box */}
        <SearchService searchService={searchServices} />

        {/* show services  */}
        <div className='all-services mt-4'>
          {search.length !== 0 ?
            <div className='row row-cols-3 gy-4 gx-4'>
              {search.map((service, index) => {
                return(
                  <div className='col service-card' key={index}>
                    <div className="card ">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        {service['category'].toUpperCase()}
                        { localStorage.getItem('role') === '1' &&
                          <div>
                            <i
                              onClick={()=>{setmodalShow(true); setserviceId(service._id)}} 
                              className="bi bi-trash text-danger h5"></i>
                          </div>
                        }
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{service['name'].toUpperCase()}</h5>
                        <p className="card-text serivce-detail">{service['description']}.</p>
                        <span className='read-more'>Read more</span>
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
          :
            <div className='d-flex justify-content-center mt-5'>
              <div>
                <img src={NotFound} alt="" srcset="" height='350px' width='450px' />
                <span 
                  className='text-center mt-4 text-secondary' 
                  style={{display: 'block'}}>
                  No service found
                </span>
              </div>
            </div>
          }
        </div>
      </div>
      <ConfirmDelete
        show={modalShow}
        onHide={()=>setmodalShow(false)}
        sid={serviceId}
        callDeleteService={setdeleteservice}
      />
    </div>
  )
}

export default ShowCSPServices