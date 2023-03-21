import React from 'react'

function ServiceIntro() {
  return (
		<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
			<div className='s-input'>
				<input 
						type="text"
						placeholder='service name' />
				<p>Enter the Service name like EC2, DynamoDB, S3.</p>
			</div>
				
			<div className='s-input mt-4'>
				<textarea name="" id="" cols="30" rows="10"
						placeholder='service description'>
				</textarea>
				<p>Tell about the Service.</p>
			</div>
		</div>
  )
}

export default ServiceIntro