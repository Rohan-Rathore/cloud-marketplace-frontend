import axios from 'axios';
import React, { useState } from 'react'

function CompletePorfile() {
  const [csp_name, setcsp_name] = useState('');
  const [csplogo, setcsplogo] = useState('');

  const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
  
  const complete_porfile = () =>{
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/csp/complete-profile',
      headers: header,
      data: {
        csp_name: csp_name,
        csp_image: csplogo,
        csp_id: localStorage.getItem('id')
      }
    })
   .then((res)=>{
      // setsuccess(res.data['message']);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err); //handle error
    })
  }
  return (
    <div>
      <div>
        <input type="text" onChange={(e)=>{setcsp_name(e.target.value)}} placeholder='name' />
      </div>
      <div>
        <input type="text" onChange={(e)=>{setcsplogo(e.target.value)}} placeholder='image' />
      </div>
      <div>
        <button onClick={()=>complete_porfile()}>Submit</button>
      </div>
      

    </div>
  )
}

export default CompletePorfile