import React from 'react'
import { useState, useEffect } from 'react'

function ShowCSPServices() {
  const [services, setservices] = useState()
  useEffect(() => {
    
  }, [])
  
  return (
    <div className='show-services'>
      <div>
        <div className='search-box mt-5'>
          <input type="text" name="" id="" placeholder='Search Services by name like - EC2 or by tag name like - storage' />
          <button className=''>Search</button>
        </div>
        <div className='all-services mt-4'>
          <div className='row row-cols-3 gy-4 gx-4'>
            <div className='col service-card'>
              <div class="card ">
                <div class="card-header">
                  COMPUTE
                </div>
                <div class="card-body">
                  <h5 class="card-title">Amazon EC2</h5>
                  <p class="card-text serivce-detail">Resizable compute capacity in the Cloud. <span>Read more</span></p>
                </div>
                <div className='my-2'>
                  <span class="badge bg-primary mx-1">#Compute</span>
                  <span class="badge bg-secondary mx-1">#EC2</span>
                  <span class="badge bg-success mx-1">#Server</span>
                  <span class="badge bg-light text-dark mx-1">#WebServer</span>
                </div>
              </div>
            </div>

            <div className='col service-card'>
              <div class="card">
                <div class="card-header">
                  STORAGE
                </div>
                <div class="card-body">
                  <h5 class="card-title">Amazon S3</h5>
                  <p class="card-text serivce-detail">Secure, durable, and scalable object storage infrastructure. <span>Read more</span></p>
                </div>
                <div className='my-2'>
                  <span class="badge bg-primary mx-1">#Storage</span>
                  <span class="badge bg-secondary mx-1">#S3</span>
                  <span class="badge bg-success mx-1">#ObjectStore</span>
                </div>
              </div>
            </div>

            <div className='col service-card'>
              <div class="card">
                <div class="card-header">
                  DATABASE
                </div>
                <div class="card-body">
                  <h5 class="card-title">Amazon RDS</h5>
                  <p class="card-text serivce-detail">Managed Relational Database Service for MySQL, PostgreSQL, MariaDB, or SQL Server. <span>Read more</span></p>
                </div>
                <div className='my-2'>
                  <span class="badge bg-primary mx-1">#Database</span>
                  <span class="badge bg-secondary mx-1">#MySql</span>
                  <span class="badge bg-success mx-1">#DB</span>
                  <span class="badge bg-light text-dark mx-1">#Redis</span>
                </div>
              </div>
            </div>

            <div className='col service-card'>
              <div class="card ">
                <div class="card-header">
                  COMPUTE
                </div>
                <div class="card-body">
                  <h5 class="card-title">AWS Lambda</h5>
                  <p class="card-text serivce-detail">Compute service that runs your code in response to events and automatically manages the compute resources. <span>Read more</span></p>
                </div>
              </div>
            </div>

            <div className='col service-card'>
              <div class="card">
                <div class="card-header">
                  STORAGE
                </div>
                <div class="card-body">
                  <h5 class="card-title">Amazon S3</h5>
                  <p class="card-text serivce-detail">Secure, durable, and scalable object storage infrastructure. <span>Read more</span></p>
                </div>
              </div>
            </div>

            <div className='col service-card'>
              <div class="card">
                <div class="card-header">
                  DATABASE
                </div>
                <div class="card-body">
                  <h5 class="card-title">Amazon RDS</h5>
                  <p class="card-text serivce-detail">Managed Relational Database Service for MySQL, PostgreSQL, MariaDB, or SQL Server. <span>Read more</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowCSPServices