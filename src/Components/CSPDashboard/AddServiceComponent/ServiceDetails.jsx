import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function ServiceDetails({categoryset, tageset}) {
	const category_list = [
		'Compute', 
		'Storage',
		'Database',
		'Machine Learning',
		'Analytics',
		'Mobile',
		'Serverless',
		'Front end Web',
		'Game Tech'
	]
  return (
    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
      <div className=''>
				<p className='fw-bold'>Select the Service Categories</p>
				<div className='row row-cols-3 gx-4 gy-4'>
					{category_list.map((categ, index) => {
						return(
							<div className='col' key={index}>
								<div className='s-category' onClick={(e)=>categoryset(categ)}>
									{categ}
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className='mt-5'>
				<p className='fw-bold'>Enter tags separated by comma</p>
				<div className='s-input'>
					<input type="text" name="" id="" className='' onChange={(e)=>tageset(e.target.value)} />
					<p>like for EC2 service tage would be - compute, server, EC2.</p>
				</div>
			</div>
			<div className='d-flex justify-content-end'>
				<span className='next-btn'>Next</span>
			</div>
    </div>
  )
}

export default ServiceDetails