import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/signup.css';

export class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      email: '',
      password: '',
    }
    this.submitFrom = this.submitFrom.bind();
  }
  submitFrom = () =>{
    console.log("form submit");
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/signup',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
    }).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className='signup-form row d-flex justify-content-center mt-5'>
        <div className='col-4 py-3 px-4 signup-box'>
          <div className='row mt-3'>
            <label className='signup-field-label col-3'>Name:</label>
            <input 
              type='text' 
              placeholder='Enter your name' 
              className='col-9 signup-from-field' 
              onChange={(e)=>this.setState({name: e.target.value})} />
          </div>
          
          <div className='row mt-5'>
            <label className='signup-field-label col-3'>Email:</label>
            <input 
              type='text' 
              placeholder='Enter email' 
              className='col-9 signup-from-field' 
              onChange={(e)=>this.setState({email: e.target.value})} />
          </div>
          
          <div className='row mt-5'>
            <label className='signup-field-label col-3'>Passowrd:</label>
            <input 
              type='password' 
              placeholder='Enter password' 
              className='col-9 signup-from-field' 
              onChange={(e)=>this.setState({password: e.target.value})} />
          </div>

          <div className='row mt-5'>
            <label className='signup-field-label col-3'></label>
            <input 
              type='password'
              placeholder='Enter confirm password' 
              className='col-9 signup-from-field' />
          </div>

          <div className='row mt-5'>
            <button className='signup-btn' onClick={()=>this.submitFrom()}>Signup</button>
          </div>
          
          <div className='row mt-3'>
            <Link className='signup-login-link' to='/session/login'>Already have a account?</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup