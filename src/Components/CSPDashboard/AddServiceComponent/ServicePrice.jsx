import React, {useState} from 'react'
import '../style.css'
function ServicePrice({chargeset, priceset}) {
  const [stype, settype] = useState('time');
  const activeOp = (e) =>{
    let elem = document.getElementsByClassName('price-op');
    console.log(elem);
    e.target.classList.add('bg-active');
  }
  return (
    <div class="tab-pane fade" id="list-price" role="tabpanel" aria-labelledby="list-price-list">
      <div>
        <p>How the service is charge</p>
        <div className='row row-cols-3 gx-4 gy-4'>
          <div className='col'>
            <div className='s-category price-op' onClick={(e)=> {chargeset('time'); settype('time'); activeOp(e)}}>Time</div>
          </div>
          <div className='col'>
            <div className='s-category price-op' onClick={()=> {chargeset('storage'); settype('storage')}}>Storage</div>
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