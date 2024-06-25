import React, { Fragment } from 'react';
import "./Home.css";
import Navbar from '../layout/Navbar/Navbar';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container flex justify-center items-center body_'>
                <div className='header flex flex-col items-center'>
                    <h1 className='txt_ text-center'>Organize your Projects, Manage your Tasks.</h1>
                    <Link to="/register" className='start_btn bg-sky-600 hover:bg-sky-500'>Start for free</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;