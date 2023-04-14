import React,{useState} from 'react'
import ShowPredefineReq from './ShowPredefineReq'


function PredefineReq() {
  const requirements = [
    {
      'id': '0',
      'title' : 'Store user profile image and retrive profile image.',
      'details' : {
        'csp_name' : 'Amazon Web Service',
        'service_name' : 'S3',
        'price' : '1.0 USD'
      }
    },
    {
      'id': '1',
      'title' : 'Store all students marksheet as a PDF and retrive when it required.',
      'details' : {
        'csp_name' : 'Amazon Web Service',
        'service_name' : 'S3',
        'price' : '1.0 USD'
      }
    },
  ]
  const [modalShow, setmodalShow] = useState(false);
  const [reqId, setreqId] = useState(0)
  return (
    <>
      <div className='mt-4 show-pred-req'>
        <div className='row gy-5'>
          {requirements.map((req, index)=>{
            return(
              <div className="card mx-3 shadow-sm" style={{width: '18rem'}} key={index}>
                <div className="card-body">
                  <p className=''>{req.title}</p>
                </div>
                <div className='text-center mb-2 bg-light p-1' style={{color:'#F0A04B'}}>
                  <span 
                    onClick={()=>{setmodalShow(true); setreqId(req.id)}} 
                    style={{cursor: 'pointer'}}>Find Service</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ShowPredefineReq
        show={modalShow}
        onHide={()=>setmodalShow(false)}
        reqs={requirements[reqId]}
      />
    </>
  )
}

export default PredefineReq