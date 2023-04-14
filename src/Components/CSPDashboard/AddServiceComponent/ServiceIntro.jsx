import axios from 'axios';
import React, { useState, useEffect } from 'react'
function ServiceIntro({nameset, descriptionset}) {
	const header = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`
	}
	var cspid = localStorage.getItem('id');
	const [service, setservices] = useState([]);
	const [sname, setsname] = useState();
	const [checkSname, setcheckSname] = useState(false);
	const service_name = [];

  useEffect(() => {
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
    })
		.catch((err)=>{
      console.log(err); //handle error
    })
	}, [])
	
	const checkservicename = () =>{
		setcheckSname(false);
		if (service && sname !== '') {
			service.map((ser)=>{
				if (ser.name.toLowerCase() === sname.toLowerCase()) {
					setcheckSname(true);
				}
			})
			console.log("avail");
		}
	}
  return (
		<div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
			{	checkSname &&
				<p className='text-danger'>This service name is already added.</p>
			}
			<div className='s-input'>
				<input 
					type="text"
					placeholder='service name' 
					onChange={(e)=>{nameset(e.target.value); setsname(e.target.value)}}
					onBlur={()=>checkservicename()}
					/>
				<p>Enter the Service name like EC2, DynamoDB, S3.</p>
			</div>
				
			<div className='s-input mt-4'>
				<textarea name="" id="" cols="30" rows="10"
						placeholder='service description'
						onChange={(e)=>descriptionset(e.target.value)}
					>
				</textarea>
				<p>Tell about the Service.</p>
			</div>

			<div className='d-flex justify-content-end' >
				<span className='next-btn'>Next</span>
			</div>
		</div>
  )
}

export default ServiceIntro