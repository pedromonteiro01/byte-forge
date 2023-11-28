import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo-wrapper">
                <img src={logo} alt='logo' className='logo-img'/>
            </div>
            <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/products">Products</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
