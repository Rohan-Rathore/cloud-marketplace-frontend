import React from 'react'
import '../style.css'
function ServicePrice() {
  return (
    <div class="tab-pane fade" id="list-price" role="tabpanel" aria-labelledby="list-price-list">
      <div>
        <p>How the service is charge</p>
        <div className='row row-cols-3 gx-4 gy-4'>
          <div className='col'>
            <div className='s-category'>Time</div>
          </div>
          <div className='col'>
            <div className='s-category'>Storage</div>
          </div>
        </div>
      </div>
      <div className='price-time mt-5'>
        <div className='s-input'>
          <input 
              type="number"
              placeholder='Enter price' />
          <p>Enter the Service price on the basis of <strong> /Hours</strong>.</p>
        </div>
      </div>
      <div className='price-time mt-5'>
        <div className='s-input'>
          <input 
              type="number"
              placeholder='Enter price' />
          <p>Enter the Service price on the basis of <strong> /MB</strong>.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicePrice