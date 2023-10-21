import React from 'react';
import './LoginPage.scss'; // Import your CSS file

const LoginPage = () => {
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
        <div className="round-button">
            <span role="img" aria-label="lock" style={{color: 'white'}}>🔒</span>
                <span style={{color: 'White'}}>Login</span>
              </div>
        <button type="button" className="google-signin">Sign in with Google</button>
      </form>
    </div>
  );
}

export default LoginPage;
