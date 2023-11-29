import React, { useState, useEffect } from 'react';
import './home.css';
import background from './b4.png';
import Clock from 'react-simple-clock' // Make sure this component can accept an initial time prop
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
    const [time, setTime] = useState(new Date());

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
                    <img src={background} alt="Background" className="background-image" />
                    <div className='clock-container'>
                        <Clock
                            live={true}
                            initialTime={time} // Pass the current time as a prop
                            hourMarkFormat="number"
                            className="clock"
                            mode="dark"
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div className="quote-container">
                        <p className="quote">Everything you can imagine is real.</p>
                        <button className="shop-now">Shop now</button>
                    </div>
                </div>
            </div>
            <div className='home-products-container'>
                <p className='home-products-container-header'>Featured Products</p>
                <FeaturedProducts />
            </div>
        </>
    );
};

export default Home;
