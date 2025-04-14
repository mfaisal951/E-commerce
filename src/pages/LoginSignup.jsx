import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='your email'/>
          <input type="password" placeholder='your password' />
          <button>Continue</button>
          <p className="loginsignup-login">Already have an accont? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
