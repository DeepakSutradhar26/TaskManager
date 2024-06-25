import React, { useEffect, useState } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import login_img from "../../Images/log_image.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Action/userAction";
import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, alert, error]);

  return (
    <div className="login_ctn flex justify-center items-center body_">
      <div className="login_box btns_ flex flex-row items-center">
        <form className="left_box flex flex-col items-center" onSubmit={handleSumbit}>
          <h1 className='txt_ text-left login_header'>Login</h1>
          <div className="line_box"></div>
          <input
            type="email"
            placeholder='Email'
            className='btns  modern_btn_'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            className='btns  modern_btn_'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className='big_btn bg-sky-600 hover:bg-sky-500'
          >Log in</button>
          <div className="trouble_box flex flex-col justify-between">
            <Link to="/password/forgot" className='text-left link_txt'>Forgot Password</Link>
            <div>
              <div className='inline'>Don't have an account?</div>
              <Link to="/register" className='text-left link_txt'>Create Account</Link>
            </div>
          </div>
        </form>
        <div className="login_img flex justify-center items-center">
          <img src={login_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login;