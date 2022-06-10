import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
       <nav className="navbar" id="navbar">
    <Link to="/" className="brand-logo" id="brand-logo">
        <img src="/images/developer.svg" alt="Developer"/>
        <span>.rizwan</span>
    </Link>
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
    </ul>
    <div className="nav-side-contents">
        <Link to="#">
            <img src="/images/phone.svg" alt="Phone"/>
            <span>+918979074004</span>
        </Link>
        <Link to="mailto:iam@morizwan.in">
            <img src="/images/mail.svg" alt="Email"/>
            <span>iam@morizwan.in</span>
        </Link>
        <button className="login button">Login</button>
    </div>
</nav>
    </div>
  )
}

export default Navbar