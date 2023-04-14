import React, {useState} from 'react'
import ServiceDetails from './AddServiceComponent/ServiceDetails'
import ServiceIntro from './AddServiceComponent/ServiceIntro'
import ServicePrice from './AddServiceComponent/ServicePrice'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function AddService() {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');

  const [charge, setcharge] = useState('');
  const [price, setprice] = useState('');

  const [category, setcategory] = useState('');
  const [tage, settage] = useState('');

  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');
  const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
  
  const validateService = () => {
    if (name !== '' && description !== '' && charge !== '' && price !== '' && category !== '' && tage !== '') {
      return true;
    }
    return false;
  }
  const createService = () =>{
    if (validateService()) {
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/service/create/',
        headers: header,
        data: {
          name: name,
          description: description,
          billtype: charge,
          price: price,
          category: category,
          tages: tage,
          csp_id: localStorage.getItem('id')
        }
      })
     .then((res)=>{
        setsuccess(res.data['message']);
        seterror('');
      }).catch((err)=>{
        console.log(err); //handle error
      })
    }
    else{
      setsuccess('');
      seterror('All field is required')
    }
  }
  return (
    <div className='csp-dashboard'>
      <div className='row w-100 my-5'>
        <div className='col-md-3'>
          <div className="list-group list-group-flush" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Service Intro</a>
            <a className="list-group-item list-group-item-action" id="list-price-list" data-toggle="list" href="#list-price" role="tab" aria-controls="price">Service Price</a>
            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Service Details</a>
            <a className="list-group-item list-group-item-action" id="list-review-list" data-toggle="list" href="#review-service" role="tab" aria-controls="review">Review</a>
          </div>
        </div>
        <div className='col-md-9 px-5'>
          {error &&
            <div className="alert alert-danger" role="alert">
              {error}!
            </div>
          }
          {success &&
            <div className="alert alert-success" role="alert">
              {success}!
            </div>
          }
          <div className="tab-content" id="nav-tabContent">
            <ServiceIntro nameset={setname} descriptionset={setdescription} />
            
            <ServicePrice chargeset={setcharge} priceset={setprice} />

            <ServiceDetails categoryset={setcategory} tageset={settage} />
            
            <div className="tab-pane fade" id="review-service" role="tabpanel" aria-labelledby="list-review-list">
              <div className='mb-3'>
                <strong>Service Name - </strong>{name}
              </div>
              <div className='mb-3'>
                <strong>Service description - </strong>{description}
              </div>
              <div className='mb-3'>
                <strong>Service price - </strong>${price} on the basis of {charge}
              </div>
              <div className='mb-3'>
                <strong>Service category - </strong>{category}
              </div>
              <div className='mb-3'>
                <strong>Service tage - </strong>{tage}
              </div>
              { success === '' ?
                <div className='d-flex justify-content-start'>
                  <span className='create-service-btn' onClick={()=>createService()}>Create Service</span>
                </div>
              :
                <div className='d-flex justify-content-start'>
                  <Link className='create-service-btn' to='/csp/dashboard'>View service</Link>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddService