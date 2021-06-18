import { IconContext } from 'react-icons';
import { FaLeaf } from 'react-icons/fa';

const Header = () => {
    return(
        <div>
            <IconContext.Provider value={{className: 'icon'}}>
                <FaLeaf />
            </IconContext.Provider>
            <h1>Find Your Grow Zone</h1>
        </div>    
    );
}

export default Header;
