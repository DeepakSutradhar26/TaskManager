import React, { useEffect, useState } from 'react';
import "./Register.css";
import { Link } from "react-router-dom";
import login_img from "../../Images/log_image.png";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Action/userAction";
import { useAlert } from "react-alert";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error } = useSelector((state) => state.user);

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password));
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }
    }, [dispatch, alert, error]);

    return (
        <div className="register_ctn flex justify-center items-center body_">
            <div className="register_box btns_ flex flex-row items-center">
                <form className="left_box flex flex-col items-center" onSubmit={handleSumbit}>
                    <h1 className='txt_ text-left login_header'>Register</h1>
                    <div className="line_box"></div>
                    <input
                        type="text"
                        placeholder='Name'
                        className='btns  modern_btn_'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    >Sign Up</button>
                    <div className="trouble_box flex flex-col justify-between">
                        <div>
                            <div className='inline'>Already have an Account?</div>
                            <Link to="/dashboard" className='text-left link_txt'>LogIn</Link>
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

export default Register;