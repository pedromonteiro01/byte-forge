import React, { useState, useEffect } from 'react';
import ReactClock from 'react-clock';
import './home.css';
import background from './b4.png';
import Clock from 'react-simple-clock'

const Home = () => {
    const [time, setTime] = useState(new Date()); // Declare the time state here

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000); // Set up an interval to update the time every second

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    // Function to update the time state
    const tick = () => {
        setTime(new Date());
    };

    return (
        <div className="home-container">
            <div className="background-image-container">
                <img src={background} alt="Background" className="background-image" />
                <div className='clock-container'>
                    <Clock live={true} hourMarkFormat="number" className="clock" mode="dark" style={{ color: 'white' }} />
                </div>
                <div className="quote-container">
                    <p className="quote">Live in moments that matter.</p>
                    <button className="shop-now">Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
