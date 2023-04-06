import React from 'react'

function ServiceIntro({nameset, descriptionset}) {
  return (
		<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
			<div className='s-input'>
				<input 
					type="text"
					placeholder='service name' 
					onChange={(e)=>nameset(e.target.value)}
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