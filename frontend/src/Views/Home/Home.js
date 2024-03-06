import React, { useState, useEffect } from 'react';
import './home.css';
import background from './b4.png';
import backgroundDark from './b5.png';
import Clock from 'react-simple-clock' // Make sure this component can accept an initial time prop
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import { useDarkMode } from '../../components/DarkModeContext/DarkModeContext';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contacts from '../../components/Contacts/Contacts';

const Home = () => {
    const [time, setTime] = useState(new Date());
    const { darkMode } = useDarkMode();

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setTime(new Date());
    };

    return (
        <>
            <div className="home-container">
                <div className="background-image-container">
                    <img src={darkMode ? backgroundDark : background} alt="Background" className="background-image" />
                    <div className='clock-container'>
                        <Clock
                            live={true}
                            initialTime={time} // Pass the current time as a prop
                            hourMarkFormat="number"
                            className={`clock ${darkMode ? 'dark' : ''}`}
                            mode="dark"
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div 
                    className={`quote-container ${darkMode ? 'dark' : ''}`}>
                        <p className="quote">Everything you can imagine is real.</p>
                        <button className="shop-now">Shop now</button>
                    </div>
                </div>
            </div>
            <AboutUs />
            <div className={`home-products-container ${darkMode ? 'dark' : ''}`}>
                <p className={`home-products-container-header ${darkMode ? 'dark' : ''}`}>Featured Products</p>
                <FeaturedProducts />
            </div>
            <Contacts />
        </>
    );
};

export default Home;
