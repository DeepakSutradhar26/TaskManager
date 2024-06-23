import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar backdrop-blur-lg border-b border-neutral-500 fixed top-0 z-50 py-3 flex justify-center items-center'>
      <div className='flex justify-between flex-row items-center h-full in_ctn'>
        <div className="logo_box flex justify-start items-center">
          <Link className='logo_name' href="/">LOGO</Link>
        </div>

        <ul className='list_box flex flex-row justify-around items-center'>
          <li><Link >Resources</Link></li>
          <li><Link href="/livechat">LiveChat</Link></li>
          <li><Link href="/videocall">VideoCall</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>

        <div className="btn_box flex flex-row justify-between items-center overflow-hidden">
          <button className='btn modern_btn_ log_btn'>Log In</button>
          <button className='btn bg-sky-600 hover:bg-sky-500'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;