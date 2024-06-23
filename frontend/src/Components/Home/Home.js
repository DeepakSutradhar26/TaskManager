import React, { Fragment } from 'react';
import "./Home.css";
import Navbar from '../layout/Navbar/Navbar';

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className='container flex justify-center items-center'>
                <div className='header flex flex-col items-center'>
                    <h1 className='txt_ text-center'>Organize your Projects, Manage your Tasks.</h1>
                    <button className='start_btn bg-sky-600 hover:bg-sky-500'>Start for free</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;