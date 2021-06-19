import { IconContext } from 'react-icons';
import { FaSeedling } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
    return(
        <header>
            <IconContext.Provider value={{className: 'icon'}}>
                <FaSeedling size="2.8em" />
            </IconContext.Provider>
            <h1 class="heading-main">Find Your<br /> Grow Zone</h1>
        </header>    
    );
}

export default Header;
