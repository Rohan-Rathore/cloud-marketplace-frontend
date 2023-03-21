import React from 'react'
import ServiceDetails from './AddServiceComponent/ServiceDetails'
import ServiceIntro from './AddServiceComponent/ServiceIntro'
import ServicePrice from './AddServiceComponent/ServicePrice'
import './style.css'
function AddService() {
  return (
    <div className='csp-dashboard'>
      <div className='row w-100 my-5'>
        <div className='col-md-3'>
          <div class="list-group list-group-flush" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Service Intro</a>
            <a class="list-group-item list-group-item-action" id="list-price-list" data-toggle="list" href="#list-price" role="tab" aria-controls="price">Service Price</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Service Details</a>
            <a class="list-group-item list-group-item-action" id="list-review-list" data-toggle="list" href="#review-service" role="tab" aria-controls="review">Review</a>
          </div>
        </div>
        <div className='col-md-9 px-5'>
          <div class="tab-content" id="nav-tabContent">
            <ServiceIntro />
            
            <ServicePrice />

            <ServiceDetails />
            
            <div class="tab-pane fade" id="review-service" role="tabpanel" aria-labelledby="list-review-list">
              Review Service
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddService