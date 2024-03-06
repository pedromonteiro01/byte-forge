import React from 'react';
import './Contacts.css'; // Ensure you have corresponding styles for the new elements
import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {

    return (
        <div className="contacts-container">
            <p className='contacts-container-header'>Get in Touch with WebCraft</p>
            <p className='contacts-container-p'>Subscribe to our newsletter to stay updated with the latest news and special offers:</p>
            <form className="newsletter-subscribe">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
            <div className="social-links">
                <a href="https://instagram.com/webcraft" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram className='social-link-a' /> @webcraft
                </a>
                <a href="https://facebook.com/webcraft" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebookF className='social-link-a' /> WebCraft
                </a>
                <a href="https://youtube.com/webcraft" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaYoutube className='social-link-a' /> WebCraft
                </a>
                <a href="mailto:info@webcraft.com" className="social-link">
                    <FaEnvelope className='social-link-a' /> info@webcraft.com
                </a>
            </div>
            <div className='contacts-link-wrapper'>
            <a href="/testimonials" className="contacts-link">Testimonials</a>
            <a href="/terms" className="contacts-link">Terms of Service</a>
            <a href="/privacy" className="contacts-link">Privacy Policy</a>
            </div>
        </div>
    );
}

export default Contacts;
