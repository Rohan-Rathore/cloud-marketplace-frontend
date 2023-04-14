import React from 'react'

function Contact() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div class="col-6">
        <div class="text-center h3 contact-h ">CONTACT US</div>
        <div class="shadow rounded p-4 border-top1 mt-4">
          <div class="row g-3 mb-3">
              <div class="col">
                  <label class="form-label">First Name<span class="text-danger">*</span></label>
                  <input type="text" class="form-control" aria-label="First name" required />
              </div>
              <div class="col">
                  <label class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" aria-label="Last name" required />
              </div>
          </div>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address<span class="text-danger">*</span></label>
              <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Type your query here</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3 text-center">
              <button class="contact-btn btn text-white">Submit</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Contact