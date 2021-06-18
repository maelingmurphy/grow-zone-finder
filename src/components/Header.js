import { IconContext } from 'react-icons';
import { FaSeedling } from 'react-icons/fa';

const Header = () => {
    return(
        <div>
            <IconContext.Provider value={{className: 'icon'}}>
                <FaSeedling />
            </IconContext.Provider>
            <h1>Find Your Grow Zone</h1>
        </div>    
    );
}

export default Header;
