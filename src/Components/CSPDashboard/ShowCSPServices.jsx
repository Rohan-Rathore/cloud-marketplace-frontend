import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import SearchService from './SearchService';
import { useLocation } from 'react-router-dom';

function ShowCSPServices() {
  const [services, setservices] = useState([]);
  const [search, setsearch] = useState([]);
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
      console.log(res.data);
      setservices(res.data);
      setsearch(res.data);
    }).catch((err)=>{
      console.log(err); //handle error
    })
  }, [])
  
  const showTages = (tages) =>{
    return tages.split(',');
  }
  const getRandomBadge = () =>{
    let badges = ['dark', 'secondary', 'success', 'primary'];
    let randomIndex = Math.floor(Math.random() * badges.length);
    return badges[randomIndex];
  }

  const filterService = (query) =>{
    return search.filter((e) => e['name'].toUpperCase() == query.toUpperCase());
  }
  const searchServices = (query) =>{
    console.log(query);
    setsearch([]);
    setsearch(services);
    console.log(services);
    let newd = filterService(query);
    setsearch(newd);
    console.log(search);
  }
  return (
    <div className='show-services'>
      <div className='w-100'>
        <SearchService searchService={searchServices} />
        <div className='all-services mt-4'>
          <div className='row row-cols-3 gy-4 gx-4'>
            {search.map((service, index) => {
              return(
                <div className='col service-card' key={index}>
                  <div className="card ">
                    <div className="card-header">
                      {service['category'].toUpperCase()}
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
        </div>
      </div>
    </div>
  )
}

export default ShowCSPServices