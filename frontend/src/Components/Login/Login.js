import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_ctn flex justify-center items-center">
      <div className="login_box btns_ flex flex-col items-center">
        <h1 className='txt_ text-center'>Login</h1>
        <input type="text" placeholder='Email' className='btns_' />
        <input type="text" placeholder='Password' className='btns_' />
        <div className="trouble_box">
          <Link to="/register" className='txt_ text-center '>Create Account</Link>
          <Link to="/password/forgot" className='txt_ text-center'>Forgot Password</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;