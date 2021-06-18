import { IconContext } from 'react-icons';
import { FaSeedling } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
    return(
        <header>
            <IconContext.Provider value={{className: 'icon'}}>
                <FaSeedling />
            </IconContext.Provider>
            <h1>Find Your Grow Zone</h1>
        </header>    
    );
}

export default Header;
