import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function ServiceDetails() {
  return (
    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
      <div className=''>
				<p className='fw-bold'>Select the Service Categories</p>
				<div className='row row-cols-3 gx-4 gy-4'>
						<div className='col'>
						<div className='s-category category-active'>
              Compute
            </div>
						</div>
						<div className='col'>
						<div className='s-category'>Storage</div>
						</div>
						<div className='col'>
						<div className='s-category'>Database</div>
						</div>
						<div className='col'>
						<div className='s-category'>Machine Learning</div>
						</div>
						<div className='col'>
						<div className='s-category'>Analytics</div>
						</div>
						<div className='col'>
						<div className='s-category'>Mobile</div>
						</div>
						<div className='col'>
						<div className='s-category'>Serverless</div>
						</div>
						<div className='col'>
						<div className='s-category'>Front end Web</div>
						</div>
						<div className='col'>
						<div className='s-category'>Game Tech</div>
						</div>
				</div>
			</div>
    </div>
  )
}

export default ServiceDetails