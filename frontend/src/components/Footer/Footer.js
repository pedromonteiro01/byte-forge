import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import './Footer.css';

const Footer = () => {

    const { darkMode } = useDarkMode();

    return (
        <div className={`footer-wrapper ${darkMode ? 'dark' : ''}`}>
            <p>&copy; Copyright - ByteForge</p>
        </div>
    )
}

export default Footer;