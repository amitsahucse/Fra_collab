import React from 'react';
import './LoginPage.scss'; // Import your CSS file
import {auth,provider} from "../../config.js";
import {signInWithPopup} from "firebase/auth";
import { useState,useEffect } from 'react';
import Welcome from '../welcome/WelcomePage';
import {Navigate, useNavigate} from 'react-router-dom';

const LoginPage = () => {

  const [value,setValue] = useState('')
  // const handleClick =()=>{
  //     signInWithPopup(auth,provider).then((data)=>{
  //         setValue(data.user.email)
  //         localStorage.setItem("email",data.user.email)
  //     })
  // }
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email);
        navigate('/existing-customer'); // Redirect to ExistingCustomer page
    })
  }
  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })

  const navigateToCustomer = () => {
    navigate('/existing-customer');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
         
          <input type="email" placeholder='Enter your e-mail address' id="email" required />
        </div>
        <div className="form-group">
         
          <input type="password" placeholder='Enter your password' id="password" required />
        </div>
        <div className="form-group">
          
          <input type="number" placeholder='Enter your weight (optional)' id="weight" required />
        </div>
        <div className="form-group">
         
          <input type="number"  placeholder='Enter your height (optional)' id="height" required />
        </div>
        <div className="form-group">
          
          <input type="number" placeholder='Enter your age (optional)' id="age" required />
        </div>
        <div className="round-button" onClick={navigateToCustomer}>
            {/*<span role="img" aria-label="lock" >🔒</span>*/}
                <span>Login</span>
              </div>

              
              <div>
        {value? navigate('/existing-customer'):
        <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
      </form>
    </div>
  );
}

export default LoginPage;
