import React from 'react'

function About() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <div className="col-6">
            <div className="text-center h3 contact-h ">ABOUT US</div>
            <p>We help organizations to manage their cloud services by acting as an intermediary between cloud service providers and consumers. Customers can compare and select the best cloud services based on their specific needs and requirements.</p>
            <p>Overall, we provide you with a flexible and cost-effective way to manage your cloud services. It will help to simplify the complexity of managing multiple cloud providers and ensures that you can take full advantage of the benefits of cloud computing.</p>
          </div>
        </div>
        <div className="d-flex mx-auto text-center my-3 shadow rounded py-3">
            <div className="col">
                <i className="bi bi-geo-alt-fill h-color h2"></i>
                <br />
                <span className="h6 mt-3">Headquaters</span>
                <br />
                <span className="text-muted">Indore</span>
            </div>
            <div className="col">
                <i className="bi bi-envelope-fill e-color h2"></i>
                <br />
                <span className='h6 mt-3'>E-Mail</span>
                <br />
                <span className="text-muted">abcd@gmail.com</span>
            </div>
            <div className="col">
                <i className="bi bi-telephone-fill c-color h2"></i>
                <br />
                <span className="h6 mt-3">Phone</span>
                <br />
                <span className="text-muted">+91-987654321</span>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About