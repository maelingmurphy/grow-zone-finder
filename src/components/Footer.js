import { FaHeart } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>Made with <FaHeart color='#221500'/> by <span><a href="https://twitter.com/maelingcodes" target="_blank" rel="noreferrer">MaelingCodes</a></span> &copy; 2021</p>
        </footer>
    );
}

export default Footer;