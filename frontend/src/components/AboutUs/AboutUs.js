import React from 'react';
import './AboutUs.css';
import { ReactTyped as Typed } from 'react-typed'; // Corrected import

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-container">
                <h2 className='about-us-header'>About Us</h2>
                <p className='about-us-p'>Welcome to <span className="highlight">[Your Startup Name]</span>, a cradle of innovation where creativity and practicality merge to redefine possibilities. Established in <span className="highlight">[Year]</span>, our voyage is fueled by the ambition to <span className="highlight">[succinctly describe your mission]</span>. Our core belief in <span className="highlight">[your core belief]</span> propels us to venture beyond the conventional, crafting solutions that resonate and transform.</p>
                <p className='about-us-p'>Our inception was marked by <span className="highlight">[a brief narrative of your startup's origin]</span>. Evolving through challenges, today we stand as <span className="highlight">[describe what your startup has become]</span>, a testament to our relentless pursuit of excellence. Our team, a blend of passion and expertise, is at the heart of <span className="highlight">[what your team focuses on]</span>, striving tirelessly to deliver <span className="highlight">[what you offer]</span> that not only meet expectations but exceed them.</p>
                <div className="mission-section">
                    <i className="mission-icon">📌</i>
                    <Typed
                    className='mission-text'
                        strings={[
                            '"Empowering [Your Mission Statement], we envision a future where [future vision related to your mission]."',
                        ]}
                        typeSpeed={45}
                        backSpeed={55}
                        loop
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
