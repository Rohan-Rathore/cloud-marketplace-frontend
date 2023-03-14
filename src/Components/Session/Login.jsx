import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../style/signup.css';


function Login() {
  
  const navigate = useNavigate();
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState([])

  const validForm = () =>{
    seterror(error => []);
    if(!email){
      seterror(error => [...error, "Email is required field"]);
    }
    if(!password){
      seterror(error => [...error, "Password is required field"]);
    }
    if(error.length === 0)
    {
      return true;
    }
  }
  const submitFrom = () => {
    if(validForm())
    {
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/signin',
        data: {
          email: email,
          password: password,
        }
      })
     .then((res)=>{
        console.log(res.data);

        localStorage.setItem("token", res.data.token);  //store token in local storage

        navigate('/dashboard', { replace: true })  //redirect to dashboard 
      }).catch((err)=>{
        console.log(err); //handle error
      })
    }
  }
  return (
    <div className='signup-form row d-flex justify-content-center mt-5'>
        <div className='col-4 py-3 px-4 signup-box'>
          {error.length>0 &&
            <div className="alert alert-danger" role="alert">
              {error.map((e, index)=>{
                return(
                  <li key={index}>{e}</li>
                )
              })}
            </div>
          }
          <div className='row mt-5'>
            <label className='signup-field-label col-3'>Email:</label>
            <input 
              type='text' 
              placeholder='Enter your name' 
              className='col-9 signup-from-field' 
              onChange={(e)=>setemail({email: e.target.value})} />
          </div>
          
          <div className='row mt-5'>
            <label className='signup-field-label col-3'>Passowrd:</label>
            <input 
              type='password' 
              placeholder='Enter your name' 
              className='col-9 signup-from-field' 
              onChange={(e)=>setpassword({password: e.target.value})} />
          </div>

          <div className='row mt-5'>
            <button className='signup-btn' onClick={()=>submitFrom()}>Login</button>
          </div>
          
          <div className='row mt-3'>
            <Link className='signup-login-link' to='/session/login'>New user in website?</Link>
          </div>
        </div>
      </div>
  )
}

export default Login;