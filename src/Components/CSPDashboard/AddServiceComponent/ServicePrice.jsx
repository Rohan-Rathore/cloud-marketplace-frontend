import React, {useState} from 'react'
import '../style.css'
function ServicePrice({chargeset, priceset}) {
  const [stype, settype] = useState('time');
  return (
    <div class="tab-pane fade" id="list-price" role="tabpanel" aria-labelledby="list-price-list">
      <div>
        <p>How the service is charge</p>
        <div className='row row-cols-3 gx-4 gy-4'>
          <div className='col'>
            <div className='s-category' onClick={()=> {chargeset('time'); settype('time')}}>Time</div>
          </div>
          <div className='col'>
            <div className='s-category' onClick={()=> {chargeset('storage'); settype('storage')}}>Storage</div>
          </div>
        </div>
      </div>
      <div className='price-time mt-5'>
        <div className='s-input'>
          <input
            onChange={(e)=>priceset(e.target.value)}
            type="number"
            placeholder='Enter price' />
          <p>Enter the Service price on the basis of <strong> /Hours</strong>.</p>
        </div>
      </div>
      <div className='price-time mt-4'>
        <div className='s-input'>
          <input 
            onChange={(e)=>priceset(e.target.value)}
            type="number"
            placeholder='Enter price' />
          <p>Enter the Service price on the basis of <strong> /GB</strong>.</p>
        </div>
      </div>
      <div className='d-flex justify-content-end'>
				<span className='next-btn'>Next</span>
			</div>
    </div>
  )
}

export default ServicePrice