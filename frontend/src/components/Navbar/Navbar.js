import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png';
import logoWhite from './logo-white.png';

import { MdLightMode } from 'react-icons/md';
import { IoMoonOutline } from "react-icons/io5";

import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, setDarkMode } = useDarkMode();
    const [rotate, setRotate] = useState(0);

    const handleDarkModeToggle = () => {
        setRotate(darkMode ? 20 : -20);  // Toggle the rotation degree
        setDarkMode(!darkMode);
    };
    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            <div className="logo-wrapper">
                <img src={darkMode ? logoWhite : logo} alt='logo' className='logo-img' />
            </div>
            <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
                <motion.li
                    className="nav-item"
                >
                    <motion.div
                        animate={{ rotate: rotate }}
                        transition={{ duration: 0.5 }}
                        className={darkMode ? "icon-container dark" : "icon-container"} // this div handles rotation
                    >
                        {darkMode ?
                            <IoMoonOutline
                                style={{color: '#fff'}}
                                className="dark-mode-button moon"
                                onClick={handleDarkModeToggle}
                            />
                            :
                            <MdLightMode
                                className="dark-mode-button light"
                                onClick={handleDarkModeToggle}
                            />
                        }
                    </motion.div>
                </motion.li>
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
